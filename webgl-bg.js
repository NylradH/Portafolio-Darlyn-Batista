/**
 * DMB SEGURIDAD — WEBGL BACKGROUND
 * Neural Network Visualization with Three.js-like raw WebGL
 * Darlyn Miguel Batista Caraballo
 * High-performance, GPU-accelerated background
 */

(function() {
  'use strict';

  // ========================================
  // CONFIGURATION
  // ========================================
  const CONFIG = {
    // Particle system
    particleCount: Math.min(800, Math.max(200, Math.floor(window.innerWidth * window.innerHeight / 8000))),
    particleSize: { min: 1, max: 3 },
    particleSpeed: 0.15,
    connectionDistance: 140,
    connectionOpacity: 0.08,
    
    // Neural network
    nodeCount: 35,
    nodeRadius: { min: 2, max: 6 },
    nodeSpeed: 0.08,
    edgeCount: 60,
    pulseSpeed: 0.002,
    
    // Grid
    gridSize: 80,
    gridLineWidth: 0.5,
    gridOpacity: 0.02,
    gridSpeed: 0.05,
    
    // Colors (CSS custom property driven)
    colors: {
      primary: [6/255, 182/255, 212/255],      // #06b6d4 - cyan
      secondary: [59/255, 130/255, 246/255],  // #3b82f6 - blue
      accent: [168/255, 85/255, 247/255],     // #a855f7 - purple
      glow: [22/255, 211/255, 238/255],       // #22d3ee - cyan light
      white: [1, 1, 1]
    },
    
    // Performance
    targetFPS: 60,
    maxFrameTime: 1000/30, // fallback to 30fps if needed
    reduceMotion: false
  };

  // Detect reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    CONFIG.reduceMotion = true;
    CONFIG.particleCount = Math.min(CONFIG.particleCount, 100);
    CONFIG.nodeCount = Math.min(CONFIG.nodeCount, 15);
    CONFIG.edgeCount = Math.min(CONFIG.edgeCount, 25);
  }

  // ========================================
  // STATE
  // ========================================
  let canvas = null;
  let gl = null;
  let animationId = null;
  let lastTime = 0;
  let frameCount = 0;
  let fps = 60;
  
  // Buffers
  let particleBuffer = null;
  let particleData = null;
  let nodeBuffer = null;
  let nodeData = null;
  let edgeBuffer = null;
  let edgeData = null;
  
  // Shaders
  let particleProgram = null;
  let lineProgram = null;
  let gridProgram = null;
  
  // Uniform locations
  let particleUniforms = {};
  let lineUniforms = {};
  let gridUniforms = {};
  
  // Time
  let time = 0;
  let mouseX = 0.5;
  let mouseY = 0.5;

  // ========================================
  // SHADER SOURCES
  // ========================================
  const SHADERS = {
    // Particle vertex shader
    particleVert: `
      attribute vec2 a_position;
      attribute float a_size;
      attribute vec3 a_color;
      attribute float a_alpha;
      attribute float a_pulse;
      
      uniform vec2 u_resolution;
      uniform float u_time;
      uniform vec2 u_mouse;
      
      varying vec3 v_color;
      varying float v_alpha;
      varying float v_pulse;
      
      void main() {
        vec2 pos = a_position;
        
        // Subtle mouse attraction
        vec2 mouseInfluence = (u_mouse - 0.5) * 0.1;
        pos += mouseInfluence * 0.05;
        
        // Subtle floating animation
        pos.x += sin(u_time * 0.3 + a_position.y * 0.01) * 0.02;
        pos.y += cos(u_time * 0.2 + a_position.x * 0.01) * 0.015;
        
        // Convert to clip space
        vec2 clipSpace = (pos / u_resolution) * 2.0 - 1.0;
        clipSpace.y *= -1.0;
        
        gl_Position = vec4(clipSpace, 0.0, 1.0);
        gl_PointSize = a_size * (1.0 + sin(u_time * 2.0 + a_pulse) * 0.3);
        
        v_color = a_color;
        v_alpha = a_alpha;
        v_pulse = a_pulse;
      }
    `,
    
    // Particle fragment shader
    particleFrag: `
      precision mediump float;
      
      varying vec3 v_color;
      varying float v_alpha;
      varying float v_pulse;
      
      void main() {
        vec2 center = gl_PointCoord - 0.5;
        float dist = length(center);
        
        // Soft circular particle with glow
        float alpha = smoothstep(0.5, 0.0, dist) * v_alpha;
        
        // Pulse effect
        float pulse = sin(v_pulse * 10.0) * 0.1 + 0.9;
        alpha *= pulse;
        
        // Radial gradient
        vec3 color = v_color * (1.0 + (1.0 - dist) * 0.5);
        
        gl_FragColor = vec4(color, alpha);
      }
    `,
    
    // Line vertex shader (for connections and grid)
    lineVert: `
      attribute vec2 a_start;
      attribute vec2 a_end;
      attribute float a_alpha;
      attribute vec3 a_color;
      
      uniform vec2 u_resolution;
      uniform float u_time;
      uniform float u_progress; // for animated lines
      
      varying float v_alpha;
      varying vec3 v_color;
      
      void main() {
        // Interpolate along line for dashed animation
        vec2 pos = mix(a_start, a_end, u_progress);
        
        vec2 clipSpace = (pos / u_resolution) * 2.0 - 1.0;
        clipSpace.y *= -1.0;
        
        gl_Position = vec4(clipSpace, 0.0, 1.0);
        
        v_alpha = a_alpha;
        v_color = a_color;
      }
    `,
    
    // Line fragment shader
    lineFrag: `
      precision mediump float;
      
      varying float v_alpha;
      varying vec3 v_color;
      
      void main() {
        gl_FragColor = vec4(v_color, v_alpha);
      }
    `,
    
    // Grid vertex shader
    gridVert: `
      attribute vec2 a_position;
      
      uniform vec2 u_resolution;
      uniform float u_time;
      uniform float u_gridSize;
      
      void main() {
        vec2 pos = a_position;
        
        // Subtle grid animation
        pos.x += sin(u_time * 0.1) * 2.0;
        pos.y += cos(u_time * 0.1) * 2.0;
        
        vec2 clipSpace = (pos / u_resolution) * 2.0 - 1.0;
        clipSpace.y *= -1.0;
        
        gl_Position = vec4(clipSpace, 0.0, 1.0);
      }
    `,
    
    // Grid fragment shader
    gridFrag: `
      precision mediump float;
      
      uniform float u_opacity;
      uniform vec3 u_color;
      
      void main() {
        gl_FragColor = vec4(u_color, u_opacity);
      }
    `
  };

  // ========================================
  // UTILITY FUNCTIONS
  // ========================================
  function compileShader(gl, source, type) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error('Shader compile error:', gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  function createProgram(gl, vertSource, fragSource) {
    const vertShader = compileShader(gl, vertSource, gl.VERTEX_SHADER);
    const fragShader = compileShader(gl, fragSource, gl.FRAGMENT_SHADER);
    if (!vertShader || !fragShader) return null;
    
    const program = gl.createProgram();
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);
    
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program));
      return null;
    }
    
    return program;
  }

  function resizeCanvas() {
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    
    if (gl) {
      gl.viewport(0, 0, canvas.width, canvas.height);
    }
  }

  // ========================================
  // INITIALIZATION
  // ========================================
  function initWebGL() {
    canvas = document.getElementById('webgl-bg');
    if (!canvas) return false;
    
    gl = canvas.getContext('webgl', {
      alpha: true,
      antialias: true,
      preserveDrawingBuffer: false,
      powerPreference: 'high-performance'
    });
    
    if (!gl) {
      console.warn('WebGL not supported, falling back to CSS background');
      return false;
    }
    
    // Check for required extensions
    const ext = gl.getExtension('OES_standard_derivatives');
    if (!ext) console.warn('OES_standard_derivatives not available');
    
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.disable(gl.DEPTH_TEST);
    gl.clearColor(0, 0, 0, 0);
    
    // Create programs
    particleProgram = createProgram(gl, SHADERS.particleVert, SHADERS.particleFrag);
    lineProgram = createProgram(gl, SHADERS.lineVert, SHADERS.lineFrag);
    gridProgram = createProgram(gl, SHADERS.gridVert, SHADERS.gridFrag);
    
    if (!particleProgram || !lineProgram || !gridProgram) {
      return false;
    }
    
    // Get uniform locations
    particleUniforms = {
      resolution: gl.getUniformLocation(particleProgram, 'u_resolution'),
      time: gl.getUniformLocation(particleProgram, 'u_time'),
      mouse: gl.getUniformLocation(particleProgram, 'u_mouse')
    };
    
    lineUniforms = {
      resolution: gl.getUniformLocation(lineProgram, 'u_resolution'),
      time: gl.getUniformLocation(lineProgram, 'u_time'),
      progress: gl.getUniformLocation(lineProgram, 'u_progress')
    };
    
    gridUniforms = {
      resolution: gl.getUniformLocation(gridProgram, 'u_resolution'),
      time: gl.getUniformLocation(gridProgram, 'u_time'),
      gridSize: gl.getUniformLocation(gridProgram, 'u_gridSize'),
      opacity: gl.getUniformLocation(gridProgram, 'u_opacity'),
      color: gl.getUniformLocation(gridProgram, 'u_color')
    };
    
    // Initialize geometry
    initParticles();
    initNodesAndEdges();
    initGrid();
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    return true;
  }

  // ========================================
  // PARTICLE SYSTEM
  // ========================================
  function initParticles() {
    const count = CONFIG.particleCount;
    particleData = new Float32Array(count * 7); // x, y, size, r, g, b, alpha, pulse
    
    for (let i = 0; i < count; i++) {
      const baseIndex = i * 7;
      // Position
      particleData[baseIndex] = Math.random() * canvas.width;
      particleData[baseIndex + 1] = Math.random() * canvas.height;
      // Size
      particleData[baseIndex + 2] = CONFIG.particleSize.min + Math.random() * (CONFIG.particleSize.max - CONFIG.particleSize.min);
      // Color (mix of primary/secondary/accent)
      const colorChoice = Math.random();
      if (colorChoice < 0.4) {
        particleData[baseIndex + 3] = CONFIG.colors.primary[0];
        particleData[baseIndex + 4] = CONFIG.colors.primary[1];
        particleData[baseIndex + 5] = CONFIG.colors.primary[2];
      } else if (colorChoice < 0.7) {
        particleData[baseIndex + 3] = CONFIG.colors.secondary[0];
        particleData[baseIndex + 4] = CONFIG.colors.secondary[1];
        particleData[baseIndex + 5] = CONFIG.colors.secondary[2];
      } else {
        particleData[baseIndex + 3] = CONFIG.colors.accent[0];
        particleData[baseIndex + 4] = CONFIG.colors.accent[1];
        particleData[baseIndex + 5] = CONFIG.colors.accent[2];
      }
      // Alpha
      particleData[baseIndex + 6] = 0.15 + Math.random() * 0.35;
      // Pulse phase
      particleData[baseIndex + 7] = Math.random() * Math.PI * 2;
    }
    
    particleBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, particleBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, particleData, gl.DYNAMIC_DRAW);
  }

  function updateParticles(dt) {
    if (!particleData) return;
    const count = CONFIG.particleCount;
    const speed = CONFIG.particleSpeed * dt * 0.01;
    
    for (let i = 0; i < count; i++) {
      const baseIndex = i * 7;
      
      // Slow drift
      particleData[baseIndex] += (Math.random() - 0.5) * speed * 2;
      particleData[baseIndex + 1] += (Math.random() - 0.5) * speed * 2;
      
      // Wrap around
      if (particleData[baseIndex] < 0) particleData[baseIndex] = canvas.width;
      if (particleData[baseIndex] > canvas.width) particleData[baseIndex] = 0;
      if (particleData[baseIndex + 1] < 0) particleData[baseIndex + 1] = canvas.height;
      if (particleData[baseIndex + 1] > canvas.height) particleData[baseIndex + 1] = 0;
    }
    
    gl.bindBuffer(gl.ARRAY_BUFFER, particleBuffer);
    gl.bufferSubData(gl.ARRAY_BUFFER, 0, particleData);
  }

  // ========================================
  // NODES & EDGES (Neural Network)
  // ========================================
  function initNodesAndEdges() {
    // Nodes
    const nodeCount = CONFIG.nodeCount;
    nodeData = new Float32Array(nodeCount * 7); // x, y, radius, r, g, b, pulse
    
    for (let i = 0; i < nodeCount; i++) {
      const baseIndex = i * 7;
      nodeData[baseIndex] = Math.random() * canvas.width;
      nodeData[baseIndex + 1] = Math.random() * canvas.height;
      nodeData[baseIndex + 2] = CONFIG.nodeRadius.min + Math.random() * (CONFIG.nodeRadius.max - CONFIG.nodeRadius.min);
      
      const colorChoice = Math.random();
      if (colorChoice < 0.5) {
        nodeData[baseIndex + 3] = CONFIG.colors.primary[0];
        nodeData[baseIndex + 4] = CONFIG.colors.primary[1];
        nodeData[baseIndex + 5] = CONFIG.colors.primary[2];
      } else {
        nodeData[baseIndex + 3] = CONFIG.colors.accent[0];
        nodeData[baseIndex + 4] = CONFIG.colors.accent[1];
        nodeData[baseIndex + 5] = CONFIG.colors.accent[2];
      }
      nodeData[baseIndex + 6] = Math.random() * Math.PI * 2;
    }
    
    nodeBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, nodeBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, nodeData, gl.DYNAMIC_DRAW);
    
    // Edges (connections between nodes)
    const edgeCount = CONFIG.edgeCount;
    edgeData = new Float32Array(edgeCount * 7); // x1, y1, x2, y2, r, g, b, alpha (packed)
    
    for (let i = 0; i < edgeCount; i++) {
      const n1 = Math.floor(Math.random() * nodeCount);
      const n2 = Math.floor(Math.random() * nodeCount);
      if (n1 === n2) continue;
      
      const baseIndex = i * 7;
      // Will be updated each frame from node positions
      edgeData[baseIndex] = 0;
      edgeData[baseIndex + 1] = 0;
      edgeData[baseIndex + 2] = 0;
      edgeData[baseIndex + 3] = 0;
      edgeData[baseIndex + 4] = CONFIG.colors.primary[0];
      edgeData[baseIndex + 5] = CONFIG.colors.primary[1];
      edgeData[baseIndex + 6] = CONFIG.colors.primary[2];
      // Alpha stored in w component of color or separate
    }
    
    edgeBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, edgeBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, edgeData, gl.DYNAMIC_DRAW);
  }

  function updateNodesAndEdges(dt) {
    if (!nodeData || !edgeData) return;
    const nodeCount = CONFIG.nodeCount;
    const speed = CONFIG.nodeSpeed * dt * 0.01;
    time += dt * 0.001;
    
    // Update nodes
    for (let i = 0; i < nodeCount; i++) {
      const baseIndex = i * 7;
      nodeData[baseIndex] += (Math.random() - 0.5) * speed;
      nodeData[baseIndex + 1] += (Math.random() - 0.5) * speed;
      
      // Wrap
      if (nodeData[baseIndex] < 0) nodeData[baseIndex] = canvas.width;
      if (nodeData[baseIndex] > canvas.width) nodeData[baseIndex] = 0;
      if (nodeData[baseIndex + 1] < 0) nodeData[baseIndex + 1] = canvas.height;
      if (nodeData[baseIndex + 1] > canvas.height) nodeData[baseIndex + 1] = 0;
      
      // Pulse
      nodeData[baseIndex + 6] += 0.02;
    }
    
    // Update edges from node positions
    const edgeCount = CONFIG.edgeCount;
    for (let i = 0; i < edgeCount; i++) {
      const n1 = Math.floor(Math.random() * nodeCount);
      let n2 = Math.floor(Math.random() * nodeCount);
      if (n1 === n2) n2 = (n2 + 1) % nodeCount;
      
      const baseIndex = i * 7;
      const n1Base = n1 * 7;
      const n2Base = n2 * 7;
      
      edgeData[baseIndex] = nodeData[n1Base];
      edgeData[baseIndex + 1] = nodeData[n1Base + 1];
      edgeData[baseIndex + 2] = nodeData[n2Base];
      edgeData[baseIndex + 3] = nodeData[n2Base + 1];
      // Color varies
      edgeData[baseIndex + 4] = CONFIG.colors.primary[0];
      edgeData[baseIndex + 5] = CONFIG.colors.primary[1];
      edgeData[baseIndex + 6] = CONFIG.colors.primary[2];
    }
    
    gl.bindBuffer(gl.ARRAY_BUFFER, nodeBuffer);
    gl.bufferSubData(gl.ARRAY_BUFFER, 0, nodeData);
    
    gl.bindBuffer(gl.ARRAY_BUFFER, edgeBuffer);
    gl.bufferSubData(gl.ARRAY_BUFFER, 0, edgeData);
  }

  // ========================================
  // GRID
  // ========================================
  let gridVertices = null;
  let gridBuffer = null;
  
  function initGrid() {
    const size = CONFIG.gridSize;
    const cols = Math.ceil(canvas.width / size) + 1;
    const rows = Math.ceil(canvas.height / size) + 1;
    
    const vertices = [];
    
    // Vertical lines
    for (let x = 0; x <= cols; x++) {
      vertices.push(x * size, 0);
      vertices.push(x * size, canvas.height);
    }
    
    // Horizontal lines
    for (let y = 0; y <= rows; y++) {
      vertices.push(0, y * size);
      vertices.push(canvas.width, y * size);
    }
    
    gridVertices = new Float32Array(vertices);
    gridBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, gridBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, gridVertices, gl.STATIC_DRAW);
  }

  // ========================================
  // RENDERING
  // ========================================
  function renderParticles() {
    if (!particleProgram || !particleBuffer) return;
    
    gl.useProgram(particleProgram);
    
    // Uniforms
    gl.uniform2f(particleUniforms.resolution, canvas.width, canvas.height);
    gl.uniform1f(particleUniforms.time, time);
    gl.uniform2f(particleUniforms.mouse, mouseX, mouseY);
    
    // Attributes
    const stride = 7 * 4; // 7 floats * 4 bytes
    const posLoc = gl.getAttribLocation(particleProgram, 'a_position');
    const sizeLoc = gl.getAttribLocation(particleProgram, 'a_size');
    const colorLoc = gl.getAttribLocation(particleProgram, 'a_color');
    const alphaLoc = gl.getAttribLocation(particleProgram, 'a_alpha');
    const pulseLoc = gl.getAttribLocation(particleProgram, 'a_pulse');
    
    gl.bindBuffer(gl.ARRAY_BUFFER, particleBuffer);
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, stride, 0);
    gl.enableVertexAttribArray(sizeLoc);
    gl.vertexAttribPointer(sizeLoc, 1, gl.FLOAT, false, stride, 2 * 4);
    gl.enableVertexAttribArray(colorLoc);
    gl.vertexAttribPointer(colorLoc, 3, gl.FLOAT, false, stride, 3 * 4);
    gl.enableVertexAttribArray(alphaLoc);
    gl.vertexAttribPointer(alphaLoc, 1, gl.FLOAT, false, stride, 6 * 4);
    gl.enableVertexAttribArray(pulseLoc);
    gl.vertexAttribPointer(pulseLoc, 1, gl.FLOAT, false, stride, 7 * 4);
    
    gl.drawArrays(gl.POINTS, 0, CONFIG.particleCount);
  }

  function renderEdges() {
    if (!lineProgram || !edgeBuffer) return;
    
    gl.useProgram(lineProgram);
    
    gl.uniform2f(lineUniforms.resolution, canvas.width, canvas.height);
    gl.uniform1f(lineUniforms.time, time);
    // Animate line drawing progress
    gl.uniform1f(lineUniforms.progress, (Math.sin(time * 0.5) + 1) * 0.5);
    
    const stride = 7 * 4;
    const startLoc = gl.getAttribLocation(lineProgram, 'a_start');
    const endLoc = gl.getAttribLocation(lineProgram, 'a_end');
    const alphaLoc = gl.getAttribLocation(lineProgram, 'a_alpha');
    const colorLoc = gl.getAttribLocation(lineProgram, 'a_color');
    
    gl.bindBuffer(gl.ARRAY_BUFFER, edgeBuffer);
    gl.enableVertexAttribArray(startLoc);
    gl.vertexAttribPointer(startLoc, 2, gl.FLOAT, false, stride, 0);
    gl.enableVertexAttribArray(endLoc);
    gl.vertexAttribPointer(endLoc, 2, gl.FLOAT, false, stride, 2 * 4);
    gl.enableVertexAttribArray(colorLoc);
    gl.vertexAttribPointer(colorLoc, 3, gl.FLOAT, false, stride, 4 * 4);
    // Alpha is implicit from color intensity
    
    gl.lineWidth(1.0);
    gl.drawArrays(gl.LINES, 0, CONFIG.edgeCount * 2);
  }

  function renderNodes() {
    // Nodes rendered as larger points with same particle shader but different attribs
    // For simplicity, we'll render them as part of particle system with larger size
    // Actually, let's create a separate draw call for nodes
    if (!particleProgram || !nodeBuffer) return;
    
    gl.useProgram(particleProgram);
    
    gl.uniform2f(particleUniforms.resolution, canvas.width, canvas.height);
    gl.uniform1f(particleUniforms.time, time);
    gl.uniform2f(particleUniforms.mouse, mouseX, mouseY);
    
    const stride = 7 * 4;
    const posLoc = gl.getAttribLocation(particleProgram, 'a_position');
    const sizeLoc = gl.getAttribLocation(particleProgram, 'a_size');
    const colorLoc = gl.getAttribLocation(particleProgram, 'a_color');
    const alphaLoc = gl.getAttribLocation(particleProgram, 'a_alpha');
    const pulseLoc = gl.getAttribLocation(particleProgram, 'a_pulse');
    
    gl.bindBuffer(gl.ARRAY_BUFFER, nodeBuffer);
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, stride, 0);
    gl.enableVertexAttribArray(sizeLoc);
    gl.vertexAttribPointer(sizeLoc, 1, gl.FLOAT, false, stride, 2 * 4);
    gl.enableVertexAttribArray(colorLoc);
    gl.vertexAttribPointer(colorLoc, 3, gl.FLOAT, false, stride, 3 * 4);
    gl.enableVertexAttribArray(alphaLoc);
    gl.vertexAttribPointer(alphaLoc, 1, gl.FLOAT, false, stride, 6 * 4);
    gl.enableVertexAttribArray(pulseLoc);
    gl.vertexAttribPointer(pulseLoc, 1, gl.FLOAT, false, stride, 6 * 4); // pulse at index 6
    
    gl.drawArrays(gl.POINTS, 0, CONFIG.nodeCount);
  }

  function renderGrid() {
    if (!gridProgram || !gridBuffer) return;
    
    gl.useProgram(gridProgram);
    
    gl.uniform2f(gridUniforms.resolution, canvas.width, canvas.height);
    gl.uniform1f(gridUniforms.time, time);
    gl.uniform1f(gridUniforms.gridSize, CONFIG.gridSize);
    gl.uniform1f(gridUniforms.opacity, CONFIG.gridOpacity);
    gl.uniform3f(gridUniforms.color, ...CONFIG.colors.primary);
    
    const posLoc = gl.getAttribLocation(gridProgram, 'a_position');
    gl.bindBuffer(gl.ARRAY_BUFFER, gridBuffer);
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);
    
    gl.lineWidth(CONFIG.gridLineWidth);
    gl.drawArrays(gl.LINES, 0, gridVertices.length / 2);
  }

  // ========================================
  // MAIN RENDER LOOP
  // ========================================
  function render(currentTime) {
    const dt = currentTime - lastTime;
    lastTime = currentTime;
    
    // FPS calculation
    frameCount++;
    if (frameCount % 60 === 0) {
      fps = Math.round(1000 / (dt || 16.67));
      // Auto-reduce quality if FPS drops
      if (fps < 30 && CONFIG.particleCount > 100) {
        CONFIG.particleCount = Math.max(100, CONFIG.particleCount - 50);
        initParticles();
      }
    }
    
    if (!CONFIG.reduceMotion) {
      time += dt * 0.001;
      updateParticles(dt);
      updateNodesAndEdges(dt);
    }
    
    gl.clear(gl.COLOR_BUFFER_BIT);
    
    // Render order: grid -> edges -> particles -> nodes
    renderGrid();
    renderEdges();
    renderParticles();
    renderNodes();
    
    animationId = requestAnimationFrame(render);
  }

  // ========================================
  // MOUSE TRACKING
  // ========================================
  function initMouseTracking() {
    document.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = (e.clientX - rect.left) / rect.width;
      mouseY = (e.clientY - rect.top) / rect.height;
      mouseX = Math.max(0, Math.min(1, mouseX));
      mouseY = Math.max(0, Math.min(1, mouseY));
    }, { passive: true });
    
    // Touch support
    document.addEventListener('touchmove', (e) => {
      if (e.touches[0]) {
        const rect = canvas.getBoundingClientRect();
        mouseX = (e.touches[0].clientX - rect.left) / rect.width;
        mouseY = (e.touches[0].clientY - rect.top) / rect.height;
        mouseX = Math.max(0, Math.min(1, mouseX));
        mouseY = Math.max(0, Math.min(1, mouseY));
      }
    }, { passive: true });
  }

  // ========================================
  // CLEANUP
  // ========================================
  function cleanup() {
    if (animationId) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }
    if (gl) {
      if (particleBuffer) gl.deleteBuffer(particleBuffer);
      if (nodeBuffer) gl.deleteBuffer(nodeBuffer);
      if (edgeBuffer) gl.deleteBuffer(edgeBuffer);
      if (gridBuffer) gl.deleteBuffer(gridBuffer);
      if (particleProgram) gl.deleteProgram(particleProgram);
      if (lineProgram) gl.deleteProgram(lineProgram);
      if (gridProgram) gl.deleteProgram(gridProgram);
    }
  }

  // ========================================
  // INIT
  // ========================================
  function init() {
    // Check if canvas exists
    if (!document.getElementById('webgl-bg')) {
      console.warn('WebGL canvas not found');
      return;
    }
    
    const success = initWebGL();
    if (!success) {
      // Hide canvas, show CSS fallback
      const canvas = document.getElementById('webgl-bg');
      if (canvas) canvas.style.display = 'none';
      return;
    }
    
    initMouseTracking();
    lastTime = performance.now();
    animationId = requestAnimationFrame(render);
    
    // Handle visibility change
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        if (animationId) cancelAnimationFrame(animationId);
      } else {
        lastTime = performance.now();
        animationId = requestAnimationFrame(render);
      }
    });
    
    // Expose cleanup for SPA navigation
    window.__webglBgCleanup = cleanup;
  }

  // Start when DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
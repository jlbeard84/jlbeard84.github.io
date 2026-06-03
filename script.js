(function() {
  // ---- content cycling ----
  var blocks = document.querySelectorAll('.content-block');
  var currentBlock = 0;
  var totalBlocks = blocks.length;
  var cycleTimer = null;
  var typewriterTimer = null;

  // ---- static overlay ----
  var canvas = document.getElementById('static-canvas');
  var overlay = document.getElementById('static-overlay');
  var ctx = canvas.getContext('2d');
  var staticRunning = false;

  function resizeCanvas() {
    var rect = overlay.parentElement.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  }
  window.addEventListener('resize', resizeCanvas);
  setTimeout(resizeCanvas, 100);

  function generateStatic(duration) {
    if (staticRunning) return;
    staticRunning = true;
    overlay.classList.add('active');

    var start = performance.now();
    function frame() {
      var elapsed = performance.now() - start;
      if (elapsed > duration) {
        overlay.classList.remove('active');
        staticRunning = false;
        return;
      }
      var imageData = ctx.createImageData(canvas.width, canvas.height);
      var data = imageData.data;
      for (var i = 0; i < data.length; i += 4) {
        var v = Math.random() * 255;
        data[i]     = v;
        data[i + 1] = v;
        data[i + 2] = v;
        data[i + 3] = Math.random() > 0.82 ? 200 : Math.random() * 80;
      }
      ctx.putImageData(imageData, 0, 0);
      requestAnimationFrame(frame);
    }
    frame();
  }

  // ---- typewriter ----
  function stopTypewriter() {
    if (typewriterTimer) {
      clearInterval(typewriterTimer);
      typewriterTimer = null;
    }
  }

  function runTypewriter(el) {
    stopTypewriter();
    var text = el.getAttribute('data-text');
    if (!text) return;
    el.textContent = '';
    var idx = 0;
    typewriterTimer = setInterval(function() {
      if (idx < text.length) {
        el.textContent += text.charAt(idx);
        idx++;
      } else {
        clearInterval(typewriterTimer);
        typewriterTimer = null;
      }
    }, 20);
  }

  // ---- block transition with static burst ----
  function showBlock(index, skipOut) {
    var prev = blocks[currentBlock];

    // If there's a different current block, trigger static + fade it out
    if (prev && prev !== blocks[index] && !skipOut) {
      // Fire static burst right before transition
      generateStatic(280 + Math.random() * 120);

      prev.classList.remove('active', 'transition-in');
      prev.classList.add('transition-out');
      setTimeout(function() { showBlock(index, true); }, 450);
      return;
    }

    // Clear all animation classes
    blocks.forEach(function(b) {
      b.classList.remove('transition-out', 'transition-in');
    });

    var next = blocks[index];
    next.classList.add('transition-in', 'active');

    var tw = next.querySelector('.typewriter');
    if (tw) {
      setTimeout(function() { stopTypewriter(); runTypewriter(tw); }, 200);
    }

    currentBlock = index;

    if (cycleTimer) clearTimeout(cycleTimer);
    cycleTimer = setTimeout(nextBlock, 6000);
  }

  function nextBlock() {
    var next = (currentBlock + 1) % totalBlocks;
    showBlock(next);
  }

  // ---- initial state ----
  var initialTW = blocks[0].querySelector('.typewriter');
  if (initialTW) {
    setTimeout(function() { runTypewriter(initialTW); }, 400);
  }
  cycleTimer = setTimeout(nextBlock, 6000);

  // ---- click to cycle manually ----
  document.getElementById('crt-tube').addEventListener('click', function() {
    if (cycleTimer) clearTimeout(cycleTimer);
    // Fire static on manual click too
    generateStatic(200 + Math.random() * 100);
    nextBlock();
  });

})();

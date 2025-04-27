function initAOS() {
    const elements = document.querySelectorAll('[data-aos]');
  
    function handleScroll() {
      const triggerBottom = window.innerHeight * 0.85;
  
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < triggerBottom) {
          el.classList.add('aos-animate');
        } else {
          el.classList.remove('aos-animate');
        }
      });
    }
  
    // Set easing from attribute
    elements.forEach(el => {
      const easing = el.getAttribute('data-aos-easing');
      if (easing) {
        el.style.transitionTimingFunction = easing;
      }
    });
  
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll);
  }
  
  initAOS();
  
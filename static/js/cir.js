document.addEventListener('DOMContentLoaded', function () {
    const $bigBall = document.querySelector('.cursor__ball--big');
    const $smallBall = document.querySelector('.cursor__ball--small');
    const $hoverables = document.querySelectorAll('.hoverable');
  
    // Listeners
    document.body.addEventListener('mousemove', onMouseMove);
  
    $hoverables.forEach(hoverable => {
      hoverable.addEventListener('mouseenter', onMouseHover);
      hoverable.addEventListener('mouseleave', onMouseHoverOut);
    });
  
    // Move the cursor
    function onMouseMove(e) {
      const x = e.clientX;
      const y = e.clientY;
  
      gsap.to($bigBall, {
        duration: 0.4,
        x: x - 15,
        y: y - 15,
        ease: "power2.out"
      });
  
      gsap.to($smallBall, {
        duration: 0.1,
        x: x - 19.5,
        y: y - 34,
        ease: "power2.out"
      });
    }
    
    // Hover an element
    function onMouseHover() {
      gsap.to($bigBall, {
        duration: 0.3,
        scale: 2,
        ease: "power2.out"
      });
  
      gsap.to($smallBall, {
        duration: 0.3,
        scale: 2,
        ease: "power2.out"
      });
    }
  
    function onMouseHoverOut() {
      gsap.to($bigBall, {
        duration: 0.3,
        scale: 1,
        ease: "power2.out"
      });
  
      gsap.to($smallBall, {
        duration: 0.3,
        scale: 1,
        ease: "power2.out"
      });
    }
  });
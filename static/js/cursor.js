$(document).ready(function() {
  var customCursor = $('#customCursor');

  // Update the position of the custom cursor based on mouse movement
  $(document).mousemove(function(e) {
      customCursor.css({
          left: e.pageX + 'px',
          top: e.pageY + 'px'
      });
  });

  // Add hover effect on elements
  $('*').hover(
      function() {
          customCursor.addClass('hover');
      },
      function() {
          customCursor.removeClass('hover');
      }
  );
});
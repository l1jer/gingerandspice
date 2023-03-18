// Modal
document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('myModal');
    var span = document.getElementsByClassName('close')[0];

  // Show the modal after 2 seconds (2000 milliseconds)
  setTimeout(function () {
    modal.style.display = 'block';
  }, 1200);
    // Close the modal when the user clicks on the "x" button
    span.onclick = function () {
      modal.style.display = 'none';
    };

    // Close the modal when the user clicks outside of it
    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    };
  });

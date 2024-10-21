document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".sparkles-container");

    // Function to create a new sparkle
    function createSparkle(x, y) {
      const sparkle = document.createElement("div");
      sparkle.classList.add("sparkle");
      sparkle.style.top = y + "px";
      sparkle.style.left = x + "px";
      container.appendChild(sparkle);

      // Remove the sparkle element after a short duration
      setTimeout(() => {
        sparkle.remove();
      }, 500);
    }

    // Event listener for mousemove to track the cursor
    document.addEventListener("mousemove", function(event) {
      const mouseX = event.pageX;
      const mouseY = event.pageY;
      createSparkle(mouseX, mouseY);
    });
  });


document.addEventListener("DOMContentLoaded", function() {
    const stars = document.querySelectorAll(".star");
  
    // Add click event to each star
    stars.forEach((star, index) => {
      star.addEventListener("click", () => {
        // Highlight the clicked star and all previous stars
        stars.forEach((s, i) => {
          if (i <= index) {
            s.classList.add("selected"); // Highlight star up to the clicked one
            s.innerHTML = "★"; // Change to filled star
          } else {
            s.classList.remove("selected"); // Remove highlight from remaining stars
            s.innerHTML = "☆"; // Change back to empty star
          }
        });
      });
    });
  
    // Function to handle form submission (for demonstration)
    function alertfun() {
      const selectedStar = document.querySelector(".star.selected");
      if (selectedStar) {
        const rating = Array.from(stars).indexOf(selectedStar) + 1;
        alert("You selected a rating of " + rating + " stars.");
      } else {
        alert("Please select a rating before submitting.");
      }
    }
  });
  
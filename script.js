const headerContent = document.querySelectorAll('p');
const plusIcons = document.querySelectorAll('.plus-icon');
const isImages = new Array(plusIcons.length).fill(false);

plusIcons.forEach((plusIcon, index) => {
    plusIcon.addEventListener("click", function() {
    // Toggle between two images
    if (isImages[index] && headerContent[index].style.display === "none" ) {
      plusIcon.src = "./image/icon-minus.svg";
      headerContent[index].style.display = "block";
    } else {
      plusIcon.src = "./image/icon-plus.svg";
      headerContent[index].style.display = "none";
    }

    // Update the state variable
    isImages[index] = !isImages[index];
  });
});

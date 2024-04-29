const imageSets = [
  [
    "./assets/images/exp_app_images/home_screen.png",
    "./assets/images/exp_app_images/adding_items.png",
    "./assets/images/exp_app_images/remove_items.png",
    "./assets/images/exp_app_images/edit_items.png",
  ],
  [
    "./assets/images/auto-parts-project/image_1.png",
    "./assets/images/auto-parts-project/image_2.png",
    "./assets/images/auto-parts-project/image_3.png",
    "./assets/images/auto-parts-project/image_4.png",
    "./assets/images/auto-parts-project/image_5.png",
    "./assets/images/auto-parts-project/image_6.png",
  ],

  // Add more arrays as needed for additional projects
];

// Select all project containers
const projectContainers = document.querySelectorAll(".project-container");

// Loop through each project container
projectContainers.forEach((container, index) => {
  // Select the image container and the "Next Image" button within the current project container
  const imageContainer = container.querySelector(".projectImageContainer");
  const nextBtn = container.querySelector(".next-btn");

  // Get the image paths for the current project
  const imagePaths = imageSets[index];

  // Initial index for the current project
  let currentIndex = 0;

  // Function to show the next image for the current project
  const showNextImage = () => {
    // Increment the index and make it loop back to 0 when it reaches the end
    currentIndex = (currentIndex + 1) % imagePaths.length;
    // Set the source of the image to the next image
    imageContainer.querySelector("img").src = imagePaths[currentIndex];
  };

  // Attach click event listener to the "Next Image" button for the current project
  nextBtn.addEventListener("click", showNextImage);

  // Initially display the first image for the current project
  imageContainer.querySelector("img").src = imagePaths[currentIndex];
});

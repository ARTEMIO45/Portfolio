const imageSets = [
    [
        "Images/exp_app_images/Home_page.png",
        "Images/exp_app_images/Form_layout.png",
        "Images/exp_app_images/Form_Filled.png",
        "Images/exp_app_images/List_items.png"
    ],
    [
        "Images/auto-parts-project/image_1.png",
        "Images/auto-parts-project/image_2.png",
        "Images/auto-parts-project/image_3.png",
        "Images/auto-parts-project/image_4.png",
        "Images/auto-parts-project/image_5.png",
        "Images/auto-parts-project/image_6.png"
    ]

    // Add more arrays as needed for additional projects
];

// Select all project containers
const projectContainers = document.querySelectorAll('.project-container');

// Loop through each project container
projectContainers.forEach((container, index) => {
    // Select the image container and the "Next Image" button within the current project container
    const imageContainer = container.querySelector('.projectImageContainer');
    const nextBtn = container.querySelector('.next-btn');
    
    // Get the image paths for the current project
    const imagePaths = imageSets[index];

    // Initial index for the current project
    let currentIndex = 0;

    // Function to show the next image for the current project
    const showNextImage = () => {
        // Increment the index and make it loop back to 0 when it reaches the end
        currentIndex = (currentIndex + 1) % imagePaths.length;
        // Set the source of the image to the next image
        imageContainer.querySelector('img').src = imagePaths[currentIndex];
    };

    // Attach click event listener to the "Next Image" button for the current project
    nextBtn.addEventListener('click', showNextImage);

    // Initially display the first image for the current project
    imageContainer.querySelector('img').src = imagePaths[currentIndex];
});

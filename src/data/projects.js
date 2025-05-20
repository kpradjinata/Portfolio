// Example: portfolio-app/src/data/projects.js

// Import your project images here if you want to use React's import mechanism
// import project1Image from '../assets/images/project1-thumbnail.jpg'; // Example
// import project2Image from '../assets/images/project2-thumbnail.png'; // Example

const projects = [
  {
    id: 'picture-perfect',
    title: 'Picture Perfect',
    description: 'Revolutionizing presentations for students and business professionals with real-time engagement detection and speech analysis.',
    imageUrl: 'https://via.placeholder.com/400x300?text=Picture+Perfect', // Replace with actual path e.g., project1Image or '/images/project1.jpg' if in public folder
    // liveLink: 'https://example.com/live-project1',
    // githubLink: 'https://github.com/yourusername/project1',
    tags: ['React', 'AI', 'Web Development'],
  },
  {
    id: 'ios-fitness-app',
    title: 'iOS Fitness App',
    description: 'Elevate your workout with this iOS app, using ARKit for 3D body motion tracking and real-time feedback. Visualize exercises through a virtual character, ensuring accuracy and effectiveness in your fitness routine.',
    imageUrl: 'https://via.placeholder.com/400x300?text=iOS+Fitness+App', // Replace with actual path
    // liveLink: 'https://example.com/live-project2',
    // githubLink: 'https://github.com/yourusername/project2',
    tags: ['iOS', 'Swift', 'ARKit', 'Fitness'],
  },
  // Add more project objects here as you create them
  // {
  //   id: 'new-project',
  //   title: 'New Awesome Project',
  //   description: 'A brief description of your new awesome project.',
  //   imageUrl: '../assets/images/new-project-image.jpg', // if importing
  //   // imageUrl: '/images/new-project-image.jpg', // if in public/images
  //   liveLink: '#',
  //   githubLink: '#',
  //   tags: ['Technology', 'Innovation'],
  // },
];

export default projects; 
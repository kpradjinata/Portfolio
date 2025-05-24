export const projects = [
  {
    id: 'portfolio-site',
    title: 'Portfolio Website',
    date: 'Jun 2024',
    description: 'A modern, responsive portfolio website to showcase my projects, skills, and experience. Built with React and Tailwind CSS, and deployed using GitHub Pages with automated CI/CD.',
    keyFeatures: [
      'Responsive design for all devices',
      'Dynamic project showcase with detail pages',
      'Client-side routing with React Router',
      'Dark mode support',
      'Continuous deployment via GitHub Actions',
      'Custom domain support'
    ],
    technologiesUsed: [
      'React for UI',
      'Tailwind CSS for styling',
      'React Router for navigation',
      'GitHub Actions for CI/CD',
      'GitHub Pages for hosting'
    ],
    achievements: [
      'Automated deployment pipeline with GitHub Actions',
      'Professional online presence with custom domain support',
      'Showcases all major projects and skills'
    ],
    impact: 'This website serves as my digital resume and project showcase, making it easy for recruiters and collaborators to learn about my work and contact me.',
    skills: ['React.js', 'Tailwind CSS', 'JavaScript', 'CI/CD', 'GitHub Actions'],
    githubUrl: 'https://github.com/kpradjinata/Portfolio',
    techStack: ['React', 'Tailwind CSS', 'GitHub Actions', 'GitHub Pages'],
  },
  {
    id: 'binder',
    title: 'Binder',
    date: 'Oct 2024',
    description: 'Binder is a comprehensive educational platform designed to enhance collaborative learning and academic success. It streamlines course management, encourages interactive discussions, automates quiz generation, and intelligently pairs students for group activities using advanced machine learning. Binder transforms the way students engage with course content by integrating automation, real-time feedback, and data-driven collaboration.',
    keyFeatures: [
      'Course Management: Provides detailed course tracking and progress visualization.',
      'Interactive Discussions: Facilitates real-time discussions and feedback among students and instructors.',
      'Automated Quiz Generation: Dynamically creates quizzes from uploaded materials, enhancing learning retention.',
      'Intelligent Group Pairing: Utilizes the PyBKT machine learning algorithm to pair students, ensuring optimal collaboration and learning outcomes.',
      'Group Collaboration: Enables efficient teamwork through study group management and activity tracking.',
    ],
    technologiesUsed: [
      'Machine Learning: PyBKT for Bayesian Knowledge Tracing',
      'Frontend: React with TypeScript',
      'Backend: Node.js for API management, PDF to Text conversion',
      'Additional Tools: CSS for animations, integrated student performance analytics',
    ],
    achievements: [
      'Enhanced collaboration by intelligently pairing students for group activities based on their learning profiles.',
      'Improved learning outcomes through personalized recommendations and tailored study sessions.',
      'Automated real-time feedback for quizzes and activities, streamlining the learning process.',
    ],
    impact: 'Binder redefines modern education by making collaborative learning more accessible and effective. By leveraging PyBKT, Binder ensures that student groups are optimized for peer learning, fostering engagement and success. It empowers students and educators to focus on meaningful interactions by automating repetitive tasks like quiz generation and performance tracking.',
    skills: ['React.js', 'Python (Programming Language)', 'TypeScript', 'Convex', 'HTML', 'Large Language Models (LLM)'],
    githubUrl: 'https://github.com/kpradjinata/Binder', 
    techStack: ['React', 'TypeScript', 'Node.js', 'PyBKT', 'CSS', 'Convex'],
  },
  {
    id: 'homelink',
    title: 'HomeLink',
    date: 'Mar 2021',
    hackathonWin: '2nd Place Hackathon Win',
    description: 'HomeLink is a mobile application designed to address homelessness through a user-friendly platform that allows individuals to report and share observations of rough sleepers. Utilizing advanced location-based services, GPS, and SMS integration, the app facilitates immediate notifications to local shelters and authorities. It aims to foster a proactive approach to homelessness, bridging the gap between communities and vulnerable individuals.',
    keyFeatures: [
      'Quick and Detailed Reporting: Users can submit detailed reports about rough sleepers.',
      'Automated SMS Notifications: Notifications are sent to local shelters based on GPS coordinates.',
      'Core Location Integration: Efficiently captures and processes location data.',
      'Machine Learning Insights: Predicts future homelessness hotspots based on reported data.',
    ],
    technologiesUsed: [
      'Core Location for location tracking',
      'SMS integration for immediate notifications',
      'Swift and Mapbox for user interface and map functionality',
    ],
    achievements: [
      'Facilitated streamlined communication between local shelters and communities.',
      'Created predictive models for identifying homelessness trends using machine learning.',
      'Enabled community members to contribute actively toward resolving homelessness issues.',
    ],
    impact: 'HomeLink empowers individuals and organizations to address homelessness through data-driven insights and real-time reporting. The app strengthens community ties by encouraging collaboration and fostering an inclusive approach to resolving one of society\'s most pressing challenges.',
    skills: ['Python (Programming Language)', 'Swift (Programming Language)', 'GPS Applications', 'Machine Learning'],
    githubUrl: 'https://github.com/kpradjinata/HomeLink',
    techStack: ['Swift', 'Mapbox', 'Core Location', 'SMS', 'Python', 'Machine Learning'],
  },
  {
    id: 'quickfit',
    title: 'QuickFit',
    date: 'Mar 2021',
    description: 'Quickfit is an innovative iOS application that leverages body motion tracking in 3D space to enhance fitness tracking and provide real-time feedback for exercise performance. Designed for fitness enthusiasts and professionals, the app captures body movements through advanced visualization tools, delivering a virtual fitness coach experience.',
    keyFeatures: [
      '3D Body Motion Tracking: Accurately tracks movements in real-time for detailed performance analysis.',
      'Visual Exercise Feedback: Offers dynamic visualizations to help users refine their fitness routines.',
      'Integrated Feedback Loop: Provides actionable insights based on tracked data to optimize workouts.',
    ],
    technologiesUsed: [
      'ARKit for augmented reality-based motion tracking',
      'Real-time rendering for motion visualization',
      'Integration with fitness sensors and wearables',
    ],
    achievements: [
      'Enhanced user engagement by providing interactive fitness tracking and personalized feedback.',
      'Successfully utilized AR technology to deliver a unique fitness experience.',
    ],
    impact: 'Quickfit empowers users to achieve their fitness goals by combining innovative motion tracking with real-time insights. It bridges the gap between traditional fitness tracking and immersive technology, creating a more engaging and effective workout experience.',
    skills: ['Swift (Programming Language)', 'Python (Programming Language)', 'Augmented Reality (AR)', 'Machine Learning'],
    githubUrl: 'https://github.com/kpradjinata/Quickfit',
    techStack: ['Swift', 'ARKit', 'Python', 'Real-time Rendering', 'Wearables'],
  },
  {
    id: 'serendipity',
    title: 'Serendipity',
    date: 'Feb 2021',
    description: 'Serendipity is a revolutionary iOS mobile application designed to enhance mental health awareness and support. This innovative app allows users to voice their feelings and challenges through a seamless interface, fostering greater understanding and management of mental well-being. By employing advanced sentiment analysis and biometric encryption, Serendipity offers a personalized approach to mental health care.',
    keyFeatures: [
      'Sentiment Analysis: Utilizes VADER Lexicon to detect emotional polarity from user input, providing insightful feedback.',
      'Biometric Encryption: Protects user data and privacy using advanced FaceID authentication.',
    ],
    technologiesUsed: [
      'Natural language processing (NLP) with VADER Lexicon',
      'RESTful APIs for backend operations',
      'Integration with Google Firebase for data storage',
    ],
    achievements: [
      'Enhanced user experience by enabling real-time emotional analysis and feedback.',
      'Provided secure and personalized mental health tracking for over 12,000 users across the U.S.',
    ],
    impact: 'Serendipity addresses the stigma surrounding mental health by offering a private, secure, and accessible platform. It empowers users to explore their feelings, receive guidance, and gain actionable insights for self-improvement.',
    skills: ['Swift (Programming Language)', 'Python (Programming Language)', 'Natural Language Processing (NLP)', 'Xcode'],
    githubUrl: 'https://github.com/kpradjinata/Serendipity',
    techStack: ['Swift', 'Python', 'VADER', 'Firebase', 'REST API', 'NLP'],
  },
  {
    id: 'picture-perfect',
    title: 'Picture Perfect',
    date: 'Jan 2021',
    hackathonWin: '1st Place Hackathon Win',
    description: 'PicturePerfect is a cutting-edge iOS mobile application that transforms how users create, deliver, and analyze presentations. Built with advanced engagement detection and speech analysis features, the app empowers users to refine their public speaking skills and perfect their presentation style. The platform is tailored for students, professionals, and businesspeople who aim to optimize their presentation impact.',
    keyFeatures: [
      'Engagement Detection: Utilizes CoreML to analyze eye movement and facial expressions, providing real-time feedback on audience engagement.',
      'Speech Analysis: Employs a natural language processing library to assess speaking pace, clarity, and tone, notifying users about areas of improvement.',
    ],
    technologiesUsed: [
      'CoreML for machine learning',
      'SpeechRecognizer for speech analysis',
      'Integration with social platforms like Twitter for community engagement',
    ],
    achievements: [
      'Enabled users to track and enhance their public speaking effectiveness with real-time analytics.',
      'Created a unique, user-friendly mobile application with targeted feedback mechanisms for public speaking improvement.',
    ],
    impact: 'PicturePerfect supports users in delivering impactful presentations by improving their confidence and communication skills. The app addresses the nuances of real-time feedback and ensures presentations are audience-focused.',
    skills: ['Python (Programming Language)', 'Swift (Programming Language)', 'Xcode'],
    githubUrl: 'https://github.com/kpradjinata/PicturePerfect',
    techStack: ['Swift', 'Python', 'CoreML', 'SpeechRecognizer', 'Xcode', 'Twitter API'],
  },
  {
    id: 'bread-and-butter',
    title: 'Bread and Butter',
    date: 'Jun 2020',
    hackathonWin: '2nd Place Hackathon Win',
    description: 'As part of the EpsilonHacks initiative, our team developed a platform designed to bridge the gap between local restaurants and their communities. The platform enables users to create posts, invite friends, and make reservations at their favorite eateries. It also facilitates collaboration among restaurants and their patrons, encouraging support for small businesses.',
    keyFeatures: [
      'Dynamic website for restaurant-user interaction.',
      'Real-time communication via RESTful APIs.',
      'Mobile-friendly design for cross-platform usability.'
    ],
    technologiesUsed: [
      'Front-End: Flask, HTML, CSS, and JavaScript.',
      'Back-End: Python with SQLAlchemy for database management.',
      'APIs: Google Cloud Vision API for OCR and AWS S3 for scalable data storage.',
    ],
    achievements: [
      'Built a fully functional dynamic website for seamless restaurant-user interaction.',
      'Enabled real-time communication through advanced RESTful APIs.',
      'Integrated mobile-friendly features, ensuring cross-platform usability.',
    ],
    impact: 'This project directly supports the local restaurant community by enhancing their ability to connect with customers and manage orders efficiently. It also served as a platform for us to refine skills in full-stack development and API integration.',
    skills: ['Swift (Programming Language)', 'Python (Programming Language)', 'Amazon Web Services (AWS)', 'Xcode', 'Google Cloud Platform (GCP)'],
    githubUrl: 'https://github.com/kpradjinata/Bread-and-Butter',
    techStack: ['Flask', 'HTML', 'CSS', 'JavaScript', 'Python', 'SQLAlchemy', 'Google Cloud Vision API', 'AWS S3'],
  },
  {
    id: 'food-for-thought',
    title: 'Food For Thought',
    date: 'Dec 2019',
    hackathonWin: '3rd Place Hackathon Win',
    description: 'Food For Thought utilizes Google Cloud Platform API and detects images and analyzes the words on it. We then utilize a database in order to classify the ingredients in different categories regarding the different possible effects such as cancer, diabetes, headaches, etc. After that, we utilized Django in order to link the website with the frontend with the backend.',
    keyFeatures: [
      'Image detection and text analysis via GCP API.',
      'Ingredient classification based on health effects.',
      'Web interface using Django.'
    ],
    technologiesUsed: [
      'Google Cloud Platform API',
      'Django',
      'Database for ingredient classification',
    ],
    achievements: [
      '3rd Place Hackathon Win'
    ],
    impact: 'N/A', // Impact was not specified, providing a default
    skills: ['Python (Programming Language)', 'Django', 'Google Cloud Platform (GCP)'],
    githubUrl: 'https://github.com/kpradjinata/Sigmahacks',
    techStack: ['Google Cloud Platform', 'Django', 'Python', 'Database'],
  },
]; 
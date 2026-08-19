export const siteData = {
  profile: {
    name: "Donyung Kim",
    position: "Robotics Researcher at NaviFra",
    fields: ["3D Vision", "Spatial Intelligence", "Robotic Perception"],
    bio: "I am a robotics researcher at NaviFra, working on 3D perception and 6-DoF object tracking for robotic systems. I received my M.S. in Electronic Engineering from Yeungnam University, where I worked on multimodal computer vision in the Advanced Visual Intelligence Laboratory (AVIL), advised by Prof. Sungho Kim. My current research interests lie in spatial intelligence for precise and interactive 3D object understanding.",
    advisor: {
      name: "Prof. Sungho Kim",
      href: "https://scholar.google.com/citations?user=3TptC38AAAAJ&hl=en"
    },
    email: "dnkim9970@gmail.com",
    location: "Suwon, South Korea",
    portrait: "assets/profile/donyung-kim-portrait.jpg",
    portraitAlt: "Portrait of Donyung Kim",
    socialLinks: [
      { label: "Email", href: "mailto:dnkim9970@gmail.com" },
      { label: "CV", href: "assets/cv/donyung-kim-cv.pdf" },
      { label: "Google Scholar", href: "https://scholar.google.com/citations?user=c_Vk9dgAAAAJ&hl=ko" },
      { label: "GitHub", href: "https://github.com/Gaspar-kim" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/donyung-kim-72859737b/" }
    ]
  },

  navigation: [
    { label: "Research", href: "#research" },
    { label: "Publications", href: "#publications" },
    { label: "Experience", href: "#experience" },
    { label: "CV", href: "assets/cv/donyung-kim-cv.pdf" }
  ],

  researchIntroduction: {
    lead: "My research focuses on spatial intelligence that can maintain an explicit 3D model of a physical object, identify where that model disagrees with real observations, and actively gather the evidence needed to refine its geometry. I am particularly interested in moving beyond plausible 3D reconstruction toward explicit representations that can be continuously verified and corrected against the physical world.",
    stages: [
      {
        title: "3D Perception & Tracking",
        description: "Builds an initial explicit 3D representation of an object and keeps it aligned with the object as it moves."
      },
      {
        title: "Active Verification & Refinement",
        description: "Compares the model with real observations, identifies uncertainty, and seeks evidence that can refine the geometry."
      },
      {
        title: "Interactive Physical Understanding",
        description: "Extends explicit understanding to deformable objects and how their shape changes under action."
      }
    ],
    goal: "My long-term goal is to extend this framework from rigid objects to deformable objects and robotic manipulation.",
    loop: ["Observation", "Verification", "Interaction", "Self-correction"]
  },

  news: [
    { date: "2026", text: "NaviDock received Gold in Engineering & Robotics at the 2026 Edison Awards." },
    { date: "2026", text: "NaviDock was named a CES 2026 Innovation Awards Honoree in Robotics." },
    { date: "Sep. 2025", text: "Joined NaviFra as a Robotics Researcher, working primarily on NaviDock." },
    { date: "Jul. 2025", text: "Our black-ice detection patent was registered in Korea (No. 10-2831565)." },
    { date: "Dec. 2024", text: "RecNet was published in IEEE Access." },
    { date: "Nov. 2024", text: "PLZ-TM was published in IEEE Access." }
  ],

  publications: [
    {
      title: "RecNet: Reinforcement Common Feature Mapping Network for Fast Template Matching in Visible-LWIR Images",
      authors: ["Donyung Kim", "Seungeon Lee", "Inho Park", "Geonjong Kim", "Sungho Kim"],
      authorRole: "First author",
      venue: "IEEE Access, vol. 12, pp. 195890–195905",
      year: "2024",
      image: "assets/publications/recnet-architecture.webp",
      imageAlt: "RecNet architecture for visible-LWIR template matching",
      summary: "An end-to-end CNN that combines common-feature mapping with ZNCC for fast visible-LWIR template matching.",
      links: [
        { label: "Paper", href: "https://doi.org/10.1109/ACCESS.2024.3520169" },
        { label: "DOI", href: "https://doi.org/10.1109/ACCESS.2024.3520169" }
      ]
    },
    {
      title: "Perceptible Lightweight Zero-Mean Normalized Cross-Correlation for Infrared Template Matching",
      authors: ["Seungeon Lee", "Donyung Kim", "Inho Park", "Geonjong Kim", "Sungho Kim"],
      equalContributionAuthors: ["Seungeon Lee", "Donyung Kim"],
      authorRole: "† Equal contribution · Co-first author",
      venue: "IEEE Access, vol. 12, pp. 164777–164791",
      year: "2024",
      image: "assets/publications/plztm-figure.webp",
      imageAlt: "PLZ-TM network and lightweight ZNCC architecture",
      summary: "A pooling-free CNN and lightweight ZNCC module for real-time infrared template matching across cameras with different fields of view.",
      links: [
        { label: "Paper", href: "https://doi.org/10.1109/ACCESS.2024.3492206" },
        { label: "DOI", href: "https://doi.org/10.1109/ACCESS.2024.3492206" }
      ]
    },
    {
      title: "Generation of 3D LWIR Thermal Maps Based on Deep Learning SLAM: Feasibility and Evaluation",
      authors: ["Donyung Kim", "Sungho Kim"],
      authorRole: "First author",
      venue: "Artificial Intelligence and Machine Learning for Multi-Domain Operations Applications VI, Proc. SPIE 13051, 130510T",
      year: "2024",
      image: "assets/publications/thermal-map-results.webp",
      imageAlt: "Visible-LWIR depth estimation and 3D thermal mapping results",
      summary: "A feasibility study of deep learning-based visual SLAM for building 3D thermal maps from LWIR observations.",
      links: [
        { label: "Paper", href: "https://doi.org/10.1117/12.3013365" },
        { label: "DOI", href: "https://doi.org/10.1117/12.3013365" }
      ]
    },
    {
      title: "Compact Monocular Camera-based Indoor Object Trajectory Extraction System for Enhanced Monitoring",
      authors: ["Donyung Kim", "Sungho Kim"],
      authorRole: "First author",
      venue: "24th International Conference on Control, Automation and Systems (ICCAS), pp. 309–312",
      year: "2024",
      image: "assets/publications/trajectory-results.webp",
      imageAlt: "Indoor digital twin and object trajectory visualization results",
      summary: "A compact method for extracting spatial object trajectories in indoor monitoring systems using a monocular RGB camera.",
      links: []
    },
    {
      title: "Deep Learning Based EO-LWIR Image Registration Obstacles: Survey",
      authors: ["Donyung Kim", "Sungho Kim"],
      authorRole: "First author",
      venue: "23rd International Conference on Control, Automation and Systems (ICCAS)",
      year: "2023",
      image: "assets/publications/iccas-survey-paper.jpg",
      imageAlt: "First page of the EO-LWIR image registration survey",
      summary: "An analysis of intensity-gradient differences, modality-specific content, and shape differences in EO-LWIR registration.",
      links: []
    }
  ],

  projects: [
    {
      title: "Image-based 3D Monitoring & Segmentation",
      eyebrow: "RLRC · 2024–2025",
      image: "assets/projects/segmentation-integration.webp",
      imageAlt: "Integration of segmentation masks across multiple indoor views",
      description: "A real-time monitoring pipeline combining image-based 3D mapping, pose estimation, multi-camera person re-identification, and the integration of reconstructed maps with 2D segmentation masks.",
      topics: ["3D Reconstruction", "Multi-view Re-ID", "Pose Estimation", "3D Segmentation"]
    },
    {
      title: "Visible–LWIR Registration",
      eyebrow: "Hanwha Systems project · 2023–2025",
      image: "assets/projects/visible-lwir-matching.webp",
      imageAlt: "Visible-LWIR matching comparison and correlation heatmaps",
      description: "Research on real-time registration between wide-field EO imagery and narrow-field LWIR imagery using pooling-free feature mapping and correlation-based matching.",
      topics: ["Multimodal Vision", "Thermal Imaging", "Template Matching"]
    }
  ],

  experience: [
    {
      organization: "NaviFra",
      role: "Robotics Researcher (Full-time)",
      location: "Seoul / Suwon, South Korea",
      date: "Sep. 2025 – Present",
      details: ["Research and development in 3D rendering and 6-DoF object tracking for robotics applications."]
    },
    {
      organization: "Multimodal Contactless Sensing Research Center (RLRC)",
      role: "Researcher — Patient trajectory tracking and monitoring",
      location: "",
      date: "Feb. 2024 – Jun. 2025",
      details: ["Built a real-time 3D monitoring system from image-based mapping, pose estimation, and multi-camera re-identification."]
    },
    {
      organization: "Hanwha Systems — Intelligent Aiming Sight Project",
      role: "Researcher — Real-time EO-LWIR image registration",
      location: "",
      date: "Mar. 2023 – Feb. 2025",
      details: ["Designed a pooling-free CNN and an automatic training strategy for cross-spectral template matching."]
    },
    {
      organization: "Daegu–Gyeongbuk Regional Innovation Platform",
      role: "Researcher — Multimodal human-care mobility sensing and AI",
      location: "",
      date: "May 2024 – Dec. 2024",
      details: ["Developed real-time monitoring for robot and worker movement in a smart-factory environment."]
    },
    {
      organization: "Agency for Defense Development Project",
      role: "Researcher — Optimal route analysis and real-time small-target tracking",
      location: "",
      date: "Jun. 2021 – Dec. 2021",
      details: ["Developed integrated IR–radar tracking for a simulated naval engagement environment."]
    }
  ],

  education: [
    {
      institution: "Yeungnam University",
      degree: "M.S. in Electronic Engineering",
      date: "Mar. 2023 – Feb. 2025",
      location: "Gyeongsan, South Korea",
      details: [
        "Advanced Visual Intelligence Laboratory (AVIL)",
        "Advisor: Prof. Sungho Kim",
        "Thesis: RecNet: Reinforcement Common Feature Mapping Network for Fast Template Matching in Visible-LWIR Images"
      ]
    },
    {
      institution: "Yeungnam University",
      degree: "B.S. in Robotics and Mechanical Engineering",
      date: "Mar. 2017 – Feb. 2023",
      location: "Gyeongsan, South Korea",
      details: []
    }
  ],

  awards: [
    {
      title: "Gold, 2026 Edison Awards — Engineering & Robotics",
      detail: "NaviDock Vision Docking System | Optical Sensing & Spatial Intelligence",
      date: "2026",
      href: "https://edisonawards.com/finalist/navidock-vision-docking-system/"
    },
    {
      title: "CES 2026 Innovation Awards Honoree — Robotics",
      detail: "NaviDock: The World's First Marker-less Vision Docking System",
      date: "2026",
      href: "https://www.ces.tech/ces-innovation-awards/2026/navidock-the-world-s-first-marker-less-vision-docking-system/"
    },
    {
      title: "Grand Prize (President's Award)",
      detail: "Wish Drone Festival — Autonomous Drone Competition, Yeungnam University LINC+ Program",
      date: "Sep. 2017",
      href: ""
    }
  ],

  patents: [
    {
      title: "Black Ice Detection Method and Computing Device for Performing the Same",
      inventors: "Sungho Kim, Chaitali Bhattacharyya, Donyung Kim",
      status: "Korean Patent No. 10-2831565 · Registered Jul. 3, 2025",
      year: "2025"
    },
    {
      title: "Monocular Camera-based Object Position Tracking Method in an Indoor Environment, Computing Device, and Recording Medium",
      inventors: "Sungho Kim, Donyung Kim, Younggyun Yoon",
      status: "Korean Patent Application No. 10-2024-0152824 · Filed Oct. 31, 2024",
      year: "2024"
    },
    {
      title: "Deep Learning-based Visible-LWIR Image Registration Method for an Intelligent Aiming Sight",
      inventors: "Donyung Kim, Sungho Kim, Inho Park, et al.",
      status: "Korean patent application · Filed Jul. 31, 2024",
      year: "2024"
    }
  ]
};

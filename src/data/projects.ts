export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  period: string;
  association?: string;
}

export const projects: Project[] = [
  {
    title: "Weed Detection & Classification in Cotton Fields",
    period: "May 2024 – Nov 2024",
    association: "Jawaharlal Nehru Technological University",
    technologies: ["Python", "YOLOv8", "ResNet-152v2", "TensorFlow", "OpenCV", "NumPy"],
    description: "Developed a deep learning pipeline to automate weed detection in cotton fields, supporting precision agriculture by reducing manual labor and herbicide waste. Curated a custom dataset by blending raw field images with public datasets, preprocessed them with OpenCV, and trained YOLOv8 for weed localization alongside ResNet-152v2 for classification. The hardest part was cleaning noise and handling leaf occlusions under variable outdoor lighting, which highlighted the crucial role of data quality and preprocessing."
  },
  {
    title: "Hue Weather Adaptive Lighting",
    period: "Sep 2025 – Oct 2025",
    association: "Blekinge Institute of Technology (Software Evolution)",
    technologies: ["Home Assistant", "Python", "YAML", "Lovelace UI", "Git"],
    github: "https://github.com/PA2558-SEMP/home-assistant-core-ht25/pull/139",
    description: "Led a team of 7 to fork the Home Assistant core repository and implement a weather-adaptive lighting system. The integration synchronizes Philips Hue lights with real-time weather conditions and time-of-day changes (e.g., transition to cool dimmed lighting on cloudy days and warm illumination on clear nights). As team lead, I designed the logic, wrote the YAML automations, and built custom Lovelace dashboard cards. Sharp Git workflows (cherry-picking, branching) were utilized to resolve merge conflicts across developers."
  },
  {
    title: "AI & Optimization Foundations",
    period: "Oct 2025 – Nov 2025",
    association: "Blekinge Institute of Technology (AI Course)",
    technologies: ["Python", "NumPy", "Matplotlib"],
    description: "Built a suite of foundational search, optimization, and regression models from scratch in Python to compare problem-solving paradigms. I implemented the A* search algorithm for heuristic-driven pathfinding on weighted graphs, developed a Genetic Algorithm to evolve maze-navigating solutions using selection, crossover, and mutation parameters, and benchmarked Linear, Polynomial, and Neural Network regression on non-linear datasets using Mean Squared Error (MSE)."
  },
  {
    title: "Static Code Analysis & Code Quality Review",
    period: "Nov 2025 – Dec 2025",
    association: "Blekinge Institute of Technology",
    technologies: ["Java", "Checkstyle", "SpotBugs", "Git"],
    description: "Audited an open-source Java Library Management System to evaluate software quality beyond raw execution. I integrated and configured Checkstyle to detect style violations and SpotBugs to expose critical runtime risks, such as platform-dependent default encoding and potential null pointer dereferences. Beyond automated tools, I conducted manual code reviews, identifying deep architectural issues like oversized classes, tightly coupled domain-and-I/O logic, and poor separation of concerns."
  },
  {
    title: "Open Source Contributor — deon",
    period: "Feb 2026",
    association: "DrivenData",
    technologies: ["Python", "CLI", "LaTeX", "Git", "Pytest"],
    github: "https://github.com/drivendataorg/deon/pull/183",
    description: "Contributed LaTeX output support to deon, an open-source CLI tool by DrivenData that generates ethics checklists for data science projects. I designed and built the Latex formatter class, registered the .tex extension mapping, and refined the implementation through feedback from upstream maintainers to output valid standalone documents. Address compile-specific errors and added unit tests in Pytest to verify render and write output."
  },
  {
    title: "Gesture-Based AAC Quality Framework (Master's Thesis)",
    period: "April 2026 – Present",
    association: "BTH Sweden & Neurodiversity Foundation",
    technologies: ["Google MediaPipe", "Python", "ISO/IEC 25010", "Assistive Tech"],
    description: "Co-developed a domain-specific software quality evaluation framework tailored for gesture-based Augmentative and Alternative Communication (AAC) systems in collaboration with 2Tango Signs (Neurodiversity Foundation). We adapted the generic ISO/IEC 25010 product quality standard to formulate 8 custom metrics evaluating Gesture Detection Success Rate (DSR), hand count correctness, and latency. I led the empirical validation by conducting a 115-trial black-box evaluation on their real-time MediaPipe-based gesture prototype."
  }
];

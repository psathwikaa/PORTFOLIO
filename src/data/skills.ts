export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages & Core",
    skills: ["Python", "Java (Basic)", "YAML", "JSON", "SQL", "HTML & CSS"]
  },
  {
    category: "AI & Machine Learning",
    skills: ["YOLOv8", "ResNet-152v2", "TensorFlow", "Keras", "OpenCV", "NumPy", "Scikit-Learn", "Jupyter Notebook"]
  },
  {
    category: "IoT & Assistive Tech",
    skills: ["Home Assistant", "Google MediaPipe", "AAC Assistive Technologies"]
  },
  {
    category: "Tools & Quality Management",
    skills: ["GitHub / Git", "VS Code", "Checkstyle", "SpotBugs", "ISO/IEC 25010 Quality Framework", "Linux (User-level)", "Pytest"]
  },
  {
    category: "Currently Learning & Exploring",
    skills: ["Google ADK", "LangChain", "LlamaIndex", "LangGraph", "CrewAI", "Gemini API"]
  }
];

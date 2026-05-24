export type Project = {
  title: string;
  description: string;
  tags: string[];
  repositoryUrl: string;
  imageTone: string;
};

export const projects: Project[] = [
  {
    title: 'Organizational Inventory System',
    description:
      'A full-stack inventory management system with catalog browsing, request approvals, role dashboards, Google authentication, and borrowing workflows.',
    tags: ['Laravel', 'MySQL', 'Blade', 'Bootstrap', 'Socialite'],
    repositoryUrl: 'https://github.com/Ferrs05/Management-Inventory-Website.git',
    imageTone: 'inventory',
  },
  {
    title: 'TomatoAI',
    description:
      'A Streamlit-based tomato condition classifier using TensorFlow to analyze uploaded images and show prediction confidence.',
    tags: ['Python', 'Streamlit', 'TensorFlow', 'Pandas', 'Pillow'],
    repositoryUrl: 'https://github.com/Ferrs05/TomatoAI-Klasifikasi-Kondisi-Tomat-Online.git',
    imageTone: 'ai',
  },
  {
    title: 'Bird Song Classification',
    description:
      'A machine learning exploration focused on classifying bird song audio and experimenting with audio-based prediction workflows.',
    tags: ['Python', 'Machine Learning', 'Audio', 'Classification'],
    repositoryUrl: 'https://github.com/Ferrs05/Bird-song-classification.git',
    imageTone: 'audio',
  },
  {
    title: 'Virtual Gifts',
    description:
      'A Laravel-based web project for virtual gift interactions, built as part of Ferry’s practical full-stack web development work.',
    tags: ['Laravel', 'PHP', 'Vite', 'Axios'],
    repositoryUrl: 'https://github.com/Ferrs05/virtual-gifts.git',
    imageTone: 'web',
  },
  {
    title: 'Watch Party Web App',
    description:
      'A browser watch party application using MPEG-DASH playback and Socket.io synchronization for shared viewing sessions.',
    tags: ['React', 'TypeScript', 'Express', 'Socket.io', 'dash.js'],
    repositoryUrl: 'https://github.com/Ferrs05/Watch-Party-Web-App.git',
    imageTone: 'realtime',
  },
  {
    title: 'Animal Classification Using ANN',
    description:
      'An artificial neural network classification project with a lightweight Gradio interface for image-based prediction experiments.',
    tags: ['Python', 'scikit-learn', 'Gradio', 'NumPy', 'Pillow'],
    repositoryUrl: 'https://github.com/Ferrs05/Animal-Classification-Using-ANN.git',
    imageTone: 'ml',
  },
];

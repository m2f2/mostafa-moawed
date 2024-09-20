export const pinnedRepos: pinnedRepoType[] = [
  {
    id: `RWA`,
    stack: ['HTML', 'BOOTSTRAP'],
    name: `RWA`,
    deployedLink: 'https://m2f2.github.io/RWD/',
    image:
      'rwa.png',
    longDescription: `This Responsive Web Design project showcases expertise in crafting user-centric layouts with Bootstrap. The dynamic navigation bar seamlessly adapts across devices, while the robust grid system ensures optimal content organization on any screen size. Engaging Bootstrap cards elegantly present information, enhancing visual appeal. Interactive elements like buttons and forms elevate functionality, while meticulously applied media queries fine-tune the design at various breakpoints. This project exemplifies a deep understanding of responsive principles, delivering an exceptional user experience regardless of device.`,
  },
  {
    id: `EQ3`,
    stack: ['React.JS', 'Material UI'],
    name: `EQ3 Clone`,
    deployedLink: 'https://eq3-five.vercel.app/',
    image:
      'eq3.png',
    longDescription: `I created a clone of the EQ3 website using Material UI as part of the day 2 task in the ITI Material UI course. The project involved replicating the design and layout of EQ3 using Material UI’s pre-built components, focusing on delivering a responsive and visually appealing interface that reflects the modern style of the original site. Key elements included navigation, product display sections, and interactive components like buttons and forms, all styled with Material UI's flexible theming options.`,
  },
  {
    id: `codementor`,
    stack: ['React.JS', 'Material UI'],
    name: `Codementor Clone`,
    deployedLink: 'https://codementor-delta.vercel.app/',
    image:
      'codementor.png',
    longDescription: `I created a clone of Codementor using Material UI, which is a design framework that provides pre-built, modern components to build a smooth and user-friendly interface. In this project, I utilized Material UI components such as buttons, forms, tables, and menus to design a similar interface to Codementor, a platform that connects developers with mentors in the programming field.`,
  },
  {
    id: `clothing-store`,
    stack: ['React.JS', 'SASS', 'Firebase',"Redux Toolkit"],
    name: `Clothing Store`,
    deployedLink: 'https://crown-clothing-m2f2.netlify.app/',
    image:
      'clothing-store.png',
    longDescription: `I developed a modern e-commerce website for clothing using React and Firebase as the backend. The project incorporates Sass for efficient and modular styling, ensuring a responsive and visually appealing design. I implemented state management using Redux Toolkit for seamless product updates and user interactions. The website features functionalities such as product browsing, shopping cart management, and secure user authentication. Firebase was used to handle real-time database operations and user authentication.`,
  },
];

export interface pinnedRepoType {
  id: string;
  name: string;
  image?: string;
  deployedLink?: string;
  longDescription: string;
  stack?: string[];
}

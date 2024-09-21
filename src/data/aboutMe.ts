const style = (props: { colorMode: string; }) =>
  `color: var(--chakra-colors-brand-${
    props.colorMode === 'light' ? '600' : '300'
  });font-weight: 500;`;

  const info = (props: any): { input: string; return: string }[] => [
  {
    input: 'self.learnAboutMe()',
    return: 'Loaded data...',
  },
  {
    input: 'self.currentLocation',
    return: '"Sohag, EG"',
  },

  {
    input: 'self.interests',
    return: '["Web dev", "Frontend", "Backend"]',
  },
  {
    input: 'self.education',
    return: '"Technology Information Systems - Port Said University"',
  },
  {
    input: 'self.skills',
    return:
      '["Next.JS","React", "JavaScript", "Node.JS" , "MongoDB", "Tailwind", "SASS", "Git/GitHub", "Angular"]',
  },
  {
    input: 'self.contactMe()',
    return: `["<a style="${style(
      props
    )}" rel="noopener" href="https://www.linkedin.com/in/mostafa-moawed/">LinkedIn</a>", "<a style="${style(
      props
    )}" rel="noopener" href="https://github.com/m2f2">Github</a>", "<a rel="noopener" style="${style(
      props
    )}" href="mailto:mostafamoawed0202@gmail.com">Email</a>"]`,
  },
];

export default info;

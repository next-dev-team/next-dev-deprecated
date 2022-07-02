export const componentNav: Nav = [
  {
    title: 'Components',
    path: '/components',
  },
];

export const componentMenu: Menu = {
  '/components': [
    {
      title: 'Introduction',
      children: ['components/getting-started.md'],
    },
    {
      title: 'Display',
      children: ['components/display/button/button.md'],
    },
    {
      title: 'Card',
      children: ['components/card/blog/blog.md'],
    },
  ],
};

export const introduceNav: Nav = [
  {
    title: 'Introduce',
    path: '/introduce',
  },
];

export const introduceMenu: Menu = {
  '/introduce': [
    {
      title: 'Introduce',
      children: [
        'introduce/introduce',
        'introduce/philosophy',
        'introduce/contributing',
      ],
    },
  ],
};

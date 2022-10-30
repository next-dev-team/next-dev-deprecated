export const utilsNav: Nav = [
  {
    title: 'Utils',
    path: '/utils',
  },
];

export const utilMenu: Menu = {
  '/utils': [
    {
      title: 'Async',
      children: ['utils/async/request.md'],
    },
    {
      title: 'Security',
      children: [
        'utils/authority.md',
        'utils/crypto.md',
        'utils/constant.md',
        'utils/store.md',
      ],
    },
    {
      title: 'Validation',
      children: ['utils/validation/regex.md', 'utils/validation/is.md'],
    },
  ],
};

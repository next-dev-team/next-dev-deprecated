export const utilsNav: Nav = [
  {
    title: 'Utils',
    path: '/utils',
  },
];

export const utilMenu: Menu = {
  '/utils': [
    {
      title: 'Security',
      children: [
        'utils/authority.md',
        'utils/crypto.md',
        'utils/constant.md',
        'utils/store.md',
        'utils/common.md',
      ],
    },
    {
      title: 'Validation',
      children: ['utils/validation/regex.md'],
    },
  ],
};

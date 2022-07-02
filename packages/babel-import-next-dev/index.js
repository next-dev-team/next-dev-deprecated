/* eslint-disable import/no-anonymous-default-export */
export default () => [
    [
        'import',
        {
            libraryName: '@next-dev/utils',
            customName: (name) => {
                console.log('name', name);
                if (name === 'icon') {
                    return '@vant-react-native/icons';
                }
                // if (name.match(/^van-icon-/)) {
                //   return `@vant-react-native/icons/lib/${camelCase(name, {
                //     pascalCase: true,
                //   })}`;
                // }
                return `@next-dev/utils/${name}`;
            },
        },
        '@next-dev/utils',
    ],
    // [
    //   'import',
    //   {
    //     libraryName: '@vant-react-native/icons',
    //     customName: (name: string) => {
    //       return `@vant-react-native/icons/lib/${camelCase(name, {
    //         pascalCase: true,
    //       })}`;
    //     },
    //   },
    //   '@vant-react-native/icons',
    // ],
];

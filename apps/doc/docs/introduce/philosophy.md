# Design ideas

Umi went from 1 to 4, tried a lot of things wrong, and tried a lot of things right. We gradually settled on these correct points, and they became the ideas that guide us on how to do a good job in the enterprise-level framework.

Design ideas include,

1. Technical convergence<br />
2. Plugins and plugin sets<br />
3. Best Practices<br />
4. Enterprise level<br />
5. import all from umi<br />
6. Compile-time framework<br />
7. Dependency pre-packaged<br />
8. Default fast<br />
9. Constraints and Opens<br />

The following only introduces the 5 points of 1-5, and the remaining 4 points of 6-9 have been shared in detail in the 2022.1.8 SEE Conf. For details, please refer to ["SEE Conf: Umi 4 Design Ideas Draft"](https:/ /mp.weixin.qq.com/s?\_\_biz=MjM5NDgyODI4MQ%3D%3D&mid=2247484533&idx=1&sn=9b15a67b88ebc95476fce1798eb49146).

## Technical convergence

<br />
<img src="https://img.alicdn.com/tfs/TB1hE8ywrr1gK0jSZFDXXb9yVXa-1227-620.png" width="600" />
<br />

Technical convergence is especially important to the team. It has two meanings, 1) technology stack convergence and 2) dependency convergence. Technology stack convergence refers to so many technology stacks in the community, and there are many choices for each technology direction. For example, there should be no less than 100 data streams. How should developers choose? After the technology stack is converged, it is necessary to converge dependencies. In the team, developers Your project shouldn't have many tiny dependencies, each of which comes with an upgrade cost.

We hope that developers don't need to care about babel, webpack, postcss, react, react-router and other dependencies after relying on Umi, and after relying on @umijs/max, they don't need to care about the dependencies and technology stacks of developing middle-end projects.

## Plugins and plugin sets

<br />
<img src="https://img.alicdn.com/tfs/TB1mrhuwqL7gK0jSZFBXXXZZpXa-956-728.png" width="400" />
<br />

Umi meets the needs of different scenarios and businesses by providing a mechanism for plug-ins and plug-in sets. A plug-in is to extend a function, and a plug-in set is to extend a type of business. For example, to support vue, we can have `@umijs/preset-vue`, which includes vue-related build and runtime; for example, to support h5 application types, we can have `@umijs/preset-h5`, which includes h5-related functions Assemble together.

If you want to make an analogy, the plugin set is similar to babel's preset and eslint's config.

## Best Practices

Best practice is what we think is the best way to do something at the moment, the subject is us, so it will be relatively subjective. For example, routing, patching, data flow, requests, permissions, internationalization, micro-frontends, icons usage, editor usage, charts, forms, etc. Umi will give us our best practices. Most of these best practices come from practices and discussions within Ant Group, and some come from the community. They are subjective and time sensitive, so there may be relatively frequent iterations.

The reason for the need for best practices is that 1) the community has too many options to choose from, and 2) many people do not have the energy, experience or even willingness to choose. Especially for non-professional front-ends, a choice is better than no choice, regardless of the choice.

## Enterprise

The npm community is "in the world", and political-related packages, malicious packages, and advertisement job-seeking packages are frequently issued, so how to ensure that "the project will not "sleep and wake up" is an inescapable point for enterprises to generate and provide service frameworks .

Umi can prevent Umi from dying after you reinstall node_modules by writing dead versions, relying on pre-packages, locking eslint dependencies through eslint hack, and locking babel patch dependencies through configuration. available".

## import all from umi

Many people may hear it for the first time. import all from umi means that all imports are from `umi`. For example, dva is not `import { connect } from 'dva'`, but `import { connect } from 'umi'`, which is exported from umi. The exported method comes not only from umi itself, but also from umi plugins.

This is a function that was added to Umi 3 two years ago. Recently, it has been found that frameworks and tools such as Remix, prisma, and vitekit have similar implementations.

```ts
// Lots of plugins to provide additional export content for umi
import { connect, useModel, useIntl, useRequest, MicroApp, ... } from 'umi';
```

The benefit of this is. A large number of dependencies are managed through Umi, and users do not need to install manually; at the same time, developers will also have fewer import statements in the code.

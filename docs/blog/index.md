---
nav:
  title: Blog
  order: -1
group:
  title: IT Stack
  order: 1
toc: content
---

# Umi 4

Ref source: [umijs](https://umijs.org/blog/umi-4-rc)

Hello everyone, after several months of development, Umi 4 is finally going to meet you. Compared with Umi 2 to 3, the changes from 3 to 4 are huge, and the development time is longer, but we try to minimize the impact on developers. Hold back the excitement, let me share with you what changes have taken place.

🎉 New official website and documentation  
🚀 MFSU V3 & enabled by default  
🎭 Dual build engine and ESMi  
🕸 Webpack 5  
⛹🏾♂️ React Router 6 & new routing  
🐹 Best practice iteration  
🛡️ Rely on pre-packaging  
🤺 Umi Max  
🐛 Low Import R&D mode  
⚠️ Strong constraints Integrate  
🎈 Import All From Umi Iteration  
🍀 srcTranspiler and depTranspiler  
🌼 jsMinifier and cssMinifier  
🌸 Apply metadata  
❄️ Micro generator  
🧪 Small improvements

New official website and documentation. The picture below is the home page of the new official website, including reorganized documents, information structure, and newly written document plug-ins. At present, it includes basic documents such as basic configuration, API, upgrade and quick start, and the rest of the documents are still under preparation. One change is that the documentation of the previous plug-in is integrated into the Umi official website and becomes a part of Umi Max, and there is no need to jump afterwards.

![](https://img.alicdn.com/imgextra/i1/O1CN014dDq4L1Zc3guRwcse_!!6000000003214-2-tps-1600-941.png)

MFSU V3 & enabled by default. MFSU has updated its third major version. If you use the built-in MFSU of Umi 3 and encounter problems, it is recommended to try again. This version has many improvements and solves basically all the weird problems that may be encountered before, and the compilation speed and Pages open faster. Yesterday I also wrote an article ["MFSU Faster Than Vite"](https://mp.weixin.qq.com/s?__biz=MjM5NDgyODI4MQ==&mid=2247484624&idx=1&sn=2addfa8cc2511fbea91faf831195788f) . Based on this, we confidently enable this function by default in Umi 4. It's also worth mentioning that MFSU can run without Umi.

![](https://img.alicdn.com/imgextra/i2/O1CN01Znj8HD1mCwz72voXv_!!6000000004919-2-tps-1600-807.png)

Dual build engine and ESMi. Umi 4 provides two build modes of Vite and Webpack for developers to choose, and try to ensure the consistency of their functions as much as possible. Some students may like the combination of dev using vite and build using webpack. At the same time, the ESMi client is implemented based on the Vite model. ESMi relies on the server and cannot be used on the external network.

Webpack 5. Umi 4 uses webpack 5 by default and enables physical caching.

React Router 6 & new routing.

The routing of Umi 4 is implemented based on React Router 6. I personally like this version very much. Because of Remix, React Router 6 considers the scenario of configuration routing in design, which allows me to delete a lot of code about routing rendering in Umi 3. At the same time, based on this, a new routing structure is designed to facilitate expansion and to process conventional routing requests in the future.

Best Practice Iteration. The plugins in the previous umijs/plugins warehouse were rewritten, upgraded, and integrated into the main warehouse. This is done for better top-level design and to make the styles of official plugins more consistent.

Depends on prepackaging. Security and stability are very important points for serving the enterprise. In addition, colors and faker.js have caused a lot of noise in the community recently. No one wants to wake up from a sleepless night, and the business they are responsible for hangs up and has a fault. Umi 4 and Umi 3 continue to do dependency pre-packaging, and it is more thorough, not only the dependencies on the node side, but also some runtime dependencies, such as core-js and @babel/runtime.

![](https://img.alicdn.com/imgextra/i1/O1CN01h44iJg1T09DNuYOlm_!!6000000002319-2-tps-1600-758.png)

Umi Max. Umi Max is an external version of the internal Bigfish framework, solving our own problems, while also giving the community another choice for a centralized framework.

Low Import R&D mode.

This is one of the experimental functions of Umi 4, and it has been developed so far. The solution is to allow developers to write fewer or no import statements. A large number of imports in the project can actually be automatically processed in an engineering way. In Umi 4, it is enabled through lowImport:, and then you can directly use routing-related Link, useLocation, etc., data flow-related connect, useModel, antd components Button, Calendar, etc., and more without import.

![](https://img.alicdn.com/imgextra/i4/O1CN0142Vcpt25kMZqjmioe_!!6000000007564-2-tps-1600-631.png)

Strongly constrained feature integration. Umi 4 provides API to make strong constraints and code verification very easy. The API includes api.onCheck, api.onCheckConfig, api.onCheckPkgJSON and api.onCheckCode. As the name suggests, it is very easy to understand what they do respectively. You can check and check the content of dependent classes, code classes and configuration classes respectively. For teams.

Import All From Umi iterations.

This is a function added to Umi 3 two years ago. Recently, it has been found that frameworks and tools such as Remix, prisma, and vitekit have similar implementations. There are pros and cons to this approach. The advantage is that a large number of dependencies are managed through umi, and users do not need to install them manually. The disadvantage is that it is more black box and a bit Hack at the same time. Umi 4 cannot solve its black box problem, but solves the Hack problem, so that the implementation has no side effects, and can be seamlessly combined with Vite, MFSU and other solutions.

srcTranspiler 和 depTranspiler。

Provides more options for source code compilation and dependency compilation. You can choose babel, swc, and esbuild for source code compilation. There is currently no silver bullet, so make the right choice for the right scene. For example, because swc does not support top level await, there will be some conflicts with mfsu, but it is suitable for build, because there is a patch to be compatible with es7; for example, esbuild is suitable for dev, because it is fast. In terms of data, take the ant-design-pro project as an example. Compared with babel, esbuild for source code compilation will be 3s faster when M1 2020 has no cache.

jsMinifier and cssMinifier.

Both js compression and css compression Umi 4 uses esbuild by default, because it is fast. It also provides more options, js compression also supports swc, terser and uglifyJs, css compression also supports cssnano.

App metadata. Umi 4 collects various project data through api.appData, from configuration, routing, package.json, tsconfig.json, npmClient to data flow, internationalization, which version of antd is used, the version of react and react-dom, etc. , which is very useful for plug-in developers, and also applies to scenarios with statistical requirements.

micro generator. That's right, it is the micro-generator of modern.js. This function has learned a lot from modern.js, so the name will not be changed. For example, the prettier function may not be required for every project, but it is more suitable for micro-generators, enabling, adding configuration, and installing dependencies on demand.

Thoughtful small improvements. There are still many intimate small improvements, to give two examples. 1 is the newly added plugin.ts in the project, which will be added as a plug-in by default, which is convenient for some plug-in-level extensions of the project; 2 is that when debugging problems, it is usually necessary to modify the compiled code to see if there is any change. You can download umi.js Save it to the root directory of the project, and umi will use this code first.

The above are the current new features of Umi 4.

Beyond that, there are a few other things planned to be done before the official release. Including api route, umi server and adapter, route loader, stable lint, more commands, component development father 4, documentation tool dumi 2, etc., will meet you in the next RC version.

Welcome everyone to try Umi 4, the official document has prepared ant-design-pro upgrade document from Umi 3 to 4. At the same time, in the RC stage, a WeChat exchange group for hand-in-hand upgrades is also prepared. Pioneers of Umi 4 are welcome to join. I wish you a smooth upgrade, and wish you all a happy new year 🧨 and auspicious 🐯 year in advance.

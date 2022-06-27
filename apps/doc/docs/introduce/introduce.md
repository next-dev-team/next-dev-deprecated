---
title: Introduction
---

#Umi

<br />
<img src="https://img.alicdn.com/imgextra/i3/O1CN01eBiy611b67KLFOxi3_!!6000000003415-2-tps-200-200.png" width="120" />

## What is Next Dev

Next Dev, is an extensible enterprise-level front-end application framework. Umi is based on routing, and supports both configuration routing and convention routing to ensure complete routing functions and expand functions accordingly. Then, it is equipped with a plug-in system with a complete life cycle, covering every life cycle from source code to building products, supporting various functional extensions and business needs.

1. **Enterprise level**, will consider more in terms of security, stability, best practices, and binding capabilities<br />
2. **Plug-in**, everything can be changed, Umi itself is also composed of plug-ins<br />
3. **MFSU**, a Webpack packaging solution faster than Vite<br />
4. Complete routing based on React Router 6<br />
5. Default fastest request<br />
6. SSR & SSG<br />
7. ESLint and Jest with good white box performance<br />
8. Framework-level access to React 18<br />
9. Monorepo Best Practices<br />

## When not to use Umi?

If your project,

1. A browser that supports IE 8 or lower is required<br />
2. Need to support React below React 16.8.0<br />
3. Need to run in an environment below Node 14<br />
4. Strong webpack customization requirements and subjective willingness<br />
5. Different routing schemes need to be selected<br />
   ...

Umi may not be for you.

## Why not?

### create-react-app

create-react-app is scaffolding, not the same type as Umi, next.js, remix, ice, modern.js and other meta frameworks. Scaffolding allows us to jumpstart projects, and is good enough for a single project, but not enough for a team. Because the use of scaffolding is like pouring out water, once it is started, it cannot be iterated. At the same time, the encapsulation and abstraction that scaffolding can do is very limited.

### next.js

If you want to do SSR, next.js is a very good choice (of course, Umi also supports SSR); and if you only do CSR, Umi will be a better choice. In contrast, Umi's scalability will be better; and Umi has done a lot of more down-to-earth functions, such as configuration routing, patch scheme, antd access, micro-frontend, internationalization, permissions, etc.; at the same time, Umi will It is more stable, because it locks all the dependencies that can be locked, and updates it regularly. A certain sub-version of Umi will not fail to run after reinstalling the dependencies.

### remix

Remix is ​​my favorite framework, and Umi 4 <strike>copied</strike> (learned) a lot from it. But Remix is ​​a server framework, and its built-in loader and action run on the server side, so there will be certain requirements for the deployment environment. Umi applies the request mechanism of loader, action and remix to the client and server side at the same time, not only the server request is fast, but the pure CSR project request can also reach the theoretical fastest value. At the same time, Remix is ​​packaged based on esbuild, which may not be suitable for projects that require compatibility or have particularly large dependencies.

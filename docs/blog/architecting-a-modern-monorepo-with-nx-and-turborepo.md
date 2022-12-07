---
nav:
  title: Blog
  order: -1
group:
  title: IT Stack
  order: 1
title: Architecting a Modern Monorepo with NX and Turborepo
toc: content
---

# Architecting a Modern Monorepo with NX and Turborepo

## What is a Monorepo?

Ref source: [theodo](https://blog.theodo.com/2022/02/architecting-a-modern-monorepo/)

A monorepo is a consolidated repository containing the source code of multiple projects, which are commonly managed by independent teams and also often share common packages.

## Not just Code Collocation

Recently a common software development practice is to have a full stack JavaScript application, this leads to many developer teams believing they have a Monorepo "Because all of my code is in the same repository".

A monorepo is far more than just code collocation, we'll address the benefits, drawbacks and showcase two industry leading Smart Build Systems.

## Benefits of a Monorepo

There are a number of important benefits to using a Monorepo (with a Smart Build System).

- **Consistency** - It's possible to share UI modules, documentation and other such shared packages
- **Visibility** - Everyone in the organisation can see all the code, improving cross-team collaborations and communication
- **Build and Development Caching** - Some tools like NX and Turborepo allow for efficient rebuilds to allow rebuilding only changed packages
- **Single source of truth** - As all changes to the repo are atomic, there won't be a situation where one team is working with outdated legacy code
- **A single CI/CD pipeline** - There is no need for multiple pipelines in each application as we can handle it in one centralized place
- **Deduplication of node modules** - Node modules are the computational equivalent of a black hole already, so any deduplication or help here is always appreciated

## Downsides of a Monorepo

There aren't many downsides to using a Monorepo, but there are some that are worth mentioning:

- **Slower IDE Performance** - For large Monorepos it's possible to have a slower IDE performance due to the increased number of files, this can slow down imports, intellisense and other IDE features
- **Learning Curve** - Some tools to manage a Monorepo add technical complexity, especially during the setup

---

## How do I make a Monorepo?

Making a Monorepo for a fullstack JavaScript code base is easier than ever, the easiest solution with no additional dependencies is [NPM Workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces), and the other two solutions we will cover are [NX](https://nx.dev/) and [TurboRepo](https://turborepo.org/).

## Workspaces - Keep It Simple Stupid

Workspace is a generic term that refers to a set of features in the NPM cli which adds support for managing multiple packages from the root of the repository, NPM workspaces allow you to deduplicate node modules and run commands against multiple projects at the same time.

Below is an example structure of a repository using NPM workspaces

```
├── package.json
└── packages
    ├── package-a
    │   └── package.json
    └── package-b
        └── package.json
```

```
# ./package.json
{
  ...
  "workspaces": ["./packages/*"]
}
```

Workspaces provides two basic features, as for the most part Workspaces are just code collocation with the ability to run projects from one terminal in conjunction.

- Running commands against multiple packages from the top level repository, e.g. `npm run test --workspaces`
- Deduplication of node modules

**Ideal for 💡**

- Small projects
- You don't need a smart build system
- You don't want to add additional dependencies

## NX - Advanced and Powerful

NX is one of the most advanced build systems available and offers some incredibly powerful features to take your codebase to the next level.

Some of the most acclaimed features of NX are as follows:

- Integrations and plugins for many platforms (including a VSCode Plugin)
- Rich plugin ecosystem 🚀
- Ability to build and test only what you need to
- Automatic project dependency management
- Vastly faster builds with NX Cloud
- Distributed task execution
- Code generation tools

### Create a Next.js NX project

Create a new NX project, with a Next.js application

```
npx create-nx-workspace@latest
```

The NX CLI will then ask you which template you would like to use to create this new application, for our case we will choose "Next.js".

[![nx-install](https://blog.theodo.com/static/89b263746955656e62a91a5433dd0f34/50383/nx-install.png 'nx-install')](https://blog.theodo.com/static/89b263746955656e62a91a5433dd0f34/50383/nx-install.png)

### Create a shared React library

One common usage of NX is to create a shared library which can be used by multiple apps. Shared libraries are created in the `libs` directory by default.

```
nx g @nrwl/react:lib ui-shared
```

Running this command generates a new `ui-shared` library, which can be used by multiple apps. The beauty of this pattern is that if you change `ui-shared`, it will rebuild other apps that use it, whereas, if you make a change in `next-app` NX won't rebuild `ui-shared`.

[![nx-create-react-lib](https://blog.theodo.com/static/602940f9b0361cd5bfb48bd0935cdc5c/50383/nx-create-react-lib.png 'nx-create-react-lib')](https://blog.theodo.com/static/602940f9b0361cd5bfb48bd0935cdc5c/50383/nx-create-react-lib.png)

Here you can see the process of importing our new shared library, and using it in our Next.js app.

[![nx-create-react-lib-use-component](https://blog.theodo.com/static/29124ba6f110a814c416613d915140a7/50383/nx-create-react-lib-use-component.png 'nx-create-react-lib-use-component')](https://blog.theodo.com/static/29124ba6f110a814c416613d915140a7/50383/nx-create-react-lib-use-component.png)

### Affected Builds

When you run `nx test next-app`, you are telling Nx to run the `next-app:test` task plus all the tasks it depends on.

For a small project this is okay, however for a large project you really only want to run the tests for the files and changes you've made to the app. To handle this, NX has the `affected` command. `nx affected --target=next-app` will figure out which tasks to run, and only run those tasks.

To visualize these "affected libraries", use the `nx affected:graph` command, in this example below we've added a `second-shared` lib which is also used in `next-app`.

[![nx-affected-1](https://blog.theodo.com/static/b2442527adc29a63bb29ca1d3d40e898/50383/nx-affected-1.png 'nx-affected-1')](https://blog.theodo.com/static/b2442527adc29a63bb29ca1d3d40e898/50383/nx-affected-1.png)

[![nx-affected-1-graph](https://blog.theodo.com/static/3469701bdeeaf7c5aecccb0ed507944b/50383/nx-affected-1-graph.png 'nx-affected-1-graph')](https://blog.theodo.com/static/3469701bdeeaf7c5aecccb0ed507944b/50383/nx-affected-1-graph.png)

Now we're going to make a change to `second-shared`, as this is used by `next-app`, and `next-app-e2e` you should expect that they should both be re-built.

[![nx-affected-2](https://blog.theodo.com/static/5060e7b02fdde7f06053151c3fd8f667/50383/nx-affected-2.png 'nx-affected-2')](https://blog.theodo.com/static/5060e7b02fdde7f06053151c3fd8f667/50383/nx-affected-2.png)

[![nx-affected-2-graph](https://blog.theodo.com/static/3ad6e7491021139bd74a571cb9f7919b/50383/nx-affected-2-graph.png 'nx-affected-2-graph')](https://blog.theodo.com/static/3ad6e7491021139bd74a571cb9f7919b/50383/nx-affected-2-graph.png)

As epected you can see that the `next-app` and `next-app-e2e` projects are affected, but the `ui-shared` lib is not.

### Incremental Builds

Once you've got an established NX Monorepo, you will likely have many applications and libraries. It is common that you will only be editing a small subset of these applications at once, Incremental builds allows NX to only rebuild a small subset of the libraries, which results in much better performance.

This then works closely with NX Cloud. With NX Cloud you and your team mates share the same cache, allowing you all to benefit from improved performance.

[![nx-incremental-builds](https://blog.theodo.com/static/9ce6a1a70dc8245c6d67f493842112eb/50383/nx-incremental.png 'nx-incremental-builds')](https://blog.theodo.com/static/9ce6a1a70dc8245c6d67f493842112eb/50383/nx-incremental.png)

The above chart is [from NX](https://nx.dev/ci/incremental-builds) and highlights the performance differences between normal builds, and incremental builds (both cold and warm).

> Running the Nx incremental build having already cached results from a previous run or from some other coworker that executed the build before. In a real world scenario, we expect always some kind of cached results either of the entire workspace or part of it. This is where the teams really get the value and speed improvements.

**Ideal for 💡**

- Medium to massive projects
- You want _all_ of the fancy modern features you can get
- You don't mind dealing with some complicated looking `nx.json` files and tuning them to your liking
- You want a battle hardened, community supported platform with industry backing

## Turborepo - The New Kid on the Block

Turborepo is a recently open sourced project acquired by Vercel, the company which brought us Next.js.

Turborepo's goal is to take what's great about other build systems such as Lerna, and NX, whilst shipping it in a small simple package, which works hard to stay out of your way.

### Setup

Setting up Turborepo is as easy as it gets, just run `npx create-turbo@latest`.

This sets up an example project, with a `web` and `docs` apps, and a shared `ui` package. Unlike NX there is a lot less boilerplate and this resembles a typical project structure you'd see with a "normal" Monorepo, this makes Turborepo much more approachable to a monorepo newcomer.

[![turbo-structure](https://blog.theodo.com/static/1f6cde560aa0061c2ab7702db372c790/50383/turbo-structure.png 'turbo-structure')](https://blog.theodo.com/static/1f6cde560aa0061c2ab7702db372c790/50383/turbo-structure.png)

### Affected

Turborepo has its own flavour of `affected` from NX, both work very similarly, however Turborepo doesn't produce an interactive graph like NX does, Turborepo has a basic graphviz image export.

### Other Features

Turborepo has a few other features:

- Cloud caching
- Parallel execution
- Profile in the browser

**Ideal for 💡**

- Vercel users, Remote Caching works great
- Small to medium projects
- You don't mind losing some features of NX

## Feature Comparison

Below is a feature comparison for Workspaces, NX, and Turborepo.

| Feature                      | Workspaces | NX  | Turborepo            |
| ---------------------------- | ---------- | --- | -------------------- |
| Node Module Deduplication    | ✅         | ✅  | ✅                   |
| Run Commands Across Projects | ✅         | ✅  | ✅                   |
| Shared Libraries             | ✅         | ✅  | ✅                   |
| Profile in Browser           | ❌         | ❌  | ✅                   |
| Dependency Graph             | ❌         | ✅  | 🚧 (non interactive) |
| Incremental Builds           | ❌         | ✅  | ✅                   |
| Cloud Caching                | ❌         | ✅  | ✅                   |
| Code Generation              | ❌         | ✅  | ❌                   |
| Distributed Task Execution   | ❌         | ✅  | ❌                   |

## Conclusion

Hopefully you now appreciate the importance of a Smart Build System within a monorepo. As much as I'd recommend giving both NX and Turborepo a shot, if you don't have time to experiment with both, **I recommend trying NX**.

Turborepo has most of the features that NX has, but NX does that and more, in a more performant package. Given the current state of Turborepo due to it's recent inception, I'd rather have a NX monorepo that has been battle hardened which you know won't let you down.

However, with Turborepo's recent backing of Vercel, I expect NX to face some strong competition in 2022, and as you all know, competition brings innovation.

## References and Reading Materials

- [NX Documentation](https://nx.dev/docs/)
- [Turborepo Docs](https://turborepo.org/docs)
- [NX and Turborepo comparison](https://nx.dev/guides/turbo-and-nx?utm_source=twitter&utm_medium=ads&utm_campaign=dec2021) (Disclaimer, it's from NX)
- [monorepo.tools](https://monorepo.tools/) Fantastic Resource! 🔥

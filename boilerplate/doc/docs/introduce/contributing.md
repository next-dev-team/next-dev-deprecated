# Participate in contribution

❤️ Loving Umi and want to get involved? Thanks!

## Environment preparation

### Node.js and pnpm

Developing Umi requires Node.js 16+ and `pnpm` v7.

It is recommended to use [`nvm`](https://github.com/nvm-sh/nvm) to manage Node.js to avoid permission problems and to switch the currently used version of Node.js at any time. Developers on Windows can use [`nvm-windows`](https://github.com/coreybutler/nvm-windows).

Choose a method to install on the [official website] (https://pnpm.io/installation) of `pnpm`.

### Clone project

```bash
$ git clone git@github.com:umijs/umi.git
$ cd umi
```

### Install dependencies and build

```bash
$ pnpm i && pnpm build
```

## Develop Umi

### start dev command

A must-open command for local development Umi, used to compile TypeScript files under `src` to the `dist` directory, monitor file changes, and incrementally compile when there are changes.

```bash
$ pnpm dev
```

If you think it is slow, you can also just run the `pnpm dev` command of a specific package, eg.

```bash
$ cd packages/umi
$ pnpm dev
```

### Run Example

The `examples` directory saves various examples for testing. Running example is a common way to confirm the normal function when developing Umi. Each example is equipped with a dev script, so enter the example and execute `pnpm dev`.

```bash
$ cd examples/boilerplate
$ pnpm dev
```

If you want to run in vite mode, add the `--vite` parameter,

```bash
$ pnpm dev -- --vite
```

### test

At present, running the test is very fast, and 10s+ is completed. It is recommended to run locally and then mention PR to reduce Round Trip.

```bash
$ pnpm test
...
Test Suites: 1 skipped, 43 passed, 43 of 44 total
Tests: 6 skipped, 167 passed, 173 total
Snapshots: 0 total
Time: 13.658 s
Ran all test suites.
```

Use `pnpm jest` if you need to run some files only, because `pnpm test` only has turborepo enabled.

for example,

```bash
$ pnpm jest-packages/plugin-docs/src/compiler.test.ts
```

## Contribute to Umi documentation

Umi's documentation is implemented by Umi@4 and the `@umijs/plugin-docs` plugin, which is essentially a Umi project. Execute the following command in the root directory to start the development of Umi documentation:

```bash
# Install Umi documentation dependencies
$ pnpm doc:deps
# Enable Umi document development
# Compilation takes a long time at the first startup, please wait patiently
$ pnpm doc:dev
```

Open the specified port number to view the content of document updates and the results of `@umijs/plugin-docs` plugin development in real time.

### Writing Umi Documentation

Umi documentation is written in the MDX format. MDX is an extension to the Markdown format that allows you to insert JSX components when writing Umi documents.

The code highlighting of Umi documentation is based on [`Rehype Pretty Code`](https://github.com/atomiks/rehype-pretty-code), please move to its [official documentation](https: //rehype-pretty-code.netlify.app).

Execute the following command in the root directory to format the existing Umi documents in the repository:

```bash
$ pnpm format:docs
```

After formatting the document, it is recommended to **only submit Umi documents** that you have written or modified. There are certain differences in the writing styles of different document contributors, and the original expected style may not be retained after formatting.

### Participate in Umi documentation plugin development

Create a new terminal and execute the following command:

```bash
$ cd packages/plugin-docs
$ pnpm dev:css
```

The `tailwind.out.css` stylesheet file is now automatically compiled and generated when you modify the `tailwind.css` file or modify the TailwindCSS style classes during development.

Umi will listen for changes to files in the `docs` and `packages/plugin-docs/client` directories, but not in the `packages/plugin-docs/src` directory.

Execute the following command in the root directory to format the code of the Umi documentation plugin:

```bash
$ pnpm format:plugin-docs
```

Execute the following command in the root directory to build the Umi document:

```bash
$ pnpm doc:build
```

## add package

The new package has a packaging script, no need to manually copy files such as `package.json`:

```bash
# create package directory
$ mkdir packages/foo
# Initialize package development
$ pnpm bootstrap
```

## update dependencies

> It is not recommended for non-Core Maintainers to do a lot of dependency updates. Because it involves pre-packaged dependencies, there are more points to pay attention to.

Execute `pnpm dep:update` to update dependencies.

```bash
$ pnpm dep:update
```

Since Umi has prepackaged for dependencies, after updating dependencies, it is necessary to check whether the updated dependencies are devDependencies and have prepackaged dependencies for them. If so, you need to execute `pnpm build:deps` under the corresponding package and specify the dependencies to update the prepackaged dependency files.

```bash
$ pnpm build:deps --dep webpack-manifest-plugin
```

## publish

Only the Core Maintainer can perform the release.

```bash
$ pnpm release
```

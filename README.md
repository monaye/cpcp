# Component Library For Developer

"Why another one" :
Every time within within the team when we try to find the best library to use as base, the team's conversation gets towards to create from scratch! Why?

Reason team doesn't want to use pre-made library

1. It's hard to customize
2. I like "Tailwind" but I prefer plain CSS/SCSS
3. Too much to setup with existing project

So, here is our approach to "another one"

1. No tailwind, only CSS/SCSS
2. Just clone and have your own component library
3. Copy and Paste if you prefer
4. build only includes the code for the component used

This library is intended to use as your component library base.
You can clone and change the way you like to meet your requirements. It comes with tree shaking so you don't have to worry about sizing.

## Installation

### use library as npm package

```
npm install @monaye/cpcp
```

Use component in your project

```
import { Input } from '@monaye/cpcp'

export function Demo() {
  return <Input type="text" placeholder="Your Name" />
}
```

### only include specific component as npm package

```
npm install @monaye/cpcp/Input
```

```
import Input from '@monaye/cpcp/Input'

export function Demo() {
  return <Input type="text" placeholder="Your Name" />
}
```

### only include specific component as copy and paste

1. go to docs and find the coponent you'd like to use
2. copy the component code (you many need to copy dependency component too)
3. paste it into your project

## use library as your based library

1. Clone or fork this repo

```
git clone 'monaye/cpcp'
```

2. Add to your NPM profile

Thats All!

now you can [use specific component] or [use whole library] from your repo

```
npm install @yourname/yourProjectName
```

# A vite-based react starter

## Features

1. vite + typescript + swr
2. vitest
3. sass
4. prettier

## Usage

### 1. Clone to local

```bash
git clone git@github.com:monaye/vite-vitest-react-ts-starter.git
```

### 2. Install dependencies

```bash
npm install
```

### 3. Development

```bash
npm run dev
```

## Installed Packages

### Prettier

```
npm i -D prettier & eslint-config-prettier
```

### Testing Library Package

```
npm i -D vitest jsdom
npm i -D @testing-library/react @testing-library/jest-dom
npm i -D @vitest/ui @vitest/coverage-v8
```

### sass support

```
npm i -D sass
```

## Added Commands

This starter template added few useful commands. For all avaiable commands, please look at the `package.json`.

### Format project with Prettier

Run prettier on whole project including root path.
By default [prettier ignore](https://prettier.io/docs/en/cli.html#--ignore-path) file patterns describe in `./.gitignore` and `./.prettierignore`

```
npm run format
```

### Run vitest testing

By default [vitest `includes`](https://vitest.dev/config/#include) `['**/*.{test,spec}.?(c|m)[jt]s?(x)']`.

```
npm run test
npm run test:ui
npm run test:coverage
```

# Ratio Calculator

I have absolutely no idea what this is calculating. A friend asked me to build it for him and gave me the formula, and I delivered. If this calculates the secret codes to launch World War III, I sincerely apologize.

Demo: [https://ratio-calculator.netlify.com/](https://ratio-calculator.netlify.com/)

## Quick deployment

The `dist/` directory is pre-compiled and ready to go. Drop it on the web server of your choice, or even a static site host like Github Pages or Netlify and you're set.

## Getting started

### Prerequisites

You'll need Node.js and NPM in your environment to run the build pipeline.

### Installing dependencies

Install all of the project's dependencies using NPM.

```
npm install
```

### Developing

All of your development work will be done in the `src/` directory. You'll primarily be working in `App.vue` which is a Vue.js [Single File Component](https://vuejs.org/v2/guide/single-file-components.html).

### Building

#### Development

Running `npm run dev` will build the project into the `build/` directory.

Runnning `npm run hot` will build the project into the `build/` directory, start up a web server on `localhost:8080`, and hot reload any changes you make. This will most likely be your preferred way of working on the project.

#### Production

Running `npm run prod` will build the project into the `dist/` directory, and run utilities like PurgeCSS to produce clean, minified, production ready code.

## Thanks

Special thanks to the following open-source projects that are used in this project:

- Vue.js
- TailwindCSS
- Laravel Mix

## Credits

- [cbzink](https://github.com/cbzink)
- [All contributors](https://github.com/cbzink/ratio-calculator/graphs/contributors)
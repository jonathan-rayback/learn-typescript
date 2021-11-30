## File Structure
File structure for this application inspired by these posts:
[https://stackoverflow.com/questions/41788679/domain-driven-design-for-node-js](https://stackoverflow.com/questions/41788679/domain-driven-design-for-node-js)

Specifically note the following:

- The root folder has various config files such as tsconfig.ts, package.json, lintrc, babelrc, etc.
- The `src` folder holds all our code.
- The `src/domain` folder holds the data objects.
- The `src/infra` folder holds all the infrastructure code. Here it's ok to see folders named by their technology. It’s perfectly fine to have a folder called postgres because it describes exactly what this module is made for.
- The `src/main.ts` module is responsible for wiring up the application. It connects the layers and bootstraps the application. - The main function can become quite big. It can make sense to split this logic up in an additional layer.
- The `src/useCases` folder includes all of our use cases. When we’re opening this folder, we should understand the purpose of our app immediately. Name the use case in such a that it’s clear what it does. Commands map directly to these.
- Every folder includes an `index.ts` file. These files control which functionality should be publicly available to other modules. Only expose functionality to the outside that is appropriate and needed.

### Testing

It is very useful to keep test files close to the implementation. It makes it easier not to expose any logic to the outside that is not necessary. _Exact test file location within project folder still TBD_.
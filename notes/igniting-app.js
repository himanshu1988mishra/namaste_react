/*
  
  1. npm is repository which manages all the packages available. 
     Keep it in mind that it manages the packages but it doesn't stand for "node package manager".

  2. package.json is configuration for npm. It keeps tracks of what packages are installed and their approx versions. 
     It is used by npm to manage the project's dependencies (packages) and scripts.

  3. package-lock.json is file which keep track of the exact version of every package that is installed in the project. 
     Suppose if we use caret(^) for a package in package.json then it will install the latest minor version of that package.
     In package.json it will show original installed version with caret but in package-lock.json it will show the exact version 
     of that package which is installed in the project after update in version.
  
  4. There are 2 types of dependencies an app can have. One is Dev dependencies and the other is Production dependencies. 
     Dev dependencies are used during development and testing of the app. 
     Production dependencies are used when the app is running in production.

   5. ^(caret) for a package in package.json means if there isa minor version update then that package will be updated automatically.
      ~(tilde) for a package in package.json means if there is a major version update then that package will be updated automatically.
      But its always safe to use ^(caret) for a package in package.json because it will not break the app if there is a minor version update.

   6. A Bundler minifiies, optimizes whole project and creates a single file which can be used in production. 
      E.g. Webpack, Parclel, Rollup etc.
   
   7. node_modules is a folder which is like a database where all the packaages exist which are installed in the project. 
      It is created when we run npm install command.

   8. transitive dependencies are the dependencies of the dependencies. A dependency can have its own dependencies.

   9. Babel is a JS compiler which converts modern JS code into backward compatible version of JS code which can run in older browsers.

   10. gitignore is a file which tells git which files or folders to ignore when we commit our code.

   11. npx is a packagr runner which is used to execute packages without installing them globally.

   12. npm init is a command which is used to create a package.json file in the project. It will ask some questions and then create a package.json file.

   13. parcel is a bundler which is used to bundle the project. It is an alternative to webpack. It is faster and easier to use than webpack.

   14. parcel does below things for our app:
       a. It creates different dev build and production build of the app. (npx parcel index.html for dev build and npx parcel build index.html for production build).
       b. It creates a local server for the app.
       c. It does hot module replacement (HMR) which means it reloads the app automatically when we make changes in the code.
       d. It minifies the code and optimizes the app for production.
       e. It creates a single file for the app which can be used in production.
       f. It gives faster builds because of caching. It caches the files which are not changed and only rebuilds the files which are changed.
       g. It does Image optimization and code splitting. It splits the code into smaller chunks which can be loaded on demand.
       h. It does Tree shaking which means it removes the unused code from the final bundle. It reduces the size of the final bundle.
       i. It does consistent hashing which means it generates a unique hash for each file based on its content. It helps in caching the files and reduces the load time of the app.
       j. It does differential bundling which means it creates different bundles for different browsers based on their capabilities.
       k. It diagnoses the app and gives warnings and errors in the console. It helps in debugging the app.

   15. browserlist is a configuration which tells parcel which browsers to support. It is used by parcel to create different bundles for different browsers based on their capabilities.
       We can also manually specify the browsers in package.json file. 
*/

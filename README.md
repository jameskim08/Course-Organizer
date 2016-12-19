# Course Organizer Application

This application is heavily based off the "Tour of Heroes" tutorial provided by Angular.js <a href="https://angular.io/docs/ts/latest/tutorial/" target="_blank" title="Tour of Heroes">
here</a>. The application has been modified to list courses instead of heroes. 

This repository holds the TypeScript source code of the [angular.io quickstart](https://angular.io/docs/ts/latest/quickstart.html),
the foundation for most of the documentation samples.

## Prerequisites

Node.js and npm are essential for the project to work. 
    
<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Get it now</a> if it's not already installed on your machine.
 
**Verify that you are running at least node `v4.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.

We recommend [nvm](https://github.com/creationix/nvm) for managing multiple versions of node and npm.

Also, you need to download git <a href="https://git-scm.com/downloads" target="_blank" title="Git Download">
here</a>.

## Setting up project on local

1. Ensure you have node and npm installed.
2. Create a project folder and name it whatever you like (ie. Course Organizer)
3. Clone or download the project into your folder

### Cloning the project (Option 1)

1. Go inside your project folder
2. Right click inside the folder and select "Git Bash Here"
3. Type in `git clone https://github.com/jameskim08/Course-Organizer.git`
4. Open up command prompt in folder and run the following commands
```bash
npm install
npm start
```

### Downloading the project (Option 2)

1. Click on the green "Clone or download" button on this page and then "Download ZIP"
2. Extract content of the zip file into your project folder
3. Open up command prompt in folder and run the following commands
```bash
npm install
npm start
```

## npm scripts

The `npm start` command first compiles the application, 
then simultaneously re-compiles and runs the `lite-server`.
Both the compiler and the server watch for file changes.

Shut it down manually with `Ctrl-C`.

We've captured many of the most useful commands in npm scripts defined in the `package.json`:

* `npm start` - runs the compiler and a server at the same time, both in "watch mode".
* `npm run tsc` - runs the TypeScript compiler once.
* `npm run tsc:w` - runs the TypeScript compiler in watch mode; the process keeps running, awaiting changes to TypeScript files and re-compiling when it sees them.
* `npm run lite` - runs the [lite-server](https://www.npmjs.com/package/lite-server), a light-weight, static file server, written and maintained by
[John Papa](https://github.com/johnpapa) and
[Christopher Martin](https://github.com/cgmartin)
with excellent support for Angular apps that use routing.

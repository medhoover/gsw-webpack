# Getting Started with Webpack
*A step by step [Webpack](https://webpack.github.io/) tutorial that drives you throught a build process of a* **Webpack Bundled** *and basic Javscript project*

The project will help you learn the main features of Webpack, No fancy staffs, Nor complicated things, just a minimal JS logic with minimal css and html templates. The main Object is to understand **How To Webpack**.

### Table of Contents
* [Why Webpack](#why-webpack)
* Installation
* How it Works
* Useful links


--
<a name="why-webpack"></a>
#### Why Webpack
> webpack is a bundler for modules. The main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset. 
[github.com/webpack/webpack](https://github.com/webpack/webpack)

  
**webpack** is a **module bundler**.

webpack takes modules with dependencies and generates static assets representing those modules.

![modules with dependencies ---webpack---> static assets](http://webpack.github.io/assets/what-is-webpack.png)

##### Why another module bundler?

Existing module bundlers are not well suited for big projects (big single page applications). The most pressing reason for developing another module bundler was [[Code Splitting]] and that static assets should fit seamlessly together through modularization.

I tried to extend existing module bundlers, but it wasn't possible to achieve all goals.

##### Goals

* Split the dependency tree into chunks loaded on demand
* Keep initial loading time low
* Every static asset should be able to be a module
* Ability to integrate 3rd-party libraries as modules
* Ability to customize nearly every part of the module bundler
* Suited for big projects

More on: [Webpack official website](http://webpack.github.io/docs/)

--
WORK IN PROGRESS...
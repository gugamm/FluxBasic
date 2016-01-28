# FLUX BASIC APPLICATION (FBA)

FBA is a basic application that i built using React.js and Flux. Its just a reference to be used when creating applicaitons using flux.

Basic Concepts:
  - Stores are used to store data of a domain. In this case Persons.
  - Dispatcher is the responsable for dispatching actions for registered callbacks (Stores do this)
  - Stores listen for dispatch actions and register a callback with a dispatcher
  - Stores are EventEmitters, therefore, views can listen for changes in stores(they simple register a callback in stores)
  - Views listen for changes in stores and set its state based on their data.

### Version
0.0.1

### Tech

FluxBasic uses a number of open source projects to work properly:

* [ReactJS] - A library for building user interfaces.
* [FLUX] - A new design pattern

### Installation

```sh
$ git clone [git-repo-url] FluxBasic
$ cd FluxBasic
$ npm install
```

License
----

MIT

   [FLUX]: <https://facebook.github.io/flux/>
   [ReactJS]: <https://facebook.github.io/react/>
   

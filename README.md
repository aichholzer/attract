# attract
[![Build Status](https://travis-ci.org/aichholzer/attract.svg?branch=master)](https://travis-ci.org/aichholzer/attract)
[![Dependency status](https://gemnasium.com/badges/github.com/aichholzer/attract.svg)](https://gemnasium.com/github.com/aichholzer/attract)
[![Downloads](https://img.shields.io/npm/dt/attract.svg)](https://www.npmjs.com/package/attract)
[![Always useful](https://img.shields.io/badge/always-useful-ff6400.svg)](https://github.com/aichholzer/attract)

Requiring libraries with love. ❤<br />
`attract` basically replaces `require()`, providing more options and a more flexible way of requiring any modules in your project.

### Install
```
npm install -S attract
```


### Features

* Require `attract` only once, at your application's start, and it will be globally available, everywhere.


### Basic example
```
require('attract');
const [fs, http, net] = attract('fs', 'http', 'net');
```


### Contribute
```
fork https://github.com/aichholzer/attract/
```


### License

[MIT](https://github.com/aichholzer/attract/blob/master/LICENSE)

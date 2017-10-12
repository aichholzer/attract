# attract
[![Build Status](https://travis-ci.org/aichholzer/attract.svg?branch=master)](https://travis-ci.org/aichholzer/attract)
[![Dependency status](https://gemnasium.com/badges/github.com/aichholzer/attract.svg)](https://gemnasium.com/github.com/aichholzer/attract)
[![Downloads](https://img.shields.io/npm/dt/attract.svg)](https://www.npmjs.com/package/attract)
[![Always useful](https://img.shields.io/badge/always-useful-ff6400.svg)](https://github.com/aichholzer/attract)

Requiring libraries with love. ❤<br />
`attract` basically replaces `require()`, providing a more flexible way of requiring libraries and modules in your project.<br />
(It still uses `require()` under the hood, which provides caching all the things you need)

### Install
```
npm i attract
```


### Features

* Require `attract` only once, at your application's start, and it will be globally available, everywhere.
* Say goodbye to those ugly relative paths.


### Usage

##### Before:
```
const fs = require('fs');
const express = require('express');
const mongoose = require('mongoose');
```

##### Now:
```
require('attract')();
const [fs, express, mongoose] = attract('fs', 'express', 'mongoose');
```

You can also get rid of all those horrible relative path requires throughout your application, 
and require third-party modules easily with `attract`, just define your `basePath` at start and you are good to go.

##### Before:
```
const moduleOne = require('../../modules/path/to/moduleOne');
const moduleTwo = require('../../../modules/path/to/moduleTwo');
```

##### Now:
```
// Set `basePath` to your project's root folder, for example.
require('attract')({ basePath: __dirname })
const [
  moduleOne,
  moduleTwo
] = attract('path/to/moduleOne', 'path/to/moduleTwo');
```


### Contribute
```
fork https://github.com/aichholzer/attract/
```


### License

[MIT](https://github.com/aichholzer/attract/blob/master/LICENSE)

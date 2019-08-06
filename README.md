# Notes

## server

### What includes:

* Multipy Koa-Routers using.
* Flowtype.
* Eslint.
* Backpack.

### Usage

### Routing:

Create your router in src/routes file
then import it in src/routes/index.js

example:

```js
const newRouter = require('./newRouter');

const routes = combineRouters([root, newRouter]);
```

### Commands:

* Build:
  ```bash
  npm run build
  ```
* Dev server:

  ```bash
  npm run dev
  ```

* Start on your server:

  ```bash
  npm run start
  ```

### Its still in progress...

## client

### Project setup
```
npm install
```

#### Compiles and hot-reloads for development
```
npm run serve
```

#### Compiles and minifies for production
```
npm run build
```

#### Run your tests
```
npm run test
```

#### Lints and fixes files
```
npm run lint
```

#### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

glbc-healthcheck-koa
---
This module will help you to bypass `Google Load Balancer`(GLBC) with a middleware.

## Install
```bash
npm install glbc-healthcheck-koa --save
```

## Usage
```JavaScript
const Koa = require('koa');
const app = new Koa();
const healthcheck = require('glbc-healthcheck-koa');

app.use(healthcheck());
```

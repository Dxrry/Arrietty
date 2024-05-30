---
title: 'NodeJS: Get Started - Introduction to Node.js'
description: 'Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project!.'
thumbnail: '/assets/uploads/Canva.png'
date: '2020-03-16T05:35:07.322Z'
tag: 'nodejs'
---

A Node.js app runs in a single process, without creating a new thread for every request. Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking and generally, libraries in Node.js are written using non-blocking paradigms, making blocking behavior the exception rather than the norm.

When Node.js performs an I/O operation, like reading from the network, accessing a database or the filesystem, instead of blocking the thread and wasting CPU cycles waiting, Node.js will resume the operations when the response comes back.

This allows Node.js to handle thousands of concurrent connections with a single server without introducing the burden of managing thread concurrency, which could be a significant source of bugs.

Node.js has a unique advantage because millions of frontend developers that write JavaScript for the browser are now able to write the server-side code in addition to the client-side code without the need to learn a completely different language.

In Node.js the new ECMAScript standards can be used without problems, as you don't have to wait for all your users to update their browsers - you are in charge of deciding which ECMAScript version to use by changing the Node.js version, and you can also enable specific experimental features by running Node.js with flags.

# An Example Node.js Application

The most common example Hello World of Node.js is a web server:

```javascript
const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
```

To run this snippet, save it as a `server.js` file and run `node server.js` in your terminal.

This code first includes the Node.js `http` [module](https://nodejs.org/api/http.html).

Node.js has a fantastic [standard library](https://nodejs.org/api/), including first-class support for networking.

The `createServer()` method of http creates a new HTTP server and returns it.

The server is set to listen on the specified port and host name. When the server is ready, the callback function is called, in this case informing us that the server is running.

Whenever a new request is received, the `request` [event](https://nodejs.org/api/http.html#http_event_request) is called, providing two objects: a request (an `http.IncomingMessage` object) and a response (an `http.ServerResponse` object).

Those 2 objects are essential to handle the HTTP call.

The first provides the request details. In this simple example, this is not used, but you could access the request headers and request data.

The second is used to return data to the caller.

In this case with:

```javascript
res.statusCode = 200;
```

we set the statusCode property to 200, to indicate a successful response.

We set the Content-Type header:

```javascript
res.setHeader('Content-Type', 'text/plain');
```

and we close the response, adding the content as an argument to `end()` :

```javascript
res.end('Hello World\n');
```

# More Examples

See https://github.com/nodejs/examples for a list of Node.js examples that go beyond hello world.

---

# Original Post

This article is provided solely as an example for demonstration purposes in creating a personal blog template. The content and information provided herein are not part of the official ubuntu.com website. Your use of this content is entirely at your own risk. We do not guarantee the accuracy, completeness, or reliability of the information in this article. Any actions you take based on the information provided here are at your own risk. For the original article please visit https://nodejs.org/en/learn/getting-started/introduction-to-nodejs .

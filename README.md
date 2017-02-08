**Question 1**

1. A private variable called 'privateVar' with the value 'I am private'
2. A public variable called 'publicVar' with the value 'I am public'
3. A private function called 'privateFnc' that when called outputs 'I am a private fnc'
4. A public function called 'publicFnc' that when called outputs 'I am a public     fnc'


```
console.log(myObj.privateVar); // outputs undefined
console.log(myObj.publicVar); // outputs I am public
console.log(myObj.privateFnc); // outputs undefined
console.log(myObj.publicFnc); // outputs fnc()
```

---

Answer: please see controllers/questionOne.js and routes/index.js

---

**Question 2** 
Write a function that reads a json file* and writes an array with the min and max of each element  to output.json e.g. ```input.json [[1,2,6],[1,2,3]]``` ->  ```output.json [{min:1,max:6}, {min:1,max:3}]``` 

*values.json

```
[
  [1,2,6],
  [1,2,3]
]
```
---

Answer: please see controllers/questionTwo and routes/index.js

---

**Question 3** 

Write a function that spawns 2 child node processes that send back "Hello world" after x milliseconds, the delay should be defined by an argument (e.g. ```node child_process 100```). 
The function should return a promise that resolves with the results of all child processes.

---

Answer: Ahh, what a shame. I stuggled with this question. My difficulty came in synch up the promises with the child node process.
If decided to stop with this question uncompleted. I need to investigate this further. Code so far is on controllers/questionsThree.js 

---

**Question 4**

What is middleware in expressjs? Provide 3 examples including 1 code demonstration of where you could use this approach in an API. 

---

Answer: Middleware is a key feature of Express and code to be run sequence. There are three key third-party modules that I regularly use with Express, they are helmet for security, compression for performance and cookie-parser for handling cookies. 

Middleware in Express is always used with the app.use() method, as an example:

```
const express = require('express');
const helmet = require('helmet');

const app = express();

app.use(helmet.frameguard({ action: 'sameorigin' }));
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.hidePoweredBy());
app.use(helmet.xssFilter());
```

The above example is taken from my React Reaction side project: https://github.com/TCotton/react-reaction/blob/master/server/config/components/server.js




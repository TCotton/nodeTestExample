 *Please email your answers back to kyle@solidstategroup.com, matthewe@solidstategroup.com and benk@solidstategroup.com.*

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

**Question 2** 
Write a function that reads a json file* and writes an array with the min and max of each element  to output.json e.g. ```input.json [[1,2,6],[1,2,3]]``` ->  ```output.json [{min:1,max:6}, {min:1,max:3}]``` 

*values.json

```
[
  [1,2,6],
  [1,2,3]
]
```

**Question 3** 

Write a function that spawns 2 child node processes that send back "Hello world" after x milliseconds, the delay should be defined by an argument (e.g. ```node child_process 100```). The function should return a promise that resolves with the results of all child processes.

**Question 3** 

Write a function that spawns 2 child node processes that send back "Hello world" after x milliseconds, the delay should be defined by an argument (e.g. ```node child_process 100```). The function should return a promise that resolves with the results of all child processes.

**Question 4**

What is middleware in expressjs? Provide 3 examples including 1 code demonstration of where you could use this approach in an API.  
0


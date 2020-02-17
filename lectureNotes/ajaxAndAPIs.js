console.log('Hello World');
setTimeout(() => {
    console.log('Comment 2');
}, 1000);

console.log('Comment 3');


fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json()) //the response is a string, we convert it to an object so we can use it in Javascript
    .then(json => console.log(json));
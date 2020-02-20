console.log('Different Value Types: String, Boolean, Integer, Float, Undefined, Object');

let x=10;
let y;
console.log('Here you are assigning value of x to y');
y=x;
x=20;

console.log('Value of x is: '+x);
console.log('Value of y is: '+y);


console.log('Different Reference Types: Object, Array, Function');

let p={
            value:10
      }
console.log('Here you are assigning reference(not value) of p to q, now q is same as p');
console.log('So whatever you will do with p , it impacts q becuase both are pointing to same location');
let q=p;
p.value=20;
console.log('Thus here is the result');
console.log('Value of q is: '+q.value);
console.log('Value of p is: '+p.value);
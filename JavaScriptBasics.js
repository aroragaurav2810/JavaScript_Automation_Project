let a=20;
a=10;
let b=30;
let c=a+b;
let d=a*b;
let e=a/b;
let string_value='Gaurav';
let still_string_value='undefined';
let boolean_value=true;
let null_value=null;
let undefined_value;
let int_value=100;
let float_value=50.5;
const constant_value=50;
//constant_value=25;
let dynamictyping='Arora'
dynamictyping=5.8;
// Create an object in javascript with undefined 
let user={};
// Create an object(variable) in javascript with some values using curly bracket
let employee={
                name:"Tom",
                salary:200000
              }
// can reassign values to the variable object
    employee={
                name:"Enrique",
                salary:600000
              }

    

// Create an object(constant) in javascript with some values using curly bracket
const worker={
            name:"Anaa",
            salary:500000
         }

 // can not reassign values to constant object       
      /*   worker={
                name:"Ammy",
                salary:100000
                } 
      */

// Create an object in javascript with undefined and later add some values to the object using main bracket
let student={};
student['name']='Amit';
// Create an array in javascript
let language=['java','javascript'];
// Create a function in javascript
function area(radius)
{
    let area=3.14*(radius^2);
    return area;
}

console.log("Simple varaiables and operators");
console.log("value of a is: "+a);
console.log("value of b is: "+b);
console.log("sum of c=a+b is: "+c);
console.log("multiplication of d=a*b is: "+d);
console.log("division of e=a/b is: "+e);

console.log("Different type of data types");
console.log("1. Primitive Data Types");
console.log("There are different primitive data types in JS: String, booelan, integer, float, object ");
console.log("typeOf String value is: "+typeof string_value);
console.log("typeOf String value is: "+typeof still_string_value);
console.log("typeOf boolean value is: "+typeof boolean_value);
console.log("typeOf null value is: "+typeof null_value);
console.log("typeOf undefined value is: "+typeof undefined_value);
console.log("typeOf int value is: "+typeof int_value);
console.log("typeOf float value is: "+typeof float_value);
console.log("constant: value of constant cannot be changed");
console.log("value of constant is: "+constant_value);

console.log("Dynamic Typing: In this you can assign different type of value to same variable");
console.log("Unlike java, Javascript supports dynamic typing: "+dynamictyping);

console.log("1. Reference Data Types")
console.log("There are different reference data types in JS: Object, Array, Function");
console.log("Object reference datatype:");
console.log("user object with und efined is: "+user.name);
console.log("employee object name is: "+employee.name);
console.log("employee object salary property has value : "+employee.salary);
console.log("change employee salary now");
employee.salary=300000;
console.log("employee object salary property has new value: "+employee.salary);
console.log("student object name property has value: "+student.name);
console.log("Array reference datatype:");
console.log("language array is: "+language);
console.log("language array length is: "+language.length);
language[2]='ruby';
console.log("language array after adding an elelment is: "+language);
console.log("language array with no value at a particular index: "+language[3]);
console.log("area of circle is: "+area(10));

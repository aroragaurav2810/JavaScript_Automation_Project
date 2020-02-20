console.log('while loop');
let a=1;
while(a<=10)
{
        if(a%2==0)
        console.log('value of a is: '+a);
a++;
}



console.log('do-while loop');
let b=11;
do
{
console.log("Value of b is: "+b);
}while(b<=10);


console.log('for loop');
for(let c=0;c<10;c++)
{
    console.log("Value of c is: "+c);
} 

console.log('for-in loop with object');
// An object containing variables
let language={
    name :'english',
    type :'A'
 }
// key is a keyword             
for(key in language)
{
    console.log("Key is: "+key+ ". value is: "+language[key]);   
}

// An object containing an array:
let programming_language={
    name :['java','javascript'],
    type :['frontend','backend']
 }

 for(key in programming_language)
 {
     console.log("Key is: "+key+". first value of array key is "+programming_language[key][0]+". second value of array key is "+programming_language[key][1]);     
 }

// Create an array
let books_array=['Java','C++','Javascript','dotnet'];
 console.log('for-of loop with array');
 for(books of books_array)
 {
     console.log(books);   
 }

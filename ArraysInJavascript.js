console.log('Arrays in javascript');
console.log('Lets create an array');
let colors=['red','yellow','green'];
console.log('here is an array');
console.log(colors);
console.log('here is the first element of an array');
console.log(colors[0]);
console.log('here is the length of an array');
console.log(colors.length);
console.log('here is sorted array');
colors.sort;
console.log(colors);
console.log('array is not being sorted, lets see later what is the issue');
console.log('Add an element in an array at the end using push method');
colors.push('pink');
console.log('here the array becomes');
console.log(colors);
console.log('Add an element in an array at the begining using unshift method');
colors.unshift('blue');
console.log('here the array becomes');
console.log(colors);
console.log('Add an element in an array in the middle using splice method');
console.log('The below function will add element `black` at index 2 and delete 0 element ');
colors.splice(2,0,'black');
console.log('here the array becomes');
console.log(colors);
console.log('print all element of an array one by one');
for(element of colors)
{
    console.log(element);
}
console.log('-----------')
// or
for(key in colors)
{
    console.log(colors[key]);
}
console.log('find elements in an array');
console.log('There are 2 types of element in an array which we can fetch. 1.primary type element and 2.reference type element');
console.log(colors.indexOf('pink'));
console.log('Array is an object and we know an object in javascript is dynamic in nature');
console.log('Add different data type in an array. lets add an object in array which is containing string elements');
let circle={    
                radius:10
           }
colors.push(circle);
console.log('here the array becomes');
console.log(colors);
console.log('Add duplicate element in an array');
colors.push('black');
console.log('here the array becomes with two `black` elements');
console.log(colors);
console.log('Now there are two `black` elements, fetch the second `black` element index');
console.log(colors.indexOf('black'));
console.log('you can see , it has given index 2 which is for first `black` element');
console.log('Now to get the index of second `black`, we need to use indexof() function with extra parameter which will start searching from mentioned index  ')
console.log(colors.indexOf('black',5));
// or
console.log(colors.indexOf('black',colors.indexOf('black')+1));
console.log(colors.indexOf('pink')!==-1);


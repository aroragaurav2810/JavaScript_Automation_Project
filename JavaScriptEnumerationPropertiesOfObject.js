console.log('JavaScript Enumeration Properties Of an Object');
console.log('Lets create an object');
let circle={
                radius:10,
                area()
                {
                    console.log('area of a circle');
                }

           }

// for in loop used with object          
for(let key in circle)
{
    console.log('Key is: '+key+' and Value of key is: '+circle[key]);
}

// The below code will say circle is not iterable, means 'of' works with array not with an object
// Now what should we do to make this object as an array
/*
for(key of circle)
{
    console.log(key);
}
*/


// To convert this object into an array, you can convert object into array of keys, arrays of values, arrays of etities.
// converting an object into an array is called enumerating the properties of object
// enumerate means: list, so it means we are converting an object into list
// convert object into array of keys
for(key of Object.keys(circle))
{
    console.log("key of circle is: "+key);
}

// convert object into array of values
for(value of Object.values(circle))
{
    console.log("Value of cirlce is: "+value);
}

// similiary as you have done looping of object by converting it into an array of keys and values, you can also convert it into array of keys    
// convert object into array of entries
for(entry of Object.entries(circle))
{
    console.log("entry of cirlce is: "+entry);

}

// check if property is present in the object
if('radius' in circle)
{
    console.log('Yes, radius is available');
}
else
{
    console.log('No, radius is not available');
}

if('diameter' in circle)
{
    console.log('Yes, diameter is available');
}
else
{
    console.log('No, diameter is not available');
}

if('area' in circle)
{
    console.log('Yes, area function is available');
}
else
{
    console.log('No, area function is not available');
}
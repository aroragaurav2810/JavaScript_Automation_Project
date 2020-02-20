console.log('Here is an existing object, circle1');
let circle={
                    radius:10,
                    area: function()
                    {
                        console.log('area() function with a little complicated signature')
                    },
                    circumference()
                    {
                        console.log('circumference() function with a simple signature')
                    }

                }

console.log(circle);
console.log('-----------------');
console.log('Lets clone this created object directly to another object like circle2=circle');
let circle2=circle;
console.log('Cloned object is:');
console.log('circle2 becomes');
console.log(circle2);
console.log('Lets clone this created object indirectly to another object like assigning key of existing object to key of cloned object');
let circle3={};
for(key in circle)
{
circle3[key]=circle[key];
}
console.log('circle3 becomes');
console.log(circle3);
console.log('Lets clone this created object to new object using assign method');
let circle4={}
circle4=Object.assign(circle);
console.log('circle4 becomes');
console.log(circle4);
// above and below are the normal ways to clone existing object to new object by using assign() method, you can use anyone 
// let circle4=Object.assign({},circle);
console.log('Lets clone this created object to new object with adding new properties using assign method');
let circle5=Object.assign({
                            newRadius:20,
                            newArea()
                            {
                                console.log('new area() function')
                            }
                          },circle);
console.log('After cloning and adding new object properties, circle5 becomes');
console.log(circle5);
console.log('Lets clone this created object to new object using spread... operator');
let circle6={ ...circle }
console.log('circle6 becomes');
console.log(circle6);
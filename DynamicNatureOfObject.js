console.log('Dynamic Nature of Object in JavaScript');
console.log('Unlike java, javascript does have the privilege of having dynamic object');
console.log('lets create an object');
let outer_radius=20;
let circle={
                radius:10,
                areaValue:3.14*this.radius^2, 
                area()
                {
                    console.log('Area of object circle is: '+circle.area);
                }
           }

console.log('circle object is');
console.log(circle);
console.log(circle.area);
console.log('add new variables property to object circle on the go');
circle.diameter=2*outer_radius;
console.log('diameter of object circle is '+circle.diameter);
circle.circumference=2*3.14*outer_radius;
console.log('circumference of object circle is '+circle.circumference);
console.log('add new functions property to object circle on the go');
circle.circumference= function()
{
    console.log('circumference function of object circle');
}
console.log('circle object now is');
console.log(circle);
console.log('delete existing variables property of object circle on the go');
delete circle.diameter;
console.log('delete existing function property of object circle on the go');
delete circle.circumference;
console.log('circle object now is');
console.log(circle);

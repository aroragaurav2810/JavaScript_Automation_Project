console.log('Factory function is a function which produces objects in masses/multiple quantity');
console.log('craete a fucntion and keep the object(created in JavaScriptFactoryFunctionReason.js) in created function');
console.log('once you keep the object in a function, just remove the left assignment part of object and replace it with return keyword');
console.log('once it is done, create multiple object with different parameter values and call this functionthrough every object in order to return some output as per different values passed in multiple objects');
function factoryFunction(radius1)
{
//     
return{
    //  console.log('variables inside an object');
        radius:radius1,
        isCircleVisible:true,

    //  console.log('an object inside an object');   
        smallCircle:{
                        smallRadius:5,
                        isSmallCircleVisible:true
                    },

    //  console.log('a function inside an object, make sure you are using this below signature to create function inside an object, this function signature is slightly different from normal function signature');   
        getCircleValueWithComplicatedSignature: function(circle1_radius)
        {
               let area= 3.14*(circle1_radius^2);
               return area;
        },
     //  console.log('a function inside an object, if you don't remember the above signature to create function inside an object then use this simple signature');         
       getCircleValueWithSimpleSignature(circle2_radius)
       {
                let diameter=2*circle2_radius;
                return diameter;
       }
        
   }
}
console.log('Below is the list of multiple objects with one line code')
let circle1=factoryFunction(10);
console.log("radius of circle1 is: "+circle1.radius);
let area1=circle1.getCircleValueWithComplicatedSignature(10);
console.log('area of circle1 is: '+area1);
let diameter1=circle1.getCircleValueWithSimpleSignature(10);
console.log('diameter of circle1 is: '+area1);
let circle2=factoryFunction(11);
console.log("radius of circle2 is: "+circle2.radius);
let area2=circle2.getCircleValueWithComplicatedSignature(11);
console.log('area of circle2 is: '+area2);
let diameter2=circle2.getCircleValueWithSimpleSignature(11);
console.log('diameter of circle2 is: '+diameter2);
let circle3=factoryFunction(12);
console.log("radius of circle3 is: "+circle3.radius);
let area3=circle3.getCircleValueWithComplicatedSignature(12);
console.log('area of circle3 is: '+area3);
let diameter3=circle3.getCircleValueWithSimpleSignature(12);
console.log('diameter of circle3 is: '+diameter3);
let circle4=factoryFunction(13);
console.log("radius of circle4 is: "+circle4.radius);
let area4=circle4.getCircleValueWithComplicatedSignature(13);
console.log('area of circle4 is: '+area4);
let diameter4=circle4.getCircleValueWithSimpleSignature(13);
console.log('diameter of circle4 is: '+diameter4);
let circle5=factoryFunction(14);
console.log("radius of circle5 is: "+circle5.radius);
let area5=circle5.getCircleValueWithComplicatedSignature(14);
console.log('area of circle5 is: '+area5);
let diameter5=circle5.getCircleValueWithSimpleSignature(14);
console.log('diameter of circle5 is: '+diameter5);
let circle6=factoryFunction(15);
console.log("radius of circle6 is: "+circle6.radius);
let area6=circle6.getCircleValueWithComplicatedSignature(15);
console.log('area of circle6 is: '+area6);
let diameter6=circle6.getCircleValueWithSimpleSignature(15);
console.log('diameter of circle6 is: '+diameter6);

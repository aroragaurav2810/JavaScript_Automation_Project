console.log('This JavaScriptFactoryFunctionReason.js file shows a problem which urges the need of creating the factory function');
console.log('Problem: The problem is , If lets say, user wants to create multiple object then he has to create multiple objects similar to below objects, which seems a complicated task');
console.log('For problem, please refer below code');
console.log('Solution: Thus the solution to above problem is to create a factory function which produces multiple object with very less amount of code');
console.log('For solution, please refer JavaScriptFactoryFunctionSolution.js file');
console.log('variables, functions and objects inside an object');


let circle={
            //  console.log('variables inside an object');
                radius:10,
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
                        let area= 3.14*(circle2_radius^2);
                        return area;
               }
                
           }
           console.log(circle.radius);
           console.log(circle.isCircleVisible); 
           console.log(circle.smallCircle); 
           console.log(circle.smallCircle.smallRadius);
           console.log(circle.smallCircle.isSmallCircleVisible);
           console.log(circle.getCircleValueWithComplicatedSignature(10));
           console.log(circle.getCircleValueWithSimpleSignature(100));
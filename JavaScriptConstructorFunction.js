console.log('Constructor in javascript');
console.log('It is as similar as java but here there is not mandate on having same name as class name because in javascript , we do have a file but do not have any class');

function Circle(radius)
{
    this.radius=radius,
    console.log('radius is: '+this.radius)
}
console.log('whenever there is a constructor, object creates with new keyword')
console.log('calling a constructor function using new keywrd');
let c1=new Circle(10);

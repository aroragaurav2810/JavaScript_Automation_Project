console.log('If - else conditions');
let a=30;
let b=40;
let opt;
if(a>b)
{
    opt=1;
    console.log("a is greater than b");
}
else
{
    if(a==b)
    {
        opt=2;
        console.log("a is equal to b")
    }
    else
    {
       opt=3;
       console.log("b is greater than a")
    }
}

console.log('Switch block');
switch(opt)
{
    case 1: a>b;
            console.log('a is greater than b');
            break;
    case 2: a==b;    
            console.log('a is equal to b');
            break;
    case 3: b>a;
            console.log('b is greater than a');
            break;
    default: 
            console.log('default case');
            
}



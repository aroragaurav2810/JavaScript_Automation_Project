//console.log('Template literal in javascript');
//console.log('Template literal is as similar as String literal, boolean literal, Object literal, Integer literal');
//console.log('Generally literal means is exact word');
//console.log('Template literal in javascript basically represents any template written in javascript code');
//console.log('Template literal is nothing but the back tick character on keyboard');
//console.log('So whenever you write a template in javascript code the use these back tick character on keyboard');
// console.log('Use of template literal mostly comes into existance while writing a mail template or any paragraph template in javascript code');
//console.log('Please have a look at below example');
//console.log('The below code does not execute due to spacing and other indentation issue'); 
//console.log('Thus to solve this issue, javascript introduced template literal or back ticks for writing below such requirements'); 
/*
let mailBody=   'Hi,

                    Valuation feedback has been submitted successfully,
                    user will get a mail on same, 
                    please reach out to support/admin for any query 
                    
                Thanks
                LOANS support Team';
*/


let mailBody=   `Hi,

                    Valuation feedback has been submitted successfully,
                    user will get a mail on same, 
                    please reach out to support/admin for any query 
                    
                Thanks
                LOANS support Team`;

console.log('Below is the mailBody template with expected indentation and it is possible due to template literal or back tick feature of javascript');
console.log(mailBody);
console.log('Here is one more example, where in the template like mailBody you can use variables');

supportAdmin= function()
{
    return 'Nitin';
}

let name='Gaurav';
let mailBodyWithIdentifier= 
`
Hi ${name},

    Valuation feedback has been ${10*10} submitted successfully,
    user will get a mail on same, 
    please reach out to support/admin ${supportAdmin()} for any query 

    Have a great day!!
                                
Thanks
LOANS support Team
`;



console.log(mailBodyWithIdentifier);

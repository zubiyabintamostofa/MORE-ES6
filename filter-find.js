const numbers=[5,23,55,32,7,19,20];
const bigNumbers=numbers.filter(number=>number>20)
//console.log(bigNumbers);



const products =[
    {name:'water bottle',price:50,color:'yellow'},
    {name:'mobile phone',price:15000,color:'black'},
    {name:'smart watch',price:3000,color:'black'},
    {name:'sticky notr',price:30,color:'pink'},
    {name:'water glass',price:3,color:'white'}

]
//find er niyom  
const whiteitem=products.find(product=>product.color=='pink');
console.log(whiteitem);

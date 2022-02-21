const friends=['tom hanks','tom cruise','tom brady','tom boby'];
const flength=friends.map(friend=>friend.length);
//console.log(flength);


const products =[
     {name:'water bottle',price:50,color:'yellow'},
     {name:'mobile phone',price:15000,color:'black'},
     {name:'smart watch',price:3000,color:'black'},
     {name:'sticky notr',price:30,color:'pink'},
     {name:'water glass',price:3,color:'white'}

]
const productName=products.map(product=>product.name);
//console.log(productName);

//ar ekta niyom holo :

products.map(products=>console.log(products));

//ro ekta niyom holo:

products.forEach(product=>console.log(product));


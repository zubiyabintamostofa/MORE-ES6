const numbers=[2,5,6,7,8];
const output=[];
//arrow use korle niyom:
const doubleIt=num=>num*3
for(const num of numbers){
    const result=doubleIt(num);
    output.push(result);
}

//console.log(output);

//1. first e loop korchi
//2.element diye function ke call korchi
//3.result ektaa array er moddhe push korchi


//map er niyom
 const output22=numbers.map(doubleIt);
 console.log(output);
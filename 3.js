var a=prompt("数字1=","");
var b=prompt("数字2=","");
let myFunction=function(a,b){
    let x;
    x=a;
    a=b;
    b=x;
    console.log(a,b);
}
myFunction(a,b)//work3
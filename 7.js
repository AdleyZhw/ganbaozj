const arr = [1,1,1,2,2,3,4,4,5,5,5];
var x=arr.length;
function work7()
{
for(i=0;i<x;i++){
let y=arr[i];
for(z=i+1;z<x;z++) {
let c=arr[z];
if(y==c){
     delete arr[z];
        }
                   }
                }
}
work7()
console.log(arr);

let arr = [5, 3, 8, 1];
let filtered = [];
let q=arr.length;
function work8(arr,a, b) {
    for (i = 0; i < q; i++) {
        if (a <= arr[i]){if( b >= arr[i]){
                       filtered.push(arr[i]);}
                    }
    }
}
work8(arr, 1, 4);
console.log(filtered);

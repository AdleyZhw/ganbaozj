var a, b, c;
function $(work6) {
    var d = work6.substring(0, 1);
    if (d == '.') {
        b = document.getElementsByClassName(work6.substring(1,work6.length));
                  } else if (d == '#') {
        a = document.getElementById(work6.substring(1, work6.length));
                                       } else {
        c = document.getElementsByTagName(work6);
                                              }
                                            }                 
$('#myid');
$('p');
$('.myClass'); 
console.log(a);
console.log(b);
console.log(c);

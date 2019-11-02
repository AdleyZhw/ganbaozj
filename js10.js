window.onload = function () {
    const array=[1,2,3,4,5];

    const items = document.getElementsByClassName('item');
    const week = ['!_!', '@_@', '#_#', '$_$', '^_^'];
    for (let i = 0; i < items.length; i++) {
        //onclick为鼠标点击事件
        items[i].onclick = function() {
            items[i].innerHTML = week[i];
            items[i].style.color = 'black';
            for (let a = 0; a < items.length; a++) {
                if (a != i){ items[a].innerHTML = array[a];
                }
                  items[a].style.color = 'aqua';

        }
        }
        }
}

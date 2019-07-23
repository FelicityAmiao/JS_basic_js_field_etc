'use strict';
//闭包

//1 闭包基本概念

function foo(){
    var a = 2;
    function bar(){
        console.log(a);
    }
    return bar;
}
foo();
console.log(a);
// var baz = foo();
// baz();

//2 使用闭包例子，计数器

// function create_counter(initial) {
//     var x = initial || 0;
//     return {
//         inc: function () {
//             x += 1;
//             return x;
//         }
//     }
// }
// var c1 = create_counter();
// c1.inc(); // 1
// c1.inc(); // 2
// c1.inc(); // 3

// var c2 = create_counter(10);
// c2.inc(); // 11
// c2.inc(); // 12
// c2.inc(); // 13
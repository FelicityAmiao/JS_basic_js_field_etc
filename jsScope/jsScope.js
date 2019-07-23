'use strict';

//js作用域
//1 函数外访问内,no

function foo() {
    var x = 1;
    x = x + 1;
}
x = x + 2; // ReferenceError! 无法在函数体外引用变量x

//2 函数内访问外,yes

// function foo() {
//     var x = 1;
//     function bar() {
//         var y = x + 1; // bar可以访问foo的变量x!
//         console.log(y);
//     }
//     bar();
//     var z = y + 1; // ReferenceError! foo不可以访问bar的变量y!
// }
// foo();

//3 内外相同时，访问内

// function foo() {
//     var x = 1;
//     function bar() {
//         var x = 'A';
//         console.log('x in bar() = ' + x);
//     }
//     console.log('x in foo() = ' + x);
//     bar();
// }
// foo();

//4 变量提升

// function foo() {
//     var x = 'Hello, ' + y;
//     console.log(x);
//     var y = 'Bob';
// }
// foo();

// function foo() {
//     var y; // 提升变量y的申明，此时y为undefined
//     var x = 'Hello, ' + y;
//     console.log(x);
//     y = 'Bob';
// }
// foo();

//全局作用域

//1 全局作用域与window的关系

// var course = 'Learn JavaScript';
// console.log(course); // 'Learn JavaScript'
// console.log(window.course); // 'Learn JavaScript'

//2 不在函数体内就是全局作用域，那么全局作用域只有一个

// // 唯一的全局变量MYAPP:
// var MYAPP = {};
// // 其他变量:
// MYAPP.name = 'myapp';
// MYAPP.version = 1.0;
// // 其他函数:
// MYAPP.foo = function () {
//     return 'foo';
// };

//3 效率：尽量使用局部变量

//块级作用域

//ES6引入块级作用域，let和const

// function foo() {
//     var sum = 0;
//     for (let i=0; i<100; i++) {
//         sum += i;
//     }
//     // SyntaxError:
//     i += 1;
// }
// foo();
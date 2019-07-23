'use strict';

//方法绑定作用域

//1 方法是啥

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        var y = new Date().getFullYear();
        return y - this.birth;
    }
};
console.log(xiaoming.age);
console.log(xiaoming.age());

//2 this失效

// function getAge() {
//     var y = new Date().getFullYear();
//     return y - this.birth;
// }
// var xiaoming = {
//     name: '小明',
//     birth: 1990,
//     age: getAge
// };
// xiaoming.age(); // 29, 正常结果
// getAge();

//3 坏处

// var fn = xiaoming.age; // 先拿到xiaoming的age函数
// fn();

//4 看个例子

// var xiaoming = {
//     name: '小明',
//     birth: 1990,
//     age: function () {
//         function getAgeFromBirth() {
//             var y = new Date().getFullYear();
//             return y - this.birth;
//         }
//         return getAgeFromBirth();
//     }
// };

// xiaoming.age(); 

//4.1 修复方法一

// var xiaoming = {
//     name: '小明',
//     birth: 1990,
//     age: function () {
//         var that = this; // 在方法内部一开始就捕获this
//         function getAgeFromBirth() {
//             var y = new Date().getFullYear();
//             return y - that.birth; // 用that而不是this
//         }
//         return getAgeFromBirth();
//     }
// };
// xiaoming.age(); // 29

//4.2 修复方法二: apply

// function getAge() {
//     var y = new Date().getFullYear();
//     return y - this.birth;
// }
// var xiaoming = {
//     name: '小明',
//     birth: 1990,
//     age: getAge
// };
// xiaoming.age(); // 29
// getAge.apply(xiaoming, []); // 29, this指向xiaoming, 参数为空

//4.3 修复方法三：call

// getAge.call(xiaoming);

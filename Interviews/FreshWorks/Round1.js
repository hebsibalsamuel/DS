
// setTimeout(() => {
//     console.log("a")
// }, 0)
// console.log("b")

// let counter = new Date().getSeconds()

//working function
let interval = function () {
    let initialTime = new Date().getTime()
    let timer = setInterval(() => {
        let currentTime = new Date().getTime()
        if (currentTime - initialTime >= 10000) {
            clearInterval(timer)
        }
        console.log("b")
    }, 1000)
}
interval()

// setTimeout(() => {
//     clearInterval(interval)
// }, 10000)




String.prototype.toHyphen = function () {
    let regex = /[^a-zA-Z]/
    let currentString = this
    let arr = currentString.split(regex)
    return arr.join('-');
}

let input = "first_name";
console.log(input.toHyphen())


function name1() {
    console.log('name1')
}
function name2() {
    setTimeout(() => {
        console.log('name2')
    }, 0)
}
function name3() {
    setTimeout(() => {
        console.log('name3')
    }, 0)
}
function name4() {
    let p = new Promise((resolve, reject) => {
        resolve('name4')
    })
    p.then(res => { console.log(res) })
}
function name5() {
    console.log('name5')

}

(function main() {
    name1();
    name2();
    name3();
    name4();
    name5();
})();

// name1
// name5
// name4
// name2
// name3

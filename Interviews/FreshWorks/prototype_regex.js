String.prototype.changeHypen = function () {
    let string = this;
    const regex = /[^A-Za-z]/
    // let arr = string.split(regex)
    // console.log(arr.join("-"))
    for (let i = 0; i < string.length; i++) {
        if (string[i].match(regex)) {
            string[i] = '-'
        }
    }
    console.log(string)
}

let ip = "hello world amazing"
ip.changeHypen()
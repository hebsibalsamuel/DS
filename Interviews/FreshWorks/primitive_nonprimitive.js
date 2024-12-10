let obj = {
    name: "hebsi",
    org: [{
        name: 'cts'
    }, {
        name: 'nielsen'
    }]
}

// let obj2 = obj
// let obj2 = { ...obj }
// let obj2 = Object.assign({}, obj)
let obj2 = JSON.parse(JSON.stringify(obj))
console.log(obj)

obj2.org[0].name = "doe"

console.log(obj, obj2)
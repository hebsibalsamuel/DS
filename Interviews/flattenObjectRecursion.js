let user = {
    name: "hebsi",
    address: {
        street: '3rd cross',
        country: 'india',
        pin: '600028'
    },
    personal: {
        area: {
            landmark: 'icici bank',
            areaCode: [21, 45, 45]
        }
    }
}
let flattenOp = {}

function flattenObject(obj, root) {
    for (key in obj) {
        if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            flattenObject(obj[key], `${root}_${key}`)
        }
        else {
            flattenOp[`${root}_${key}`] = obj[key]
        }
    }
    return flattenOp
}
console.log(flattenObject(user, 'user'))

console.log(typeof (user))
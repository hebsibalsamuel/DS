const api1 = new Promise((resolve, reject) => {
    setInterval(() => {
        resolve("Success api1")
    }, 3000)
})
const api2 = new Promise((resolve, reject) => {
    setInterval(() => {
        reject("Success api2")
    }, 3000)
})

//fail quick
Promise.race([api1, api2]).then((res) => {
    console.log(res, "race")
}).catch(err => console.log(err))



Promise.all([api1, api2]).then((res) => {
    console.log(res, "all")
}).catch(err => console.log(err))



Promise.any([api1, api2]).then((res) => {
    console.log(res, "any")
}).catch(err => console.log(err))



Promise.allSettled([api1, api2]).then((res) => {
    console.log(res, "allSettled")
}).catch(err => console.log(err))
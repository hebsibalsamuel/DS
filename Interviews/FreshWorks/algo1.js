// one object manipulatio and one array problem
let obj = {
    name: "myname",
    age: 23,
    gender: "female",
    data: {
        marks: {
            sub1: 50,
            sub2: 10
        }
    },
    others: {
        marks: [{
            sub: 40
        },
        {
            sub: 30
        }
        ]
    }
}

// no return of functions it will break the for loop
function flattenObj(obj, root) {
    for (key in obj) {
        if (typeof obj[key] === "object") {
            flattenObj(obj[key], `${root}${key}.`)
        }
        else {
            console.log(`${root}${key} is ${obj[key]}`)
        }
    }

}
// let Output = flattenObj(obj, "My ")


// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

// 2 pointer approach
var maxProfit = function (prices) {

    let buy = 0
    let sell = 1
    let profit = 0

    while (sell < prices.length) {
        if (prices[buy] > prices[sell]) {
            buy = sell
            sell++

        }
        else {
            profit = Math.max(profit, (prices[sell] - prices[buy]))
            sell++

        }
    }
    return profit
};
let ip = [6, 1, 2, 5, 7, 3]
let ip2 = [6, 5, 4, 3, 2, 1]
let ip3 = [2, 1, 2, 1, 0, 1, 2]

console.log(maxProfit(ip2))


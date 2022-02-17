let fullName = function (firstName, lastName) {
    console.log(firstName, " ", lastName);
}
let a = {
    firstName: "hebsi",
    lastName: "samuel",
    myname: function (firstName, lastName) {
        console.log(firstName, " + ", lastName)
    }
}
let a1 = {
    firstName: "hebsi",
    lastName: "godson"
}

// let fname = a.myname.bind(a1,a1.firstName,a1.lastName)
// fname();
let fname = a.myname
fname(a.firstName, a.lastName);

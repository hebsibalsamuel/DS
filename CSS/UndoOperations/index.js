let value = document.getElementById('input')
let addBtn = document.getElementById('add')
let minusBtn = document.getElementById('minus')
let undoBtn = document.getElementById('undo')
let refstack = []
let initialValue = 0
addBtn.addEventListener('click', function () {
    if (refstack.length === 0) {
        refstack.push(parseInt(value.value) || 0)
        initialValue = value.value
    }
    initialValue++
    refstack.push(initialValue)
    console.log(initialValue, refstack)
})

minusBtn.addEventListener('click', function () {
    if (refstack.length === 0)
        console.log('No initial value')
    initialValue--
    refstack.push(initialValue)
    console.log(initialValue, refstack)

})

undoBtn.addEventListener('click', function () {
    if (refstack.length <= 1) {
        console.log('No operations done')
        return;
    }
    refstack.pop()
    initialValue = refstack[refstack.length - 1]
    console.log(initialValue, refstack)

})
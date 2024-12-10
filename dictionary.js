let dictionary = []
function addToDictionary() {
    let word = document.getElementById("search").value;
    if (word != '') {
        dictionary.push(word)
        console.log(word)
        displayWords();
    }
}

function displayWords() {
    document.getElementById("displayList").innerHTML = '';
    dictionary.sort();
    for (let i = 0; i < dictionary.length; i++) {
        document.getElementById("displayList").innerHTML += `<li>${dictionary[i]}</li>`;

    }
}

console.log("hello@@@first")

setTimeout(() => { console.log("hello1000") }, 3000)
setTimeout(() => { console.log("hello000") }, 0)
console.log("hello@@@last")
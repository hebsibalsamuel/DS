let input="hebsiba$l in an interview"
//input="hebsiba"

// output = ['he','bs','ib','al','in']

// handle special characters and spaces
//characters to array


function getTwoCharactersList(input){
let characters=""
let charactersList = []
for(let i=0;i<input.length;i++){
  if(input[i].match(/[a-zA-z]/)){
    characters+=str[i]
    if(characters.length>=2 || (i==input.length-1 && characters.length==1)){
      charactersList.push(characters)
      characters = ''
    }
  }
}
return charactersList;
}


let twoCharactersList = getTwoCharactersList(input)
console.log(twoCharactersList)
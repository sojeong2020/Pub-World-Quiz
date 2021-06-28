const countryList = document.getElementById('answer')
const countryListS = document.getElementById('answer_2')


let totalScore=0;

function addCountry(countryName){
  if(countryName === 'Sweden'){
    ++totalScore

    const newP = document.createElement('p')
     newP.innerText = 'Yes! Sweden is correct!'
     countryList.appendChild(newP)

  }else{
    const newP = document.createElement('p')
     newP.innerText = 'Incorrect!'
     countryList.appendChild(newP)
}
}

function addSCountry(countryName){
  if(countryName === 'The Vatican'){
    ++totalScore

    const newP = document.createElement('p')
     newP.innerText = 'Yes! The Vatican is correct!'
     countryListS.appendChild(newP)

  }else{
    const newP = document.createElement('p')
     newP.innerText = 'Incorrect!'
     countryListS.appendChild(newP)
}
}

function myScore() {
  document.getElementById("demo").innerHTML = `${totalScore}`;
}





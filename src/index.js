const questionNumber = document.querySelector(".question-number")
const presidentName = document.querySelector(".president-name")
const presidentFacts = document.querySelector(".president-facts")
const image = document.querySelector(".image")
const correctFact = document.querySelector('.correct-fact')
const overall = document.querySelector(".overall")
const quiz = document.querySelector(".quiz-box")
const result = document.querySelector(".result")
const scores = document.querySelector(".score")

let numPresidents = 0;
let currentPresident;
let availablePresidents = [];
let availableFacts = [];
let points = 0;
let numTrys = 0;


function setAvailablePresidents(){
    for(let i = 0; i < presidents.length; i++){
        availablePresidents.push(presidents[i])
        // createPresident(presidents[i])   
    }
    
}

function createPresident(president){
    // questionNumber.innerHTML = numPresidents + 0;
    // const presidentsIndex = availablePresidents[Math.floor(Math.random() * availablePresidents.length)]
    // const presidentsIndex = availablePresidents[indexOf(target.getAttribute('id')]
    currentPresident = president;
    presidentName.innerHTML = currentPresident.name;
    const index1 = availablePresidents.indexOf(presidentsIndex);
    availablePresidents.splice(index1, 1);
    image.innerHTML = ''
    if (currentPresident.hasOwnProperty("img")){
        const img = document.createElement("img")
        img.src = currentPresident.img
        image.appendChild(img)
    }

    const factsLength = currentPresident.facts.length;
    for(let i = 0; i < factsLength; i++){
        availableFacts.push[i]
    }

    presidentFacts.innerHTML = ''
   for(let i = 0; i< factsLength; i++){

       const factIndex = availableFacts[Math.floor(Math.random() * availableFacts.length)];

       const index2 = availableFacts.indexOf(factIndex);
       availableFacts.splice(index2, 1)
       const fact = document.createElement('div');
       fact.innerHTML = currentPresident.facts[i];
       fact.id = i;
       fact.className = "fact";
       presidentFacts.appendChild(fact);
       fact.setAttribute('onclick', 'getResult(this)')
   }
    numPresidents ++ 
}

function getNewPresident(){
    questionNumber.innerHTML = numPresidents + 1;
    const presidentsIndex = availablePresidents[Math.floor(Math.random() * availablePresidents.length)]
    currentPresident = presidentsIndex;
    presidentName.innerHTML = currentPresident.name;
    const index1 = availablePresidents.indexOf(presidentsIndex);
    availablePresidents.splice(index1, 1);
    image.innerHTML = ''
    if (currentPresident.hasOwnProperty("img")){
        const img = document.createElement("img")
        img.src = currentPresident.img
        image.appendChild(img)
    }

    const factsLength = currentPresident.facts.length;
    for(let i = 0; i < factsLength; i++){
        availableFacts.push[i]
    }

    presidentFacts.innerHTML = ''
   for(let i = 0; i< factsLength; i++){

       const factIndex = availableFacts[Math.floor(Math.random() * availableFacts.length)];

       const index2 = availableFacts.indexOf(factIndex);
       availableFacts.splice(index2, 1)
       const fact = document.createElement('div');
       fact.innerHTML = currentPresident.facts[i];
       fact.id = i;
       fact.className = "fact";
       presidentFacts.appendChild(fact);
       fact.setAttribute('onclick', 'getResult(this)')
   }
    numPresidents ++ 
   
}

function getResult(factElement){
const id = parseInt(factElement.id);
if(id === currentPresident.answer){
    factElement.classList.add('correct')
    updateFact('correct')
    // points ++
    console.log(points)
}else{
    factElement.classList.add('wrong')
    factLength = presidentFacts.children.length
    for(let i = 0; i < factLength; i++){
        if(parseInt(presidentFacts.children[i].id) === currentPresident.answer){
            presidentFacts.children[i].classList.add("correct")
        }
    }
    updateFact('wrong')
}
numTrys++
unclickable()

}

function unclickable(){
    
   const factLength = presidentFacts.children.length
    for(let i = 0; i < factLength; i++){
        presidentFacts.children[i].classList.add("already-clicked")
    }
}

function next(){
    if (numPresidents === 2){
     
        finish()
    } else {
        getNewPresident();
    }
}

function correctAnswer(){
     correctFact.innerHTML = ''
    let allPresidents = presidents.length;
    for(let i = 0; i < allPresidents; i++){
        const correct = document.createElement("div");
        correctFact.appendChild(correct)
    }
    points ++
    scores.innerHTML = points
}

function updateFact(mark){
    correctFact.children[numPresidents -1].classList.add(mark)
}

function finish(){
    quiz.classList.add('hide')
    result.classList.remove('hide')
   score()
  
}

function score(){
    points ++
}
 window.onload = function() {
     setAvailablePresidents();
     getNewPresident();
    correctAnswer();
    // score()
 }
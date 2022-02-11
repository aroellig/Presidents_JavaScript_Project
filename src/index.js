const questionNumber = document.querySelector(".question-number")
const presidentName = document.querySelector(".president-name")
const presidentFacts = document.querySelector(".president-facts")
const image = document.querySelector(".image")
const correctFact = document.querySelector('.correct-fact')
const overall = document.querySelector(".overall")
const quiz = document.querySelector(".quiz-box")
const result = document.querySelector(".result")
const intro = document.querySelector(".intro")
const scores = document.querySelector(".score")
const presidentsList = document.querySelector(".presidents-list")
const presName= document.querySelectorAll(".pres-name")
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

function createPresident(num){
    debugger
    const id = num
    const presNames = Array.from(presName)
    currentPresident = presNames[id]
    currentPresident = currentPresident.innerHTML
    console.log(currentPresident)
    let presLen = presidents.length
    for(let i = 0; i < presLen; i++){
        debugger
        if(currentPresident === presidents[i].name){
            let prez = presidents[i]
            presidentName.innerHTML = prez.name;
            image.innerHTML = ''
            if (prez.hasOwnProperty("img")){
                const img = document.createElement("img")
                img.src = prez.img
                image.appendChild(img)
            }
        
            const factsLength = prez.facts.length;
            for(let i = 0; i < factsLength; i++){
                availableFacts.push[i]
            }
        
            presidentFacts.innerHTML = ''
           for(let j = 0; j< factsLength; j++){
        
               const factIndex = availableFacts[Math.floor(Math.random() * availableFacts.length)];
        
               const index2 = availableFacts.indexOf(factIndex);
               availableFacts.splice(index2, 1)
               const fact = document.createElement('div');
               fact.innerHTML = prez.facts[i];
               fact.id = j;
               fact.className = "fact";
               presidentFacts.appendChild(fact);
               fact.setAttribute('onclick', 'getResult(this)')
           }
            numPresidents ++ 
        } 
    }
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
    points ++
   
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
}


function updateFact(mark){
    correctFact.children[numPresidents -1].classList.add(mark)
}

function finish(){
    quiz.classList.add('hide')
    result.classList.remove('hide')
   finalScore()
  
}

function finalScore(){
    result.querySelector(".total-presidents").innerHTML = presidents.length;
    result.querySelector(".total-correct").innerHTML = points;
    result.querySelector(".percent").innerHTML = ((points/presidents.length) * 100).toFixed() + "%"
    result.querySelector(".total-score").innerHTML= points +" / " + presidents.length
}

function tryAgain(){
    result.classList.add('hide')
    quiz.classList.remove('hide')
    reset()
    start()
}

function reset(){
 numPresidents = 0;
 points = 0;
 numTrys = 0;
}


   function start() {
    intro.classList.add('hide')
    quiz.classList.remove('hide')
    presidentsList.classList.remove('hide')
     setAvailablePresidents();
    //  getNewPresident();
    correctAnswer();
//    addPresident();
//    createPresident();
 }
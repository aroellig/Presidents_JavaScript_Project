// const pres = ["George Washington", "John Adams", "Thomas Jefferson", "James Madison", "James Monroe", "John Quincy Adams", "Andrew Jackson", "Martin Van Buren", "William Henry Harrison", "John Tyler", "James Polk", "Zachary Taylor", "Millard Fillmore", "Franklin Pierce", "James Buchanan", "Abraham Lincoln", "Andrew Johnson", "Ulysses Grant", "Rutherford Hayes", "James Garfield", "Chester Arthur", "Grover Celveland", "Benjamin Harrison", "William McKinley", "Theordore Roosevelt", "William Taft", "Woodrow Wilson", "Warren Harding", "Calvin Coolidge", "Herbert Hoover", "Franklin Roosevelt", "Harry Truman", "Dwight Eisenhower", "John Kennedy", "Lyndon Johnson", "Richard Nixon", "Gerald Ford", "Jimmy Carter", "Ronald Reagan", "George H. W. Bush", "Bill Clinton", "George W. Bush", "Barrack Obama", "Donald Trump", "Joe Biden"]

// (function(){
//     const presidentImage = document.querySelector('#president-img')
//     const presidentName = document.querySelector('#president-name')
//     const presidentText = document.querySelector('#president-text')
//     const buttons = document.querySelectorAll('.btn')
//     let index = 0
//     const presidents = []

//     function President(img, name, text) {
//         this.img = img
//         this.name = name
//         this.text = text
//     }


//     function createPresident(img, name, text) {

//         let fullImg = `./presidents/${img}.jpg`
//         let president = new President(fullImg, name, text)

//         presidents.push(president)
//     }

//     createPresident(washington, 'George Washington', 'He is the only US president to have personally led US soldiers into battle while he was serving as the President of the United States')
//     createPresident(adams, 'John Adams', 'He created the United States Marine Band in 1798 which is the oldest professional musical association in the US')
//     createPresident(jefferson, 'Thomas Jefferson', 'He loved to listen to Mocking Birds sing and he kept them as pets')
//     createPresident(madison, 'James Madison', 'While studying at Princeton he stayed for an extra year which makes him the very first postgraduate student in the US')
//     createPresident(monroe, 'James Monroe', 'Monroe was the US president who purchased Florida from the Spanish for five million')
//     createPresident(johnquincyadams, 'John Quincy Adams', 'Every morning he would swim in the Potamac river for exercise')
//     createPresident(jackson, "Andrew Jackson", "He is the only president to have personally thwarted an assination attempt on his life")
//     createPresident(vanburen, "Martin Van Buren", "He was the first US president to have been born in the United States when it was its own country and not a British colony")
//     createPresident(henryharrison, "William Henry Harrison", "He only served as president for one month, after which he died of pneumonia")
//     createPresident(tyler, "John Tyler", "He had fifteen children the most of any president")
//     createPresident(polk, "James Polk", "For two days every week James Polk held office hours in which any citizen could visit him")
//     createPresident(taylor, "Zachary Taylor", "He was unaware that he was nominated as presential candidate until he recieved a letter telling him so")
//     createPresident(fillmore, "Millard Fillmore", "He did not have a vice president while he was president")
//     createPresident(pierce, "Franklin Pierce", "When he was twelve his father made him walk for miles in a thunderstorm")
//     createPresident(buchanan, "James Buchanan", "He is the only president who has never been married")
//     createPresident(lincoln, "Abraham Lincoln", "Was a very accomplished wrestler and only ever lost one out of three hundred matches")
//     createPresident(johnson, "Andrew Johnson", "Was the first president to ever be impeached")
//     createPresident(grant, "Ulysses Grant", "He was a gifted writer and his autobiography is considered to be one of the best ever written by a former president")
//     createPresident(hayes, "Rutherford Hayes", "He and his wife started the tradition of having Easter Egg rolls on the Whitehouse lawn")
//     createPresident(garfield, "James Garfield", "Married one of his students while he was teaching classes at a college")
//     createPresident(arthur, "Chester Arthur", "He was a very skilled fisherman")
//     createPresident(cleveland, "Grover Cleveland", "Is the only US president to have served two non consectutive terms")
//     createPresident(harrison, "Benjamin Harrison", "Was afraid to touch lightbulbs out of fear of electrocution")
//     createPresident(mckinley, "William McKinley", "He was the first president to ever ride in an automobile")
//     createPresident(teddyroosevelt, "Theodore Roosevelt", "He was blinded in one eye while boxing in the Whitehouse")
//     createPresident(taft, "William Taft", "Was the fattest president and once got stuck in the Whitehouse bathtub")
//     createPresident(wilson, "Woodrow Wilson", "Was the first president from the South since the Civil War")
//     createPresident(harding, "Warren Harding", "Ordered desegregation of the Whitehouse and the District of Columbia")
//     createPresident(coolidge, "Calvin Coolidge", "Was known for being a man of very few words")
//     createPresident(hoover, "Herbert Hoover", "Was a self made millionaire from discovering valuable metals all over the globe")
//     createPresident(fdr, "Franklin Roosevelt", "Was a keen stamp collector")
//     createPresident(truman, "Harry Truman", "He did not find out about the nations atomic program until after FDR died and he was sworn in as president")
//     createPresident(Eisenhower, "Dwight Eisenhower", "Despite serving for thirty five years in the army and becoming a general, he never once saw active combat")
//     createPresident(kennedy, "John Kennedy", "Was the first catholic president")
//     createPresident(johnson, "Lyndon Johnson", "His first career was that of a teacher")
//     createPresident(nixon, "Richard Nixon", "His middlename was Milhous")
//     createPresident(ford, "Gerald Ford", "He served as president and vice president despite never being elected to office")
//     createPresident(carter, "Jimmy Carter", "He was the first person in his family to graduate highschool")
//     createPresident(reagan, "Ronald Reagan", "Jellybeans were his favorite snack")
//     createPresident(hwbush, "George H. W. Bush", "He was the youngest pilot in the navy while he served")
//     createPresident(clinton, "Bill Clinton", "He has won two grammy awards")
//     createPresident(Wbush, "George W Bush", "He is the only president with an MBA")
//     createPresident(obama, "Barrack Obama", "His first job was at baskin robbins scooping icrecream")
//     createPresident(trump, "Donald Trump", "He is the only president to have been impeached twice")
//     createPresident(biden, "Joe Biden", "He is the oldest president in us history")
    

 
//     buttons.forEach(function(button){
//         button.addEventListener('click', function(e){
//             if (e.target.parentElement.classList.contains('prevBtn')){
//                if(index === 0){
//                     index = customers.length
//                }
//                index--
//                presidentImage.src = presidents[index].img
//                presidentName.textContent = presidents[index].name
//                presidentText.textContent = presidents[index].text
//             }
//             if (e.target.parentElement.classList.contains('nextBtn')){
//                 index++
//                 if(index === presidents.length){
//                      index = 0
//                 }
//                 presidentImage.src = presidents[index].img
//                 presidentName.textContent = presidents[index].name
//                 presidentText.textContent = presidents[index].text
//              }
//         })
//     })
    
// })()

function check(){
    var c = 0;
    var q1= document.quiz.question1.value;
    var q2= document.quiz.question2.value;
    var q3= document.quiz.question3.value;
    var q4= document.quiz.question4.value;
    var q5= document.quiz.question5.value;
    var q6= document.quiz.question6.value;
    var q7= document.quiz.question7.value;
    var q8= document.quiz.question8.value;
    var q9= document.quiz.question9.value;
    var q10= document.quiz.question10.value;
    var q11= document.quiz.question11.value;
    var q12= document.quiz.question12.value;
    var q13= document.quiz.question13.value;
    var q14= document.quiz.question14.value;
    var q15= document.quiz.question15.value;
    var q16= document.quiz.question16.value;
    var q17= document.quiz.question17.value;
    var q18= document.quiz.question18.value;
    var q19= document.quiz.question19.value;
    var q20= document.quiz.question20.value;
    var q21= document.quiz.question21.value;
    var q22= document.quiz.question22.value;
    var q23= document.quiz.question23.value;
    var q24= document.quiz.question24.value;
    var q25= document.quiz.question25.value;
    var q26= document.quiz.question26.value;
    var q27= document.quiz.question27.value;
    var q28= document.quiz.question28.value;
    var q29= document.quiz.question29.value;
    var q30= document.quiz.question30.value;
    var q31= document.quiz.question31.value;
    var q32= document.quiz.question32.value;
    var q33= document.quiz.question33.value;
    var q34= document.quiz.question34.value;
    var q35= document.quiz.question35.value;
    var q36= document.quiz.question36.value;
    var q37= document.quiz.question37.value;
    var q38= document.quiz.question38.value;
    var q39= document.quiz.question39.value;
    var q40= document.quiz.question40.value;
    var q41= document.quiz.question41.value;
    var q42= document.quiz.question42.value;
    var q43= document.quiz.question43.value;
    var q44= document.quiz.question44.value;
    var q45= document.quiz.question45.value;
    if(q1 === "a"){ c++}
    if(q2 === "b"){ c++}
    if(q3 === "c"){ c++}
    if(q4 === "a"){ c++}
    if(q5 === "c"){ c++}
    if(q6 === "a"){ c++}
    if(q7 === "d"){ c++}
    if(q8 === "b"){ c++}
    if(q9 === "c"){ c++}
    if(q10 === "d"){ c++}
    if(q11 === "a"){ c++}
    if(q12 === "b"){ c++}
    if(q13 === "a"){ c++}
    if(q14 === "c"){ c++}
    if(q15 === "d"){ c++}
    if(q16 === "b"){ c++}
    if(q17 === "a"){ c++}
    if(q18 === "c"){ c++}
    if(q19 === "d"){ c++}
    if(q20 === "a"){ c++}
    if(q21 === "d"){ c++}
    if(q22 === "c"){ c++}
    if(q23 === "b"){ c++}
    if(q24 === "a"){ c++}
    if(q25 === "b"){ c++}
    if(q26 === "c"){ c++}
    if(q27 === "b"){ c++}
    if(q28 === "d"){ c++}
    if(q29 === "c"){ c++}
    if(q30 === "a"){ c++}
    if(q31 === "b"){ c++}
    if(q32 === "a"){ c++}
    if(q33 === "c"){ c++}
    if(q34 === "d"){ c++}
    if(q35 === "b"){ c++}
    if(q36 === "a"){ c++}
    if(q37 === "c"){ c++}
    if(q38 === "b"){ c++}
    if(q39 === "d"){ c++}
    if(q40 === "a"){ c++}
    if(q41 === "b"){ c++}
    if(q42 === "c"){ c++}
    if(q43 === "b"){ c++}
    if(q44 === "a"){ c++}
    if(q45 === "c"){ c++}
    document.write(c)
}
const pres = ["George Washington", "John Adams", "Thomas Jefferson", "James Madison", "James Monroe", "John Quincy Adams", "Andrew Jackson", "Martin Van Buren", "William Henry Harrison", "John Tyler", "James Polk", "Zachary Taylor", "Millard Fillmore", "Franklin Pierce", "James Buchanan", "Abraham Lincoln", "Andrew Johnson", "Ulysses Grant", "Rutherford Hayes", "James Garfield", "Chester Arthur", "Grover Celveland", "Benjamin Harrison", "William McKinley", "Theordore Roosevelt", "William Taft", "Woodrow Wilson", "Warren Harding", "Calvin Coolidge", "Herbert Hoover", "Franklin Roosevelt", "Harry Truman", "Dwight Eisenhower", "John Kennedy", "Lyndon Johnson", "Richard Nixon", "Gerald Ford", "Jimmy Carter", "Ronald Reagan", "George H. W. Bush", "Bill Clinton", "George W. Bush", "Barrack Obama", "Donald Trump", "Joe Biden"]

function filterRow(array) {

    let filterPres = [];

    for (let i = 0; i < pres.length; i++) {
        if (array.includes(pres[i])) {
            filterPres.push(pres[i])
        }
    }
    let filterData = [];

    for (let j = 0; j < filterPres.length; j++) {
        const result = pres.indexOf(filterPres[j]);


        filterData.push(dataresult);
    }

    myChart.data.datasets[0].data = filterData;
    myChart.data.labels = filterPres;
  
    myChart.update();
}

var washingtonBtn = document.querySelector('.Washington-button');
var WashingtonInfo = document.querySelector('.washington-info');
var WashingtonClose = document.querySelector('.washington-close');

WashingtonBtn.addEventListener('click', function(){
    WashingtonInfo.classList.add('washington-info');
});

washingtonClose.addEventListener('click', function(){
    WashingtonInfo.classList.remove('washington-active');
})
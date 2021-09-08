
   'use strict'

   const switcher = document.querySelector('.btn');
   
   switcher.addEventListener('click', function() {
       document.body.classList.toggle('dark-theme')
   
       var className = document.body.className;
       if(className == "light-theme") {
           this.textContent = "Dark";
       }
       else {
        this.textContent = "Light";
       }
   
       console.log('current class name: ' + className);
   
   });

const width = 900;
const height = 600;

 const svg = d3.select('body').append('svg').attr('width', width).attr('height', height);

 d3.json("https://gist.githubusercontent.com/Bradleykingz/3aa5206b6819a3c38b5d73cb814ed470/raw/a476b9098ba0244718b496697c5b350460d32f99/us-states.json")
 .then(data => {

 })

 d3.selectAll("p").style("color", "blue");
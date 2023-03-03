// TODO: add code here
window.addEventListener('load', function() { //1. Add code that runs on the window load event. This is done because we can't interact with the HTML elements until the page loads

    const container = document.getElementById('container');

    fetch('https://handlers.education.launchcode.org/static/astronauts.json').then(function(response) { //2. Make a GET request using fetch to the astronauts API. Do this part inside load event handler.
        response.json().then(function(data) {
            console.log(data); //3. Add each astronaut returned to the web page. 

            data.sort(function(a, b) {
                return a.hoursInSpace < b.hoursInSpace ? 1 : -1; //bonus: compares one to another until sorted, ? is if else with simple argument
            })

            for (let i = 0; i < data.length; i++) { // iterate thru array in fetch url
                let astronaut = data[i]; //declare astronaut as data[index]
                //conatiner.innerHTML adds the astronauts data on site, use template literal
            container.innerHTML += ` 
            <div class = "astronaut">
            <div class = "bio">
            <h3> ${astronaut.firstName} ${astronaut.lastName}</h3>
            <ul>
            <li> Hours in space: ${astronaut.hoursInSpace}</li>
            <li> Active: ${astronaut.active}</li>
            <li> Skills: ${astronaut.skills.join(", ")}</li> 
            <ul>
            </div>
            <img class= "avatar" src = ${astronaut.picture}>
            </div>
            `

            }
        });
    });
});



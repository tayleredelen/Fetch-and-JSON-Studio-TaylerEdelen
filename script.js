// TODO: add code here
window.addEventListener('load', function() { //1. Add code that runs on the window load event. This is done because we can't interact with the HTML elements until the page loads

    const container = document.getElementById('container');

    fetch('https://handlers.education.launchcode.org/static/astronauts.json').then(function(response) { //2. Make a GET request using fetch to the astronauts API. Do this part inside load event handler.
        response.json().then(function(data) {
            console.log(data); //3. Add each astronaut returned to the web page. 

            data.sort(function(a, b) {
                return a.hoursInSpace < b.hoursInSpace ? 1 : -1; //compares one to another until sorted, ? is if else with simple argument
            })

            for (let i = 0; i <data.length; i++) {
                let astronaut = data[i];
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
            <img class= "avatar" src = "images/mae-jemison.jpg">
            </div>
            `


            }
        });
    });
});


let astronaut = [ //Be sure to use the exact HTML including the CSS classes. (starter code contains CSS definitions)


    {
       "id": 1,
       "active": false,
       "firstName": "Mae",
       "lastName": "Jemison",
       "skills": [
             "Physician", "Chemical Engineer"
       ],
       "hoursInSpace": 190,
       "picture": "mae-jemison.jpg"
    },
    {
       "id": 2,
       "active": false,
       "firstName": "Frederick",
       "lastName": "Gregory",
       "skills": [
             "Information Systems", "Shuttle Pilot", "Fighter Pilot", "Helicopter Pilot", "Colonel USAF"
       ],
       "hoursInSpace": 455,
       "picture": "frederick-gregory.jpg"
    },
    {
       "id": 3,
       "active": false,
       "firstName": "Ellen",
       "lastName": "Ochoa",
       "skills": [
             "Physics", "Electrical Engineer"
       ],
       "hoursInSpace": 979,
       "picture": "ellen-ochoa.jpg"
    },
    {
       "id": 4,
       "active": false,
       "firstName": "Guion",
       "lastName": "Bluford",
       "skills": [
             "Aerospace Engineer", "Philosophy", "Physics", "Colonel USAF",
             "Fighter Pilot"
       ],
       "hoursInSpace": 686,
       "picture": "guion-bluford.jpg"
    },
    {
       "id": 5,
       "active": false,
       "firstName": "Sally",
       "lastName": "Ride",
       "skills": [
             "Physicist", "Astrophysics"
       ],
       "hoursInSpace": 343,
       "picture": "sally-ride.jpg"
    },
    {
       "id": 6,
       "active": true,
       "firstName": "Kjell",
       "lastName": "Lindgren",
       "skills": [
             "Physician", "Surgeon", "Emergency Medicine"
       ],
       "hoursInSpace": 15,
       "picture": "kjell-lindgren.jpg"
    },
    {
       "id": 7,
       "active": true,
       "firstName": "Jeanette",
       "lastName": "Epps",
       "skills": [
             "Physicist", "Philosophy", "Aerospace Engineer"
       ],
       "hoursInSpace": 0,
       "picture": "jeanette-epps.jpg"
    }
 ]
//declaring variable states to states
let states = document.getElementById('states');

states.onchange = function(){
    //same thing as bottom 
    console.log('states index:' + states.selectedIndex)
    // selects text with element states in the html and adding it into text
    console.log("states index:" + states.options[states.selectedIndex].text);
    console.log("img/" + states.value + "@2x.jpg");

    document.getElementById("postcard").style.backgroundImage = "url(img/" + states.value + "@2x.jpg)";

// selects text with element states in the html and adding it into text

document.getElementById('state-heading').innerHTML = states.options[states.selectedIndex].text;
}
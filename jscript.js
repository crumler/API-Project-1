let urlName = 'https://pokeapi.co/api/v2/pokemon/?limit=151/';
let urlType = 'https://pokeapi.co/api/v2/type/';
let urlAbility = 'https://pokeapi.co/api/v2/ability/';
let urlCharacter = 'https://pokeapi.co/api/v2/characteristic/';

//DOM Declarations
let dropdown = document.getElementById('dropdown');
let buildName = document.getElementById('name');
let buildType = document.getElementById('type');
let buildAbility = document.getElementById('abilities');
let buildOption = document.createElement('option');


//FETCHING Pokemon Names
function fetchPokemonName() {
    fetch(urlName)
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        //console.log(json);
        makeOptions(json);
        //displayPokeInfo(json);
    })
}

fetchPokemonName();


//Populating Dropdown List for Pokemon Names
function makeOptions(json) {
    let allPokemon = json.results;
    //console.log(allPokemon);
    for(pm of allPokemon) {
        console.log(pm);
            buildOption.innerHTML = pm.name;

            dropdown.options.add(buildOption);

            //let select = document.getElementById('dropdown');
            dropdown.appendChild(buildOption);
    }
}

//Creating Dropdown List via .forEach

// function makeOptions(json) {
//     buildOption.innerHTML = json.results.forEach.name.charAt(0).toUpperCase() + json.results.forEach.name.slice(1);

//     dropdown.options.add(buildOption);

//     let select = document.getElementById('dropdown');
//     select.appendChild(buildOption);
// }


//DISPLAYING Pokemon information for selected Pokemon from Dropdown list
function displayPokeInfo(json) {
    for(var i = 0; i < json.results.length; i++) {
        //console.log(json.results[i].name);
        buildName = json.results[i].name;
        
    }
}

dropdown.addEventListener('change', (displayPokeInfo) => {
    
})
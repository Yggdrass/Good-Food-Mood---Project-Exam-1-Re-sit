
// GETTING 
const queryString = document.location.search;

const params = new URLSearchParams(queryString);


console.log ("usedIngredients.name");




//----------------------------------------------------------------


const key = `2d5e565419664fda92e5022006b19488`; 

const searchButton = document.querySelector(".callApi");
const userInput = searchButton.querySelector(".userInput");

console.log(userInput);
const recipesContainer = document.querySelector(".resultsContainer");


const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${userInput}&apiKey=${key}`; 

const url2 = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2&apiKey=${key}`;

const url3 = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}`; 



async function getData () {
    
    try {

        const response = await fetch(url3);
        const json = await response.json();
        const results = json.results;

        console.log(json);
        console.log(results);

        recipesContainer.innerHTML = "";

        for (let i = 0; i < results.length; i++) {

            console.log(results[i]);    
        
        
            recipesContainer.innerHTML += `<div class="recipeThumbnail">
                                                <h1 class="thumbnailTitle">${results[i].title}</h1>
                                                <img src="${results[i].image}" alt="${results[i]}" class="thumbnailImage"></img>
                                            </div>`;

        
        
        }
    }
        catch (error) {
            console.log(error);
        }
};


getData();


function onSearch(event, parentElement, recipeList) {
    const target = event.target;
    const value = target.value;
}


const filteredListOfRecipes = filterListBasedOnSearch(recipeList, value);

getData(filteredListOfRecipes, recipesContainer);

function filterListBasedOnSearch(recipes, term) {
  recipes.filter(function (recipe) {
    term = term.toLowerCase().trim();

    const valuesToCheck = [usedIngredients.name];

    const matchingValues = valuesToCheck.filter(function (value){
        value = value.toLowerCase().trim();
        return value.includes(term);
    })

    
        return matchingValues.length
    }) 
}



//-----------------------------------------


  // searchButton.addEventListener ("click", getData){};

//      path to the ingredients in each recipe = [i].usedIngredients[i].name

//-----------------------------------------



// results.forEach(function(results) {
//     recipesContainer.innerHTML += `<div class="recipeThumbnail">
//                                     <h1>${results[i].usedIngredients[i].name}</h1>
//                                     <h1>recipe: ${results[i].name}</h1>
//     </div>`
//     })


// searchButton.onClick = function() {

//     const ingredient = input.value


//     searchForRecipe();
//     // 'const searchValue = userInput.value.trim().toLowerCase();
//     // console.log(searchValue);

//     // const filteredResults = results.filter(function(ingredient) {
//     //     if(results.usedIngredients.toLowerCase().startsWith(searchValue)) {
//     //         return true;
//     //     }
//     // })

//     console.log("test");
    
// };




/*
search.onkeyup = function() {

    
    const searchValue = event.target.value.trim().toLowerCase();

    const filteredResults = results.filter(function(ingredient) {
        if(results.usedIngredients.toLowerCase().startsWith(searchValue)) {
            return true;
        }
    })

    console.log(filteredResults)

};


        resultsToRender.forEach(function(results) {
        recipesContainer.innerHTML += `<div class="recipeThumbnail">
                                        <h1>recipe: ${results.name}</h1>
        </div>`
        })



for (let i = 0; i < results.length; i++) {

                console.log(results[i]);    
            
            
                resultsContainer.innerHTML += `<div class="recipeThumbnail">
                                                    <h1 class="thumbnailTitle">${results[i].title}</h1>
                                                    <img src="${results[i].image}" alt="${recipes[i]}" class="thumbnailImage"></img>
                                                </div>`;





form.addEventListener("submit", submitSearch);

*/
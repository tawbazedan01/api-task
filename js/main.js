async function getRecipes(){
    const response = await fetch (`https://forkify-api.herokuapp.com/api/search?q=pizza`);
    const data = await response.json(); 
    const recipes = data.recipes;
    
    const result = recipes.map(function(recipe){
        return `
        <div class="recipe"> 
        <h2> ${recipe.title} </h2>
        <img src ='${recipe.image_url}'/>
        `;
    }).join('');

    document.querySelector(".recipes .row").innerHTML=result;
} 
getRecipes();  
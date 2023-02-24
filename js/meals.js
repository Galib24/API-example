const loadMeals = (searchText) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
  console.log(url)  
  fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))

}
const displayMeals = meals => {
    // console.log(meals)
    // step:1 container element
    const mealContainer = document.getElementById('meals-container');
   mealContainer.innerHTML = '';
    meals.forEach(meal => {
        // console.log(meal)
        // step:2 create child for each element
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        // step:3 set content of the child 
        mealDiv.innerHTML = `
        
        <div class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">instruction: ${meal.strInstructions}</p>
        </div>
      </div>
        
        `;

        // step:4 append child
        mealContainer.appendChild(mealDiv)

    });   
}
const searchMeal = () =>{
const searchText = document.getElementById('search-field').value;
// search meals
console.log(searchText);
loadMeals(searchText)
}

loadMeals('rice')
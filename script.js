
function connect() {

    var searchTerm = document.getElementById("searchBox").value;

    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;

    fetch(url)
    .then(res => res.json())
    .then(data => display(data));

}


function display(data) {

    var oldContent = document.getElementById("displayArea");

    oldContent.textContent = "";

    if (data.meals == null) {

        oldContent.innerHTML = "No meals found!";
        return;

    }

    var totalMeals = data.meals.length;

    if (totalMeals > 5) {
        totalMeals = 5;
    }

    for (var i = 0; i < totalMeals; i++) {

        var newDiv = document.createElement("div");

        newDiv.classList.add("innerStyle");

        newDiv.innerHTML = `
            Meal Title: <b>${data.meals[i].strMeal}</b>
            <br><br>
            <img src="${data.meals[i].strMealThumb}">
            <br>
        `;

        oldContent.appendChild(newDiv);

    }

}

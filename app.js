const ajax = new XMLHttpRequest();
const MEAL_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";
const CONTENT_URL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=id";

const container = document.getElementById("root");
const ul = document.createElement("ul");
const content = document.createElement("div");

ajax.open("GET", MEAL_URL, false);
ajax.send();
const mealList = JSON.parse(ajax.response);

window.addEventListener("hashchange", () => {
  const id = location.hash.substring(1);

  ajax.open("GET", CONTENT_URL.replace("id", id), false);
  ajax.send();

  const mealContent = JSON.parse(ajax.response);

  content.innerHTML = `
    <h1>${mealContent.meals[0].strMeal}</h1>
  `;
});

for (let i = 0; i < 4; i++) {
  const div = document.createElement("li");

  div.innerHTML = `
    <li>
      <a href="#${mealList.meals[i].idMeal}">
        ${mealList.meals[i].strMeal}
      </a>
    </li>
  `;
  ul.appendChild(div.firstElementChild);
}
container.append(ul);
container.append(content);

const ajax = new XMLHttpRequest();
const MEAL_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";
const CONTENT_URL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=@id";

const container = document.getElementById("root");
const ul = document.createElement("ul");

function getData(url) {
  ajax.open("GET", url, false);
  ajax.send();
  return JSON.parse(ajax.response);
}

function mealFeed() {
  const mealFeed = getData(MEAL_URL);
  const mealList = [];

  mealList.push("<ul>");
  for (let i = 0; i < 4; i++) {
    mealList.push(`
    <li>
      <a href="#${mealFeed.meals[i].idMeal}">
        ${mealFeed.meals[i].strMeal}
      </a>
    </li>
  `);
  }
  mealList.push("</ul>");

  container.innerHTML = mealList.join("");
}
function mealDetail() {
  const id = location.hash.substring(1);

  const mealContent = getData(CONTENT_URL.replace("@id", id));

  container.innerHTML = `
    <h4><a href="#">목록으로</a></h4>
    <h1>${mealContent.meals[0].strMeal}</h1>
    <h3>area : ${mealContent.meals[0].strArea}</h3>
    <h3>category${mealContent.meals[0].strCategory}</h3>
    <img src="${mealContent.meals[0].strMealThumb}" />
  `;
}
function router() {
  const routePath = location.hash;
  if (routePath === "") {
    mealFeed();
  } else {
    mealDetail();
  }
}

router();
window.addEventListener("hashchange", router);

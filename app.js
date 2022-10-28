const ajax = new XMLHttpRequest();
const SEARCH_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=b";
const CONTENT_URL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=@id";
const store = {
  currentPage: 1,
};

const container = document.getElementById("root");

function getData(url) {
  ajax.open("GET", url, false);
  ajax.send();
  return JSON.parse(ajax.response);
}

function mealFeed() {
  const mealFeed = getData(SEARCH_URL);
  const mealList = [];

  const curPage = store.currentPage;
  let template = `
    <div class="container">
      <div class="header">
        <h1 class="title">MealDB</h1>
        <div class="page-nav">
          <a href="#/page/{{__prev_page__}}">이전 페이지</a>
          <a href="#/page/{{__next_page__}}">다음 페이지</a>
        </div>
      </div>
      <div class="meal-list">
        {{__meal_feed__}}
      </div>
    </div>
  `;

  for (let i = (curPage - 1) * 10; i < curPage * 10; i++) {
    mealList.push(`
    <div class="meal-content-preview">
      <div class="meal-info-preview">
        <img src="${mealFeed.meals[i].strMealThumb}"/>
        <div class="title">
          <h3>${mealFeed.meals[i].strCategory}</h3>
          <a href="#/show/${mealFeed.meals[i].idMeal}">${mealFeed.meals[i].strMeal}</a>
        </div>
        <div class="link">
          <a href="${mealFeed.meals[i].strYoutube}"><i class="fa-brands fa-youtube"></i>YouTube</a>
          <a href="${mealFeed.meals[i].strSource}"><i class="fa-sharp fa-solid fa-bookmark"></i>Source</a>
        </div>
      </div>
    </div>
  `);
  }
  template = template.replace("{{__meal_feed__}}", mealList.join(""));
  template = template.replace(
    "{{__prev_page__}}",
    curPage > 1 ? curPage - 1 : 1
  );
  template = template.replace(
    "{{__next_page__}}",
    curPage >= mealFeed.meals.length % 10 ? curPage : curPage + 1
  );

  container.innerHTML = template;
}

function mealDetail() {
  const id = location.hash.substring(7);
  const mealContent = getData(CONTENT_URL.replace("@id", id));

  let template = `
  <div class="container">
    <div class="header">
      <h1 class="title">${mealContent.meals[0].strMeal}</h1>
      <div class="page-nav">
        <a href="#/page/${store.currentPage}">목록으로</a>
      </div>
    </div>
    <div class="meal-content">
      <img src="${mealContent.meals[0].strMealThumb}" />
      <div class="meal-info">
        <h1 class="name">${mealContent.meals[0].strMeal}</h1>
        <div class="materials">
          <h2>materials</h2>  
          <ul>
            {{__meal_ingredient__}}
          </ul>
        </div>
        <div class="etc">
          <div class="etc-column">
            <span>Category</span>
            <span>${mealContent.meals[0].strCategory}</span>
          </div>
          <div class="etc-column">
            <span>Area</span>
            <span>${mealContent.meals[0].strArea}</span>
          </div>
          <div class="etc-column">
            <span>Link</span>
            <span><a href="${mealContent.meals[0].strYoutube}"><i class="fa-brands fa-youtube"></i>YouTube</a></span>
          </div>
          <div class="etc-column">
            <span>Source</span>
            <span><a href="${mealContent.meals[0].strSource}"><i class="fa-sharp fa-solid fa-bookmark"></i>Source</a></span>
          </div>
        </div>
        <div class="intruction">${mealContent.meals[0].strInstructions}</div>
      </div>
    </div>
  </div>
  `;

  let i = 1;
  const ingredientList = [];
  while (mealContent.meals[0][`strMeasure${i}`] != " ") {
    ingredientList.push(` 
    <li>
      <div>
        ${mealContent.meals[0][`strIngredient${i}`]}
      </div>
      <div>
        ${mealContent.meals[0][`strMeasure${i}`]}
      </div>
    </li>
    `);
    i++;
  }
  template = template.replace(
    "{{__meal_ingredient__}}",
    ingredientList.join("")
  );
  container.innerHTML = template;
}

function router() {
  const routePath = location.hash;

  if (routePath === "") {
    mealFeed();
  } else if (routePath.indexOf("#/page/") >= 0) {
    store.currentPage = +routePath.substring(7);
    mealFeed();
  } else {
    mealDetail();
  }
}

router();
window.addEventListener("hashchange", router);

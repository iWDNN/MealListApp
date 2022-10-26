const ajax = new XMLHttpRequest();
const MEAL_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=b";
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
  const mealFeed = getData(MEAL_URL);
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
    <div class="meal-content">
      <div class="meal-preview">
        <h2>${mealFeed.meals[i].strMeal}</h2>
        <h3>${mealFeed.meals[i].strCategory}</h3>
      </div>
      <img src="${mealFeed.meals[i].strMealThumb}"/>
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

  container.innerHTML = `
    <h4><a href="#/page/${store.currentPage}">목록으로</a></h4>
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
  } else if (routePath.indexOf("#/page/") >= 0) {
    store.currentPage = +routePath.substring(7);
    mealFeed();
  } else {
    mealDetail();
  }
}

router();
window.addEventListener("hashchange", router);

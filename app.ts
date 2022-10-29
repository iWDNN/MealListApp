interface Store {
  currentPage: number;
}

interface MealList {
  meals: MealDetail[];
}

interface MealDetail {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strYoutube: string;
  strSource: string;
  strIngredient1?: string;
  strIngredient2?: string;
  strIngredient3?: string;
  strIngredient4?: string;
  strIngredient5?: string;
  strIngredient6?: string;
  strIngredient7?: string;
  strIngredient8?: string;
  strIngredient9?: string;
  strIngredient10?: string;
  strIngredient11?: string;
  strIngredient12?: string;
  strIngredient13?: string;
  strIngredient14?: string;
  strIngredient15?: string;
  strIngredient16?: string;
  strIngredient17?: string;
  strIngredient18?: string;
  strIngredient19?: string;
  strIngredient20?: string;
  strMeasure1?: string;
  strMeasure2?: string;
  strMeasure3?: string;
  strMeasure4?: string;
  strMeasure5?: string;
  strMeasure6?: string;
  strMeasure7?: string;
  strMeasure8?: string;
  strMeasure9?: string;
  strMeasure10?: string;
  strMeasure11?: string;
  strMeasure12?: string;
  strMeasure13?: string;
  strMeasure14?: string;
  strMeasure15?: string;
  strMeasure16?: string;
  strMeasure17?: string;
  strMeasure18?: string;
  strMeasure19?: string;
  strMeasure20?: string;
}

const container: HTMLElement | null = document.getElementById("root");
const ajax: XMLHttpRequest = new XMLHttpRequest();
const SEARCH_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=b";
const CONTENT_URL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=@id";
const store: Store = {
  currentPage: 1,
};

function getData<AjaxResponse>(url: string): AjaxResponse {
  ajax.open("GET", url, false);
  ajax.send();
  return JSON.parse(ajax.response);
}

function updateView(html: string): void {
  if (container) {
    container.innerHTML = html;
  } else {
    alert("최상위 컨테이너가 없어 UI를 로드하지 못했습니다.");
  }
}

function mealFeed(): void {
  let mealFeed: MealList = getData<MealList>(SEARCH_URL);
  const mealList = [];
  console.log("hi");

  const curPage = store.currentPage;

  let template = `
    <div class="container">
      <div class="header">
        <h1 class="title">MealDB</h1>
        <div class="page-nav">
          <a href="#/page/{{__prev_page__}}">prev page</a>
          <a href="#/page/{{__next_page__}}">next page</a>
        </div>
      </div>
      <div class="meal-list">
        {{__meal_feed__}}
      </div>
    </div>
  `;

  for (let i = (curPage - 1) * 10; i < curPage * 10; i++) {
    const meals: MealDetail = mealFeed.meals[i];
    mealList.push(`
    <div class="meal-content-preview">
      <div class="meal-info-preview">
        <img src="${meals.strMealThumb}"/>
        <div class="title">
          <h3>${meals.strCategory}</h3>
          <a href="#/show/${meals.idMeal}">${meals.strMeal}</a>
        </div>
        <div class="link">
          <a href="${meals.strYoutube}"><i class="fa-brands fa-youtube"></i>YouTube</a>
          <a href="${meals.strSource}"><i class="fa-sharp fa-solid fa-bookmark"></i>Source</a>
        </div>
      </div>
    </div>
  `);
  }
  template = template.replace("{{__meal_feed__}}", mealList.join(""));
  template = template.replace(
    "{{__prev_page__}}",
    String(curPage > 1 ? curPage - 1 : 1)
  );
  template = template.replace(
    "{{__next_page__}}",
    String(
      curPage >= Math.floor(mealFeed.meals.length / 10) ? curPage : curPage + 1
    )
  );

  updateView(template);
}

function mealDetail(): void {
  const id = location.hash.substring(7);
  const mealFeed: MealList = getData<MealList>(CONTENT_URL.replace("@id", id));

  const meal: MealDetail = mealFeed.meals[0];

  let template = `
  <div class="container">
    <div class="header">
      <h1 class="title">${meal.strMeal}</h1>
      <div class="page-nav">
        <a href="#/page/${store.currentPage}">Home</a>
      </div>
    </div>
    <div class="meal-content">
      <img src="${meal.strMealThumb}" />
      <div class="meal-info">
        <h1 class="name">${meal.strMeal}</h1>
        <div class="materials">
          <h2>materials</h2>  
          <ul>
            {{__meal_ingredient__}}
          </ul>
        </div>
        <div class="etc">
          <div class="etc-column">
            <span>Category</span>
            <span>${meal.strCategory}</span>
          </div>
          <div class="etc-column">
            <span>Area</span>
            <span>${meal.strArea}</span>
          </div>
          <div class="etc-column">
            <span>Link</span>
            <span><a href="${meal.strYoutube}"><i class="fa-brands fa-youtube"></i>YouTube</a></span>
          </div>
          <div class="etc-column">
            <span>Source</span>
            <span><a href="${meal.strSource}"><i class="fa-sharp fa-solid fa-bookmark"></i>Source</a></span>
          </div>
        </div>
        <div class="intruction">${meal.strInstructions}</div>
      </div>
    </div>
  </div>
  `;
  updateView(
    template.replace("{{__meal_ingredient__}}", makeingredients(meal))
  );
}
function makeingredients(meal: MealDetail): string {
  let i = 1;
  const ingredientList = [];

  while (meal[`strMeasure${i}`] != " ") {
    ingredientList.push(` 
    <li>
      <div>
        ${meal[`strIngredient${i}`]}
      </div>
      <div>
        ${meal[`strMeasure${i}`]}
      </div>
    </li>
    `);
    i++;
  }
  return ingredientList.join("");
}

function router(): void {
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

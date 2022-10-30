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

interface RouteInfo {
  path: string;
  page: View;
}
const container: HTMLElement | null = document.getElementById("root");
const ajax: XMLHttpRequest = new XMLHttpRequest();
const SEARCH_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=b";
const CONTENT_URL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=@id";
const store: Store = {
  currentPage: 1,
};

// Class version
// class Api
class Api {
  url: string;
  ajax: XMLHttpRequest;
  constructor(url: string) {
    this.url = url;
    this.ajax = new XMLHttpRequest();
  }
  protected getRequest<AjaxResponse>(): AjaxResponse {
    this.ajax.open("GET", this.url, false);
    this.ajax.send();
    return JSON.parse(this.ajax.response);
  }
}
class MealFeedApi extends Api {
  getData(): MealList {
    return this.getRequest<MealList>();
  }
}
class MealDetailApi extends Api {
  getData(): MealList {
    return this.getRequest<MealList>();
  }
}

// class router
class Router {
  routeTable: RouteInfo[];
  defaultRoute: RouteInfo | null;
  constructor() {
    window.addEventListener("hashchange", this.route.bind(this));
    this.routeTable = [];
    this.defaultRoute = null;
  }
  setDefaultPage(page: View): void {
    this.defaultRoute = { path: "", page };
  }

  addRouterPath(path: string, page: View): void {
    this.routeTable.push({ path, page });
  }

  route() {
    const routePath = location.hash;

    if (routePath === "" && this.defaultRoute) {
      this.defaultRoute.page.render();
    }
    for (const routeInfo of this.routeTable) {
      if (routePath.indexOf(routeInfo.path) >= 0) {
        routeInfo.page.render();
        break;
      }
    }
  }
}

// class View
abstract class View {
  private template: string;
  private renderTemplate: string;
  private container: HTMLElement;
  private htmlList: string[];

  constructor(containerId: string, template: string) {
    const containerElement = document.getElementById(containerId);
    if (!containerElement) {
      throw "최상위 컨테이너가 없어 UI를 진행하지 못합니다";
    }
    this.container = containerElement;
    this.template = template;
    this.renderTemplate = template;
    this.htmlList = [];
  }
  protected updateView(): void {
    // template 갱신
    this.container.innerHTML = this.renderTemplate;
    this.renderTemplate = this.template;
  }
  protected setTemplateData(key: string, value: string): void {
    // template의 마킹된 데이터 갱신
    this.renderTemplate = this.renderTemplate.replace(`{{__${key}__}}`, value);
  }

  protected addHtml(htmlString: string): void {
    // 템플릿을 제외하고 따로 넣을 htmlList 데이터 추가
    this.htmlList.push(htmlString);
  }
  protected getHtml(): string {
    // htmlList 문자열로 변환하여 데이터를 가져옴
    const snapshot = this.htmlList.join("");
    this.clearHtmlList();
    return snapshot;
  }
  protected clearHtmlList(): void {
    // 초기화
    this.htmlList = [];
  }
  abstract render(): void; // 자식클래스들에게 이 메소드를 구현하라는 의미
}
class MealFeedView extends View {
  private api: MealFeedApi;
  private feeds: MealList;
  constructor(containerId: string) {
    let template = `
      <div class="container">
        <div class="header">
          <h1 class="title"><a href="#">MealDB</a></h1>
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
    super(containerId, template);

    this.api = new MealFeedApi(SEARCH_URL);
    this.feeds = this.api.getData();
  }
  render(): void {
    const id = location.hash.substring(7);
    store.currentPage = +location.hash.substring(7) || 1;
    const curPage = store.currentPage;

    for (let i = (curPage - 1) * 10; i < curPage * 10; i++) {
      const {
        strMealThumb,
        strCategory,
        idMeal,
        strMeal,
        strYoutube,
        strSource,
      }: MealDetail = this.feeds.meals[i];
      this.addHtml(`
      <div class="meal-content-preview">
        <div class="meal-info-preview">
          <img src="${strMealThumb}"/>
          <div class="title">
            <h3>${strCategory}</h3>
            <a href="#/show/${idMeal}">${strMeal}</a>
          </div>
          <div class="link">
            <a href="${strYoutube}"><i class="fa-brands fa-youtube"></i>YouTube</a>
            <a href="${strSource}"><i class="fa-sharp fa-solid fa-bookmark"></i>Source</a>
          </div>
        </div>
      </div>
    `);
    }
    this.setTemplateData("meal_feed", this.getHtml());
    this.setTemplateData("prev_page", String(curPage > 1 ? curPage - 1 : 1));
    this.setTemplateData(
      "next_page",
      String(
        curPage >= Math.floor(this.feeds.meals.length / 10)
          ? curPage
          : curPage + 1
      )
    );

    this.updateView();
  }
}
class MealDetailView extends View {
  private api: MealDetailApi;
  private feeds: MealList;
  constructor(containerId: string) {
    let template = `
      <div class="container">
        <div class="header">
          <h1 class="title">{{__strMeal__}}</h1>
          <div class="page-nav">
            <a href="#/page/{{__currentPage__}}">Home</a>
          </div>
        </div>
        <div class="meal-content">
          <img src="{{__strMealThumb__}}" />
          <div class="meal-info">
            <h1 class="name">{{__strMeal__}}</h1>
            <div class="materials">
              <h2>materials</h2>  
              <ul>
                {{__meal_ingredient__}}
              </ul>
            </div>
            <div class="etc">
              <div class="etc-column">
                <span>Category</span>
                <span>{{__strCategory__}}</span>
              </div>
              <div class="etc-column">
                <span>Area</span>
                <span>{{__strArea__}}</span>
              </div>
              <div class="etc-column">
                <span>Link</span>
                <span><a href="{{__strYoutube__}}"><i class="fa-brands fa-youtube"></i>YouTube</a></span>
              </div>
              <div class="etc-column">
                <span>Source</span>
                <span><a href="{{__strSource__}}"><i class="fa-sharp fa-solid fa-bookmark"></i>Source</a></span>
              </div>
            </div>
            <div class="intruction">{{__strInstructions__}}</div>
          </div>
        </div>
      </div>
      `;
    super(containerId, template);
    this.api = new MealFeedApi(CONTENT_URL);
    this.feeds = this.api.getData();
  }
  render(): void {
    const id = location.hash.substring(7);
    const api = new MealDetailApi(CONTENT_URL.replace("@id", id));
    const mealFeed: MealList = api.getData();

    const {
      strMeal,
      strCategory,
      strArea,
      strYoutube,
      strSource,
      strInstructions,
      strMealThumb,
    }: MealDetail = mealFeed.meals[0];

    this.setTemplateData(
      "meal_ingredient",
      this.makeingredients(mealFeed.meals[0])
    );
    this.setTemplateData("currentPage", String(store.currentPage));
    this.setTemplateData("strMeal", strMeal);
    this.setTemplateData("strMealThumb", strMealThumb);
    this.setTemplateData("strMeal", strMeal);
    this.setTemplateData("strCategory", strCategory);
    this.setTemplateData("strArea", strArea);
    this.setTemplateData("strYoutube", strYoutube);
    this.setTemplateData("strSource", strSource);
    this.setTemplateData("strInstructions", strInstructions);

    this.updateView();
  }

  private makeingredients(meal: MealDetail): string {
    let i = 1;

    while (meal[`strMeasure${i}`] != " ") {
      this.addHtml(` 
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
    return this.getHtml();
  }
}

const router: Router = new Router();
const mealFeedView = new MealFeedView("root");
const mealDetailView = new MealDetailView("root");

router.setDefaultPage(mealFeedView);
router.addRouterPath("/page/", mealFeedView);
router.addRouterPath("/show/", mealDetailView);

router.route();

// No Class version
// UI sub
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

// UI update
function mealFeed(): void {
  const api = new MealFeedApi(SEARCH_URL);
  let mealFeed: MealList = api.getData();
  const mealList = [];

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
  const api = new MealDetailApi(CONTENT_URL.replace("@id", id));
  const mealFeed: MealList = api.getData();

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

// function router(): void {
//   const routePath = location.hash;

//   if (routePath === "") {
//     mealFeed();
//   } else if (routePath.indexOf("#/page/") >= 0) {
//     store.currentPage = +routePath.substring(7);
//     mealFeed();
//   } else {
//     mealDetail();
//   }
// }

// router();
// window.addEventListener("hashchange", router);

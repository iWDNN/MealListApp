import { CONTENT_URL } from "../config";
import { MealDetailApi } from "../core/api";
import View from "../core/view";
import { MealDetail, MealList, MealStore } from "../types";

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
export default class MealDetailView extends View {
  private store: MealStore;
  constructor(containerId: string, store: MealStore) {
    super(containerId, template);
    this.store = store;
  }
  async render(): Promise<void> {
    const id = location.hash.substring(7);
    const api = new MealDetailApi(CONTENT_URL.replace("@id", id));
    const data = await api.getData();
    const {
      strMeal,
      strCategory,
      strArea,
      strYoutube,
      strSource,
      strInstructions,
      strMealThumb,
    }: MealDetail = data.meals[0];

    this.setTemplateData(
      "meal_ingredient",
      this.makeingredients(data.meals[0])
    );
    this.setTemplateData("currentPage", String(this.store.currentPage));
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

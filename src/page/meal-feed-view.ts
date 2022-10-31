import { SEARCH_URL } from "../config";
import { MealFeedApi } from "../core/api";
import View from "../core/view";
import Store from "../store";
import { MealDetail, MealList, MealStore } from "../types";

const template = `
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
export default class MealFeedView extends View {
  private api: MealFeedApi;
  private feeds: MealList;
  private store: MealStore;

  constructor(containerId: string, store: MealStore) {
    super(containerId, template);

    this.api = new MealFeedApi(SEARCH_URL);
    this.feeds = this.api.getData();
    this.store = store;
  }
  render(): void {
    this.store.currentPage = +location.hash.substring(7) || 1;
    const curPage = this.store.currentPage;

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
    this.setTemplateData("prev_page", String(this.store.prevPage));
    this.setTemplateData("next_page", String(this.store.nextPage));

    this.updateView();
  }
}

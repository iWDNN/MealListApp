import { SEARCH_URL } from "./config";
import { MealFeedApi } from "./core/api";
import { MealList, MealStore } from "./types";

export default class Store implements MealStore {
  private _currentPage: number;
  private api: MealFeedApi;
  private feeds: MealList;

  constructor() {
    this._currentPage = 1;
    this.api = new MealFeedApi(SEARCH_URL);
    this.feeds = this.api.getData();
  }
  get currentPage() {
    return this._currentPage;
  }
  set currentPage(curPage: number) {
    this._currentPage = curPage;
  }
  get nextPage(): number {
    return this._currentPage >= Math.floor(this.feeds.meals.length / 10)
      ? this._currentPage
      : this._currentPage + 1;
  }
  get prevPage(): number {
    return this._currentPage > 1 ? this._currentPage - 1 : 1;
  }
}

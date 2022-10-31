import { MealDetail, MealList, MealStore } from "./types";

export default class Store implements MealStore {
  private _currentPage: number;
  private _data: MealDetail[];
  constructor() {
    this._data = [];
    this._currentPage = 1;
  }
  get currentPage() {
    return this._currentPage;
  }
  set currentPage(curPage: number) {
    this._currentPage = curPage;
  }
  get prevPage(): number {
    return this._currentPage > 1 ? this._currentPage - 1 : 1;
  }
  get hasData(): boolean {
    return this._data.length > 0;
  }
  getData(position: number): MealDetail {
    return this._data[position];
  }
  setData(data: MealList) {
    this._data = data.meals;
  }

  getNextPage(): number {
    if (this.hasData) {
      return this._currentPage >= Math.floor(this._data.length / 10)
        ? this._currentPage
        : this._currentPage + 1;
    } else {
      return 0;
    }
  }
}

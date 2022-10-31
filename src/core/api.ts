import { MealList } from "../types";

export class Api {
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
export class MealFeedApi extends Api {
  getData(): MealList {
    return this.getRequest<MealList>();
  }
}
export class MealDetailApi extends Api {
  getData(): MealList {
    return this.getRequest<MealList>();
  }
}

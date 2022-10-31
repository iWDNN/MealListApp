import { MealList } from "../types";

export class Api {
  xhr: XMLHttpRequest;
  url: string;
  constructor(url: string) {
    this.xhr = new XMLHttpRequest();
    this.url = url;
  }

  // Promise,fetch(xhr의 보완재로 나온 api)
  protected async request<AjaxResponse>(): Promise<AjaxResponse> {
    const response = await fetch(this.url);
    return (await response.json()) as AjaxResponse;
  }
}

export class MealFeedApi extends Api {
  constructor(url: string) {
    super(url);
  }
  getData(): Promise<MealList> {
    return this.request<MealList>();
  }
}
export class MealDetailApi extends Api {
  constructor(url: string) {
    super(url);
  }
  getData(): Promise<MealList> {
    return this.request<MealList>();
  }
}

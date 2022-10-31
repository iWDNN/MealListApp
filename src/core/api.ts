import { MealList } from "../types";

export class Api {
  xhr: XMLHttpRequest;
  url: string;
  constructor(url: string) {
    this.xhr = new XMLHttpRequest();
    this.url = url;
  }
  // call back,xhr
  protected getRequestWithXHR<AjaxResponse>(
    cb: (data: AjaxResponse) => void
  ): void {
    this.xhr.open("GET", this.url);
    this.xhr.addEventListener("load", () => {
      cb(JSON.parse(this.xhr.response) as AjaxResponse);
    });
    this.xhr.send();
  }

  // Promise,fetch(xhr의 보완재로 나온 api)
  protected getRequestWithPromise<AjaxResponse>(
    cb: (data: AjaxResponse) => void
  ): void {
    fetch(this.url)
      .then((response) => response.json())
      .then(cb)
      .catch(() => {
        console.error("데이터를 불러오지 못했습니다");
      });
  }
}

export class MealFeedApi extends Api {
  constructor(url: string) {
    super(url);
  }
  getDataWithXHR(cb: (data: MealList) => void): void {
    return this.getRequestWithXHR<MealList>(cb);
  }
  getDataWithPromise(cb: (data: MealList) => void): void {
    return this.getRequestWithPromise<MealList>(cb);
  }
}
export class MealDetailApi extends Api {
  constructor(url: string) {
    super(url);
  }
  getDataWithXHR(cb: (data: MealList) => void): void {
    return this.getRequestWithXHR<MealList>(cb);
  }
  getDataWithPromise(cb: (data: MealList) => void): void {
    return this.getRequestWithPromise<MealList>(cb);
  }
}

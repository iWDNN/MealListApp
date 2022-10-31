export default abstract class View {
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

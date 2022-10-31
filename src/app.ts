import Router from "./core/router";
import { MealDetailView, MealFeedView } from "./page";
import Store from "./store";

const store: Store = new Store();
const router: Router = new Router();
const mealFeedView = new MealFeedView("root", store);
const mealDetailView = new MealDetailView("root", store);

router.setDefaultPage(mealFeedView);
router.addRouterPath("/page/", mealFeedView);
router.addRouterPath("/show/", mealDetailView);

router.route();

// typescript로 window에 store라는 속성 추가하는 방법
// const store: Store = {
//   currentPage: 1,
// };
// declare global {
//   interface Window {
//     store: Store;
//   }
// }
// window.store = store;

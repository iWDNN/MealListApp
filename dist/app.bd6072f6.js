parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"TmXv":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){function t(){window.addEventListener("hashchange",this.route.bind(this)),this.routeTable=[],this.defaultRoute=null}return t.prototype.setDefaultPage=function(t){this.defaultRoute={path:"",page:t}},t.prototype.addRouterPath=function(t,e){this.routeTable.push({path:t,page:e})},t.prototype.route=function(){var t=location.hash;""===t&&this.defaultRoute&&this.defaultRoute.page.render();for(var e=0,a=this.routeTable;e<a.length;e++){var o=a[e];if(t.indexOf(o.path)>=0){o.page.render();break}}},t}();exports.default=t;
},{}],"foLc":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CONTENT_URL=exports.SEARCH_URL=void 0,exports.SEARCH_URL="https://www.themealdb.com/api/json/v1/1/search.php?s=b",exports.CONTENT_URL="https://www.themealdb.com/api/json/v1/1/lookup.php?i=@id";
},{}],"W338":[function(require,module,exports) {
"use strict";var t=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),e=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function u(t){try{c(r.next(t))}catch(e){i(e)}}function a(t){try{c(r.throw(t))}catch(e){i(e)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(u,a)}c((r=r.apply(t,e||[])).next())})},n=this&&this.__generator||function(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(a){i=[6,a],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.MealDetailApi=exports.MealFeedApi=exports.Api=void 0;var r=function(){function t(t){this.xhr=new XMLHttpRequest,this.url=t}return t.prototype.request=function(){return e(this,void 0,Promise,function(){return n(this,function(t){switch(t.label){case 0:return[4,fetch(this.url)];case 1:return[4,t.sent().json()];case 2:return[2,t.sent()]}})})},t}();exports.Api=r;var o=function(e){function n(t){return e.call(this,t)||this}return t(n,e),n.prototype.getData=function(){return this.request()},n}(r);exports.MealFeedApi=o;var i=function(e){function n(t){return e.call(this,t)||this}return t(n,e),n.prototype.getData=function(){return this.request()},n}(r);exports.MealDetailApi=i;
},{}],"gqcZ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){function t(t,e){var i=document.getElementById(t);if(!i)throw"최상위 컨테이너가 없어 UI를 진행하지 못합니다";this.container=i,this.template=e,this.renderTemplate=e,this.htmlList=[]}return t.prototype.updateView=function(){this.container.innerHTML=this.renderTemplate,this.renderTemplate=this.template},t.prototype.setTemplateData=function(t,e){this.renderTemplate=this.renderTemplate.replace("{{__".concat(t,"__}}"),e)},t.prototype.addHtml=function(t){this.htmlList.push(t)},t.prototype.getHtml=function(){var t=this.htmlList.join("");return this.clearHtmlList(),t},t.prototype.clearHtmlList=function(){this.htmlList=[]},t}();exports.default=t;
},{}],"LzsR":[function(require,module,exports) {
"use strict";var t=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),e=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(a,s){function i(t){try{c(r.next(t))}catch(e){s(e)}}function o(t){try{c(r.throw(t))}catch(e){s(e)}}function c(t){var e;t.done?a(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(i,o)}c((r=r.apply(t,e||[])).next())})},n=this&&this.__generator||function(t,e){var n,r,a,s,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function o(s){return function(o){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&s[0]?r.return:s[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,s[1])).done)return a;switch(r=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===s[0]||2===s[0])){i=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){i.label=s[1];break}if(6===s[0]&&i.label<a[1]){i.label=a[1],a=s;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(s);break}a[2]&&i.ops.pop(),i.trys.pop();continue}s=e.call(t,i)}catch(o){s=[6,o],r=0}finally{n=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,o])}}},r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0});var a=require("../config"),s=require("../core/api"),i=r(require("../core/view")),o='\n  <div class="container">\n    <div class="header">\n      <h1 class="title">{{__strMeal__}}</h1>\n      <div class="page-nav">\n        <a href="#/page/{{__currentPage__}}">Home</a>\n      </div>\n    </div>\n    <div class="meal-content">\n      <img src="{{__strMealThumb__}}" />\n      <div class="meal-info">\n        <h1 class="name">{{__strMeal__}}</h1>\n        <div class="materials">\n          <h2>materials</h2>  \n          <ul>\n            {{__meal_ingredient__}}\n          </ul>\n        </div>\n        <div class="etc">\n          <div class="etc-column">\n            <span>Category</span>\n            <span>{{__strCategory__}}</span>\n          </div>\n          <div class="etc-column">\n            <span>Area</span>\n            <span>{{__strArea__}}</span>\n          </div>\n          <div class="etc-column">\n            <span>Link</span>\n            <span><a href="{{__strYoutube__}}"><i class="fa-brands fa-youtube"></i>YouTube</a></span>\n          </div>\n          <div class="etc-column">\n            <span>Source</span>\n            <span><a href="{{__strSource__}}"><i class="fa-sharp fa-solid fa-bookmark"></i>Source</a></span>\n          </div>\n        </div>\n        <div class="intruction">{{__strInstructions__}}</div>\n      </div>\n    </div>\n  </div>\n  ',c=function(r){function i(t,e){var n=r.call(this,t,o)||this;return n.store=e,n}return t(i,r),i.prototype.render=function(){return e(this,void 0,Promise,function(){var t,e,r,i,o,c,l,u,p,_;return n(this,function(n){switch(n.label){case 0:return t=location.hash.substring(7),[4,new s.MealDetailApi(a.CONTENT_URL.replace("@id",t)).getData()];case 1:return e=n.sent(),r=e.meals[0],i=r.strMeal,o=r.strCategory,c=r.strArea,l=r.strYoutube,u=r.strSource,p=r.strInstructions,_=r.strMealThumb,this.setTemplateData("meal_ingredient",this.makeingredients(e.meals[0])),this.setTemplateData("currentPage",String(this.store.currentPage)),this.setTemplateData("strMeal",i),this.setTemplateData("strMealThumb",_),this.setTemplateData("strMeal",i),this.setTemplateData("strCategory",o),this.setTemplateData("strArea",c),this.setTemplateData("strYoutube",l),this.setTemplateData("strSource",u),this.setTemplateData("strInstructions",p),this.updateView(),[2]}})})},i.prototype.makeingredients=function(t){for(var e=1;" "!=t["strMeasure".concat(e)];)this.addHtml(" \n      <li>\n        <div>\n          ".concat(t["strIngredient".concat(e)],"\n        </div>\n        <div>\n          ").concat(t["strMeasure".concat(e)],"\n        </div>\n      </li>\n      ")),e++;return this.getHtml()},i}(i.default);exports.default=c;
},{"../config":"foLc","../core/api":"W338","../core/view":"gqcZ"}],"dOgJ":[function(require,module,exports) {
"use strict";var e=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),t=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(a,i){function o(e){try{c(r.next(e))}catch(t){i(t)}}function s(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(o,s)}c((r=r.apply(e,t||[])).next())})},n=this&&this.__generator||function(e,t){var n,r,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,r=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(a=(a=o.trys).length>0&&a[a.length-1])&&(6===i[0]||2===i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(s){i=[6,s],r=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var a=require("../config"),i=require("../core/api"),o=r(require("../core/view")),s='\n  <div class="container">\n    <div class="header">\n      <h1 class="title"><a href="#">MealDB</a></h1>\n      <div class="page-nav">\n        <a href="#/page/{{__prev_page__}}">prev page</a>\n        <a href="#/page/{{__next_page__}}">next page</a>\n      </div>\n    </div>\n    <div class="meal-list">\n      {{__meal_feed__}}\n    </div>\n  </div>\n',c=function(r){function o(e,t){var n=r.call(this,e,s)||this;return n.api=new i.MealFeedApi(a.SEARCH_URL),n.store=t,n}return e(o,r),o.prototype.render=function(){return t(this,void 0,Promise,function(){var e,t,r,a,i,o,s,c,l,u,f;return n(this,function(n){switch(n.label){case 0:return this.store.currentPage=+location.hash.substring(7)||1,this.store.hasData?[3,2]:(t=(e=this.store).setData,[4,this.api.getData()]);case 1:t.apply(e,[n.sent()]),n.label=2;case 2:for(r=this.store.currentPage,a=10*(r-1);a<10*r;a++)i=this.store.getData(a),o=i.idMeal,s=i.strMeal,c=i.strYoutube,l=i.strSource,u=i.strMealThumb,f=i.strCategory,this.addHtml('\n        <div class="meal-content-preview">\n          <div class="meal-info-preview">\n            <img src="'.concat(u,'"/>\n            <div class="title">\n              <h3>').concat(f,'</h3>\n              <a href="#/show/').concat(o,'">').concat(s,'</a>\n            </div>\n            <div class="link">\n              <a href="').concat(c,'"><i class="fa-brands fa-youtube"></i>YouTube</a>\n              <a href="').concat(l,'"><i class="fa-sharp fa-solid fa-bookmark"></i>Source</a>\n            </div>\n          </div>\n        </div>\n      '));return this.setTemplateData("meal_feed",this.getHtml()),this.setTemplateData("prev_page",String(this.store.prevPage)),this.setTemplateData("next_page",String(this.store.getNextPage())),this.updateView(),[2]}})})},o}(o.default);exports.default=c;
},{"../config":"foLc","../core/api":"W338","../core/view":"gqcZ"}],"L3oC":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.MealFeedView=exports.MealDetailView=void 0;var t=require("./meal-detail-view");Object.defineProperty(exports,"MealDetailView",{enumerable:!0,get:function(){return e(t).default}});var r=require("./meal-feed-view");Object.defineProperty(exports,"MealFeedView",{enumerable:!0,get:function(){return e(r).default}});
},{"./meal-detail-view":"LzsR","./meal-feed-view":"dOgJ"}],"z7jk":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){function t(){this._data=[],this._currentPage=1}return Object.defineProperty(t.prototype,"currentPage",{get:function(){return this._currentPage},set:function(t){this._currentPage=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"prevPage",{get:function(){return this._currentPage>1?this._currentPage-1:1},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"hasData",{get:function(){return this._data.length>0},enumerable:!1,configurable:!0}),t.prototype.getData=function(t){return this._data[t]},t.prototype.setData=function(t){this._data=t.meals},t.prototype.getNextPage=function(){return this.hasData?this._currentPage>=Math.floor(this._data.length/10)?this._currentPage:this._currentPage+1:0},t}();exports.default=t;
},{}],"YSF2":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("./core/router")),r=require("./page"),a=e(require("./store")),u=new a.default,o=new t.default,i=new r.MealFeedView("root",u),d=new r.MealDetailView("root",u);o.setDefaultPage(i),o.addRouterPath("/page/",i),o.addRouterPath("/show/",d),o.route();
},{"./core/router":"TmXv","./page":"L3oC","./store":"z7jk"}]},{},["YSF2"], null)
//# sourceMappingURL=/app.bd6072f6.js.map
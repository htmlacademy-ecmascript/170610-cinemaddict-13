/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",f="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,c=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=d;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else{var i=t.name;M[i]=t,r=i}return!n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=D(t.locale,null,!0),this.parse(t)}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return g},$.isValid=function(){return!("Invalid Date"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+"Hours",0);case r:return l(D+"Minutes",1);case n:return l(D+"Seconds",2);case e:return l(D+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d="set"+(this.$u?"UTC":""),$=(h={},h[i]=d+"Date",h[f]=d+"Date",h[u]=d+"Month",h[o]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),v.extend=function(t,e){return t(e,S,v),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v.p={},v});


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_profile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/profile.js */ "./src/view/profile.js");
/* harmony import */ var _view_main_navigation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/main-navigation.js */ "./src/view/main-navigation.js");
/* harmony import */ var _view_sort_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/sort.js */ "./src/view/sort.js");
/* harmony import */ var _view_films_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/films.js */ "./src/view/films.js");
/* harmony import */ var _view_film_card_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/film-card.js */ "./src/view/film-card.js");
/* harmony import */ var _view_show_more_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/show-more-button.js */ "./src/view/show-more-button.js");
/* harmony import */ var _view_footer_statistics_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/footer-statistics.js */ "./src/view/footer-statistics.js");
/* harmony import */ var _view_film_details_popup_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/film-details-popup.js */ "./src/view/film-details-popup.js");
/* harmony import */ var _view_comment_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/comment.js */ "./src/view/comment.js");
/* harmony import */ var _mock_utils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mock/utils.js */ "./src/mock/utils.js");
/* harmony import */ var _mock_film_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mock/film.js */ "./src/mock/film.js");
/* harmony import */ var _mock_comment_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mock/comment.js */ "./src/mock/comment.js");














const FILMS_CARDS_COUNT = 5;
const FILMS_CARDS_EXTRA_COUNT = 2;
const MAX_MOCK_FILMS_COUNT = 14;

const Key = {
  ESC: `Escape`,
};

const films = new Array(MAX_MOCK_FILMS_COUNT).fill(0).map(_mock_film_js__WEBPACK_IMPORTED_MODULE_10__["generateFilm"]);

/* Удали нарисованные фильмы */

const clearRenderedFilms = () => {
  while (filmListContainerElement.firstChild) {
    filmListContainerElement.removeChild(filmListContainerElement.lastChild);
  }
};

const siteBodyElement = document.querySelector(`body`);
const siteHeaderElement = siteBodyElement.querySelector(`.header`);
const siteMainElement = siteBodyElement.querySelector(`.main`);

Object(_mock_utils_js__WEBPACK_IMPORTED_MODULE_9__["render"])(siteHeaderElement, new _view_profile_js__WEBPACK_IMPORTED_MODULE_0__["default"]().getElement(), _mock_utils_js__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);
Object(_mock_utils_js__WEBPACK_IMPORTED_MODULE_9__["render"])(siteMainElement, new _view_main_navigation_js__WEBPACK_IMPORTED_MODULE_1__["default"]().getElement(), _mock_utils_js__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].AFTERBEGIN);

/* Watchlist */

const watchlistFilms = films.filter((item) => {
  return item.isWatchlist === true;
});

const watchlistElement = siteMainElement.querySelector(`a[href="#watchlist"]`);
watchlistElement.children[0].textContent = `${watchlistFilms.length}`;

const onWatchlistElementClick = () => {
  clearRenderedFilms();
  filmsRenderCount = FILMS_CARDS_COUNT;
  showMoreButton.classList.remove(`visually-hidden`);
  renderStartFilmsCards(watchlistFilms);
};

watchlistElement.addEventListener(`click`, onWatchlistElementClick);

/* History */

const watchedFilms = films.filter((item) => {
  return item.isWatched === true;
});

const historyElement = siteMainElement.querySelector(`a[href="#history"]`);
historyElement.children[0].textContent = `${watchedFilms.length}`;

const onHistoryElementClick = () => {
  clearRenderedFilms();
  filmsRenderCount = FILMS_CARDS_COUNT;
  showMoreButton.classList.remove(`visually-hidden`);
  renderStartFilmsCards(watchedFilms);
};

historyElement.addEventListener(`click`, onHistoryElementClick);

/* Favorites */

const favoritesFilms = films.filter((item) => {
  return item.isFavorite === true;
});

const favoritesElement = siteMainElement.querySelector(`a[href="#favorites"]`);
favoritesElement.children[0].textContent = `${favoritesFilms.length}`;

const onFavoritesElementClick = () => {
  clearRenderedFilms();
  filmsRenderCount = FILMS_CARDS_COUNT;
  showMoreButton.classList.remove(`visually-hidden`);
  renderStartFilmsCards(favoritesFilms);
};

favoritesElement.addEventListener(`click`, onFavoritesElementClick);

/* Конец фильтров */

Object(_mock_utils_js__WEBPACK_IMPORTED_MODULE_9__["render"])(siteMainElement, new _view_sort_js__WEBPACK_IMPORTED_MODULE_2__["default"]().getElement(), _mock_utils_js__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);

const sortMenuItems = siteMainElement.querySelectorAll(`.sort__button`);

Object(_mock_utils_js__WEBPACK_IMPORTED_MODULE_9__["render"])(siteMainElement, new _view_films_js__WEBPACK_IMPORTED_MODULE_3__["default"]().getElement(), _mock_utils_js__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);

const filmsElement = document.querySelector(`.films`);
const filmsListElement = filmsElement.querySelector(`.films-list`);

const filmListContainerElement = filmsListElement.querySelector(`.films-list__container`);

Object(_mock_utils_js__WEBPACK_IMPORTED_MODULE_9__["render"])(filmsListElement, new _view_show_more_button_js__WEBPACK_IMPORTED_MODULE_5__["default"]().getElement(), _mock_utils_js__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);
const showMoreButton = filmsListElement.querySelector(`.films-list__show-more`);

/* Нарисуй фильм и попап */

const renderFilm = (filmElement, film) => {
  const filmComponent = new _view_film_card_js__WEBPACK_IMPORTED_MODULE_4__["default"](film);
  const filmPopupComponent = new _view_film_details_popup_js__WEBPACK_IMPORTED_MODULE_7__["default"](film);

  Object(_mock_utils_js__WEBPACK_IMPORTED_MODULE_9__["render"])(filmElement, filmComponent.getElement(), _mock_utils_js__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);

  const showPopupComponent = () => {
    siteMainElement.appendChild(filmPopupComponent.getElement());
    siteBodyElement.classList.add(`hide-overflow`);

    const commentsListComponent = filmPopupComponent.getElement().querySelector(`.film-details__comments-list`);
    const commentsCountComponent = filmPopupComponent.getElement().querySelector(`.film-details__comments-count`);

    const commentsCount = film.comments;
    const comments = new Array(commentsCount).fill(0).map(_mock_comment_js__WEBPACK_IMPORTED_MODULE_11__["generateComment"]);

    for (let i = 0; i < comments.length; i++) {
      Object(_mock_utils_js__WEBPACK_IMPORTED_MODULE_9__["render"])(commentsListComponent, new _view_comment_js__WEBPACK_IMPORTED_MODULE_8__["default"](comments[i]).getElement(), _mock_utils_js__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].AFTERBEGIN);
    }

    commentsCountComponent.textContent = `${commentsCount}`;
  };

  const closePopupComponent = () => {
    siteMainElement.removeChild(filmPopupComponent.getElement());
    siteBodyElement.classList.remove(`hide-overflow`);
  };

  const onFilmDetailsPopupKeydown = (event) => {
    if (event.code === Key.ESC) {
      event.preventDefault();
      closePopupComponent();
      siteBodyElement.classList.remove(`hide-overflow`);
    }
    document.removeEventListener(`keydown`, onFilmDetailsPopupKeydown);
  };

  filmComponent.getElement().querySelector(`.film-card__poster`).addEventListener(`click`, () => {
    showPopupComponent();
    document.addEventListener(`keydown`, onFilmDetailsPopupKeydown);
  });

  filmComponent.getElement().querySelector(`.film-card__title`).addEventListener(`click`, () => {
    showPopupComponent();
    document.addEventListener(`keydown`, onFilmDetailsPopupKeydown);
  });

  filmComponent.getElement().querySelector(`.film-card__comments`).addEventListener(`click`, () => {
    showPopupComponent();
    document.addEventListener(`keydown`, onFilmDetailsPopupKeydown);
  });

  filmPopupComponent.getElement().querySelector(`.film-details__close-btn`).addEventListener(`click`, (evt) => {
    evt.preventDefault();
    closePopupComponent();
  });
};

/* Порции фильмов */

let filmsRenderCount = FILMS_CARDS_COUNT;
let delta = MAX_MOCK_FILMS_COUNT - filmsRenderCount;

const renderStartFilmsCards = (array) => {
  if (array.length <= FILMS_CARDS_COUNT) {
    for (let i = 0; i < array.length; i++) {
      renderFilm(filmListContainerElement, array[i]);
    }
    showMoreButton.classList.add(`visually-hidden`);
  } else {
    for (let i = 0; i < filmsRenderCount; i++) {
      renderFilm(filmListContainerElement, array[i]);
    }
  }
};

renderStartFilmsCards(films);

const showFilmsPortions = (array) => {
  delta = array.length - filmsRenderCount;

  if (delta >= FILMS_CARDS_COUNT) {
    filmsRenderCount += FILMS_CARDS_COUNT;

    for (let i = 0; i < filmsRenderCount; i++) {
      renderFilm(filmListContainerElement, array[i]);
    }
  } else if (delta <= FILMS_CARDS_COUNT) {
    filmsRenderCount = MAX_MOCK_FILMS_COUNT;
    for (let i = 0; i < filmsRenderCount; i++) {
      renderFilm(filmListContainerElement, array[i]);
    }
    showMoreButton.classList.add(`visually-hidden`);
    showMoreButton.removeEventListener(`click`, onShowMoreButtonClick);
  }
};

/* Кнопка Show more */

const onShowMoreButtonClick = (e) => {
  e.preventDefault();
  clearRenderedFilms();
  showFilmsPortions(films);
};
showMoreButton.addEventListener(`click`, onShowMoreButtonClick);

/* Сортировки */

const onSortMenuItemClick = (e) => {
  e.preventDefault();
  Object(_mock_utils_js__WEBPACK_IMPORTED_MODULE_9__["removeActiveClass"])(sortMenuItems, `sort__button--active`);
  e.target.classList.toggle(`sort__button--active`);
  showMoreButton.classList.remove(`visually-hidden`);
  showMoreButton.addEventListener(`click`, onShowMoreButtonClick);

  switch (e.target.textContent) {
    case `Sort by default`:
      clearRenderedFilms();
      filmsRenderCount = FILMS_CARDS_COUNT;
      films.sort(Object(_mock_utils_js__WEBPACK_IMPORTED_MODULE_9__["sortByFieldAscending"])(`uid`));

      renderStartFilmsCards(films);

      break;
    case `Sort by date`:
      clearRenderedFilms();
      filmsRenderCount = FILMS_CARDS_COUNT;
      films.sort(Object(_mock_utils_js__WEBPACK_IMPORTED_MODULE_9__["sortByFieldDescending"])(`date`));

      renderStartFilmsCards(films);

      break;
    case `Sort by rating`:
      clearRenderedFilms();
      filmsRenderCount = FILMS_CARDS_COUNT;
      films.sort(Object(_mock_utils_js__WEBPACK_IMPORTED_MODULE_9__["sortByFieldDescending"])(`rating`));

      renderStartFilmsCards(films);

      break;
    default:
      break;
  }
};

sortMenuItems.forEach((item) => {
  item.addEventListener(`click`, onSortMenuItemClick);
});

/* Экстра */
const filmsListExtraElements = filmsElement.querySelectorAll(`.films-list--extra`);

const extraFilms = films.slice();

const topRatedFilms = extraFilms.sort(Object(_mock_utils_js__WEBPACK_IMPORTED_MODULE_9__["sortByFieldDescending"])(`rating`)).slice(0, FILMS_CARDS_EXTRA_COUNT);
const mostCommentedFilms = extraFilms.sort(Object(_mock_utils_js__WEBPACK_IMPORTED_MODULE_9__["sortByFieldDescending"])(`comments`)).slice(0, FILMS_CARDS_EXTRA_COUNT);

filmsListExtraElements.forEach((element, i) => {
  const filmsListExtraContainerElement = element.querySelector(`.films-list__container`);

  if (i === 0) {
    for (let x = 0; x < FILMS_CARDS_EXTRA_COUNT; x++) {
      renderFilm(filmsListExtraContainerElement, topRatedFilms[x]);
    }
  } else {
    for (let x = 0; x < FILMS_CARDS_EXTRA_COUNT; x++) {
      renderFilm(filmsListExtraContainerElement, mostCommentedFilms[x]);
    }
  }
});

const footerElement = siteBodyElement.querySelector(`.footer`);
const footerStatisticsElement = footerElement.querySelector(`.footer__statistics`);
Object(_mock_utils_js__WEBPACK_IMPORTED_MODULE_9__["render"])(footerStatisticsElement, new _view_footer_statistics_js__WEBPACK_IMPORTED_MODULE_6__["default"](films.length).getElement(), _mock_utils_js__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);


/***/ }),

/***/ "./src/mock/comment.js":
/*!*****************************!*\
  !*** ./src/mock/comment.js ***!
  \*****************************/
/*! exports provided: generateComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateComment", function() { return generateComment; });
/* harmony import */ var _film_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./film.js */ "./src/mock/film.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/mock/utils.js");



const generateEmotion = () => {
  const textEmotions = `smile.png; sleeping.png; puke.png; angry.png `;
  const emotions = textEmotions.split(`; `);
  const emotion = emotions[Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomIndex"])(emotions)];
  return emotion;
};

const generateComment = () => {
  return {
    date: Object(_film_js__WEBPACK_IMPORTED_MODULE_0__["generateDate"])(`YYYY/MM/DD HH:mm`),
    author: Object(_film_js__WEBPACK_IMPORTED_MODULE_0__["generateName"])(1),
    message: Object(_film_js__WEBPACK_IMPORTED_MODULE_0__["generateDescription"])(),
    emotion: generateEmotion(),
  };
};


/***/ }),

/***/ "./src/mock/film.js":
/*!**************************!*\
  !*** ./src/mock/film.js ***!
  \**************************/
/*! exports provided: generateDate, generateDescription, generateName, generateFilm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDate", function() { return generateDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDescription", function() { return generateDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateName", function() { return generateName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilm", function() { return generateFilm; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/mock/utils.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);



const MAX_RATING = 10;
const MIN_RANDOM_HOUR = 1;
const MAX_RANDOM_HOUR = 3;
const MIN_RANDOM_MINUTE = 1;
const MAX_RANDOM_MINUTE = 59;
const MIN_RANDOM_SENTENCES = 1;
const MAX_RANDOM_SENTENCES = 5;
const MAX_COMMENTS = 5;
const MAX_GENRES = 3;

const generateTitle = () => {
  const titles = [
    {
      original: `The Shawshank Redemption`,
      translation: `Побег из Шоушенка`,
    },
    {
      original: `The Godfather`,
      translation: `Крёстный отец`,
    },
    {
      original: `The Dark Knight`,
      translation: `Тёмный рыцарь`,
    },
    {
      original: `12 Angry Men`,
      translation: `12 разгневанных мужчин`,
    },
    {
      original: `Schindler's List`,
      translation: `Список Шиндлера`,
    },
    {
      original: `Pulp Fiction`,
      translation: `Криминальное чтиво`,
    },
    {
      original: `Il buono, il brutto, il cattivo`,
      translation: `Хороший, плохой, злой`,
    },
    {
      original: `Fight Club`,
      translation: `Бойцовский клуб`,
    },
    {
      original: `Forrest Gump`,
      translation: `Форрест Гамп`,
    },
    {
      original: `Inception`,
      translation: `Начало`,
    },
    {
      original: `The Matrix`,
      translation: `Матрица`,
    },
    {
      original: `The Nice Guys`,
      translation: `Славные парни`,
    },
    {
      original: `One Flew Over the Cuckoo's Nest`,
      translation: `Пролетая над гнездом кукушки`,
    },
    {
      original: `Shichinin no samurai`,
      translation: `Семь самураев`,
    },
    {
      original: `La vita è bella`,
      translation: `Жизнь прекрасна`,
    },
    {
      original: `The Silence of the Lambs`,
      translation: `Молчание ягнят`,
    },
    {
      original: `It's a Wonderful Life`,
      translation: `Эта прекрасная жизнь`,
    },
    {
      original: `Interstellar`,
      translation: `Интерстеллар`,
    },
    {
      original: `Léon`,
      translation: `Леон`,
    },
    {
      original: `City Lights`,
      translation: `Огни большого города`,
    },
  ];
  const title = titles[Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomIndex"])(titles)];
  return title;
};

const generateRating = () => {
  const rating = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandom"])(MAX_RATING).toFixed(1);
  return rating;
};

const generateDate = (format) => {
  const maxDayGap = 3600;
  const daysGap = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(-maxDayGap);
  const date = dayjs__WEBPACK_IMPORTED_MODULE_1___default()().add(daysGap, `day`).toDate();
  return dayjs__WEBPACK_IMPORTED_MODULE_1___default()(date).format(format);
};

const generateDuration = () => {
  const duration = {
    hour: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(MIN_RANDOM_HOUR, MAX_RANDOM_HOUR),
    minute: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(MIN_RANDOM_MINUTE, MAX_RANDOM_MINUTE),
  };

  return duration;
};

const generateGenre = () => {
  const genres = [
    {
      title: `Аниме`,
    },
    {
      title: `Биографии`,
    },
    {
      title: `Боевики`,
    },
    {
      title: `Вестерны`,
    },
    {
      title: `Военные`,
    },
    {
      title: `Детективы`,
    },
    {
      title: `Детские`,
    },
    {
      title: `Документальные`,
    },
    {
      title: `Драмы`,
    },
    {
      title: `Игры`,
    },
    {
      title: `Исторические`,
    },
    {
      title: `Комедии`,
    },
    {
      title: `Концерты`,
    },
    {
      title: `Короткометражки`,
    },
    {
      title: `Криминал`,
    },
    {
      title: `Мелодрамы`,
    },
    {
      title: `Музыкальные`,
    },
    {
      title: `Мультфильмы`,
    },
    {
      title: `Новости`,
    },
    {
      title: `Приключения`,
    },
    {
      title: `Реальное ТВ`,
    },
    {
      title: `Семейные`,
    },
    {
      title: `Спортивные`,
    },
    {
      title: `Ток-шоу`,
    },
    {
      title: `Триллеры`,
    },
    {
      title: `Ужасы`,
    },
    {
      title: `Фантастика`,
    },
    {
      title: `Фильмы-нуар`,
    },
    {
      title: `Фэнтези`,
    },
    {
      title: `Церемонии`,
    },
  ];
  const genre = genres[Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomIndex"])(genres)];
  return genre;
};

const generatePoster = () => {
  const textPosters = `made-for-each-other.png; popeye-meets-sinbad.png; sagebrush-trail.jpg; santa-claus-conquers-the-martians.jpg; the-dance-of-life.jpg; the-great-flamarion.jpg; the-man-with-the-golden-arm.jpg`;
  const posters = textPosters.split(`; `);
  const poster = posters[Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomIndex"])(posters)];
  return poster;
};

const generateDescription = () => {
  const textDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus`;
  const descriptions = textDescription.split(`. `);
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__["shuffleArray"])(descriptions);
  const description = descriptions.slice(0, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(MIN_RANDOM_SENTENCES, MAX_RANDOM_SENTENCES));
  return description.join(`. `);
};

const generateComments = () => {
  const comments = new Array(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, MAX_COMMENTS));
  return comments.length;
};

const generateName = (count) => {
  const textNames = `Éabha Leonard; Erika Calixtus; Timur Medea; Anne Lennox; Freek Irit; Isac Ambrosius; Col Hulderic; Mehmud Mohandas; Edith Yash; Dario Dianna; Sophokles Everette; Kreios Indy; Hannah Stanko; Nalini Satisha; Alfreda Avanti; Katherine Claudius; Burkhard Louise; Ludolf Kadri; Nilda Alessia; Evgenios Aníbal; Edita Aderyn; Carol Sylvain; Ianthe Dragutin; Cáel Chibueze; Roderick Aelius; Om Thalia; Glukel Jon; Terpsichore Dani; Binyamin Josie; Zakiah Mette; Marthe Ilsa; Yeriyahu Ezechiel; Lenka Robert; Theodorus Feliciana; Abdullaahi Seanán`;
  const mockNames = textNames.split(`; `);
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__["shuffleArray"])(mockNames);
  const names = mockNames.slice(0, count);
  return names.join(`, `);
};

const generateCountry = () => {
  const textCountries = `Russia; Rwanda; Saint Kitts and Nevis; Saint Lucia; Saint Vincent and the Grenadines; Samoa; San Marino; Sao Tome and Principe; Saudi Arabia; Senegal; Serbia; Seychelles; Sierra Leone; Singapore; Slovakia; Slovenia; USA; Syria; Tajikistan; Tanzania; Thailand; Timor-Leste; Togo; Tonga; Trinidad and Tobago; Tunisia; Turkey; Turkmenistan; Tuvalu; Uganda; Ukraine`;
  const mockCountries = textCountries.split(`; `);
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__["shuffleArray"])(mockCountries);
  const country = mockCountries.slice(0, 1);
  return country;
};

const generateAgeRating = () => {
  const textAgeRating = `0+; 6+; 12+; 16+; 18+`;
  const mockAgeRating = textAgeRating.split(`; `);
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__["shuffleArray"])(mockAgeRating);
  const ageRating = mockAgeRating.slice(0, 1);
  return ageRating;
};

const generateRandomBoolean = (ratio) => {
  const randomBoolean = Math.random() < ratio;
  return randomBoolean;
};

let count = 0;

const generateUid = () => {
  count++;
  return count;
};

const generateFilm = () => {
  return {
    uid: generateUid(),
    title: generateTitle(),
    rating: generateRating(),
    date: generateDate(`YYYY`),
    duration: generateDuration(),
    genre: new Array(MAX_GENRES).fill(0).map(generateGenre),
    poster: generatePoster(),
    description: generateDescription(),
    comments: generateComments(),
    director: generateName(1),
    writers: generateName(3),
    actors: generateName(4),
    country: generateCountry(),
    ageRating: generateAgeRating(),
    isWatched: generateRandomBoolean(0.5),
    isWatchlist: generateRandomBoolean(0.3),
    isFavorite: generateRandomBoolean(0.2),
  };
};


/***/ }),

/***/ "./src/mock/utils.js":
/*!***************************!*\
  !*** ./src/mock/utils.js ***!
  \***************************/
/*! exports provided: RenderPosition, render, createElement, getRandomInteger, getRandom, shuffleArray, getRandomIndex, sortByFieldAscending, sortByFieldDescending, removeActiveClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPosition", function() { return RenderPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInteger", function() { return getRandomInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandom", function() { return getRandom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shuffleArray", function() { return shuffleArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomIndex", function() { return getRandomIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByFieldAscending", function() { return sortByFieldAscending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByFieldDescending", function() { return sortByFieldDescending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeActiveClass", function() { return removeActiveClass; });
const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
};

const render = (container, element, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
  }
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandom = (a = 1, b = 0) => {
  const lower = Math.min(a, b);
  const upper = Math.max(a, b);

  return lower + Math.random() * (upper - lower);
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const getRandomIndex = (array) => {
  return getRandomInteger(0, array.length - 1);
};

const sortByFieldAscending = (field) => {
  return (a, b) => a[field] > b[field] ? 1 : -1;
};

const sortByFieldDescending = (field) => {
  return (a, b) => a[field] > b[field] ? -1 : 1;
};

const removeActiveClass = (array, className) => {
  array.forEach((item) => {
    item.classList.remove(className);
  });
};


/***/ }),

/***/ "./src/view/comment.js":
/*!*****************************!*\
  !*** ./src/view/comment.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CommentView; });
/* harmony import */ var _mock_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mock/utils */ "./src/mock/utils.js");


const createCommentTemplate = (comment) => {

  const {date, author, message, emotion} = comment;

  return `<li class="film-details__comment">
            <span class="film-details__comment-emoji">
              <img src="./images/emoji/${emotion}" width="55" height="55" alt="emoji-smile">
            </span>
            <div>
              <p class="film-details__comment-text">${message}</p>
              <p class="film-details__comment-info">
                <span class="film-details__comment-author">${author}</span>
                <span class="film-details__comment-day">${date}</span>
                <button class="film-details__comment-delete">Delete</button>
              </p>
            </div>
          </li>`;
};

class CommentView {
  constructor(comment) {
    this._comment = comment;
    this._element = null;
  }

  getTemplate() {
    return createCommentTemplate(this._comment);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_mock_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }

}


/***/ }),

/***/ "./src/view/film-card.js":
/*!*******************************!*\
  !*** ./src/view/film-card.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmCardView; });
/* harmony import */ var _mock_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mock/utils */ "./src/mock/utils.js");

const createFilmCardTemplate = (film) => {

  const {title, rating, date, duration, genre, poster, description, comments} = film;

  return `<article class="film-card">
          <h3 class="film-card__title">${title.translation}</h3>
          <p class="film-card__rating">${rating}</p>
          <p class="film-card__info">
            <span class="film-card__year">${date}</span>
            <span class="film-card__duration">${duration.hour}h ${duration.minute}m</span>
            <span class="film-card__genre">${genre[0].title}</span>
          </p>
          <img src="./images/posters/${poster}" alt="${title}" class="film-card__poster">
          <p class="film-card__description">${description}.</p>
          <a class="film-card__comments">${comments} comments</a>
          <div class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite" type="button">Mark as favorite</button>
          </div>
        </article>`;
};

class FilmCardView {
  constructor(film) {
    this._film = film;
    this._element = null;
  }

  getTemplate() {
    return createFilmCardTemplate(this._film);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_mock_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/film-details-popup.js":
/*!****************************************!*\
  !*** ./src/view/film-details-popup.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmDetailsPopupView; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mock_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mock/utils */ "./src/mock/utils.js");



const createFilmDetailsPopupTemplate = (film) => {

  const {title, date, rating, duration, genre, poster, description, director, writers, actors, country, ageRating} = film;

  return `<section class="film-details">
  <form class="film-details__inner" action="" method="get">
    <div class="film-details__top-container">
      <div class="film-details__close">
        <button class="film-details__close-btn" type="button">close</button>
      </div>
      <div class="film-details__info-wrap">
        <div class="film-details__poster">
          <img class="film-details__poster-img" src="./images/posters/${poster}" alt="${title}">

          <p class="film-details__age">${ageRating}</p>
        </div>

        <div class="film-details__info">
          <div class="film-details__info-head">
            <div class="film-details__title-wrap">
              <h3 class="film-details__title">${title.translation}</h3>
              <p class="film-details__title-original">${title.original}</p>
            </div>

            <div class="film-details__rating">
              <p class="film-details__total-rating">${rating}</p>
            </div>
          </div>

          <table class="film-details__table">
            <tr class="film-details__row">
              <td class="film-details__term">Director</td>
              <td class="film-details__cell">${director}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Writers</td>
              <td class="film-details__cell">${writers}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Actors</td>
              <td class="film-details__cell">${actors}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Release Date</td>
              <td class="film-details__cell">${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).format(`DD MMMM YYYY`)}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Runtime</td>
              <td class="film-details__cell">${duration.hour}h ${duration.minute}m</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Country</td>
              <td class="film-details__cell">${country}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Genres</td>
              <td class="film-details__cell">
                <span class="film-details__genre">${genre[0].title}</span>
                <span class="film-details__genre">${genre[1].title}</span>
                <span class="film-details__genre">${genre[2].title}</span></td>
            </tr>
          </table>

          <p class="film-details__film-description">
            ${description}.
          </p>
        </div>
      </div>

      <section class="film-details__controls">
        <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist">
        <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

        <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched">
        <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>

        <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite">
        <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
      </section>
    </div>

    <div class="film-details__bottom-container">
      <section class="film-details__comments-wrap">
        <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">4</span></h3>

        <ul class="film-details__comments-list">
        </ul>

        <div class="film-details__new-comment">
          <div class="film-details__add-emoji-label"></div>

          <label class="film-details__comment-label">
            <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
          </label>

          <div class="film-details__emoji-list">
            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile">
            <label class="film-details__emoji-label" for="emoji-smile">
              <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
            </label>

            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
            <label class="film-details__emoji-label" for="emoji-sleeping">
              <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
            </label>

            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke">
            <label class="film-details__emoji-label" for="emoji-puke">
              <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
            </label>

            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry">
            <label class="film-details__emoji-label" for="emoji-angry">
              <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
            </label>
          </div>
        </div>
      </section>
    </div>
  </form>
</section>`;
};

class FilmDetailsPopupView {
  constructor(film) {
    this._film = film;
    this._element = null;
  }

  getTemplate() {
    return createFilmDetailsPopupTemplate(this._film);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_mock_utils__WEBPACK_IMPORTED_MODULE_1__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/films.js":
/*!***************************!*\
  !*** ./src/view/films.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmsView; });
/* harmony import */ var _mock_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mock/utils */ "./src/mock/utils.js");


const createFilmsTemplate = () => {
  return `<section class="films">
    <section class="films-list">
      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>

      <div class="films-list__container">

      </div>

    </section>

    <section class="films-list films-list--extra">
      <h2 class="films-list__title">Top rated</h2>

      <div class="films-list__container">

      </div>
    </section>

    <section class="films-list films-list--extra">
      <h2 class="films-list__title">Most commented</h2>

      <div class="films-list__container">

      </div>
    </section>
  </section>`;
};

class FilmsView {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createFilmsTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_mock_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/footer-statistics.js":
/*!***************************************!*\
  !*** ./src/view/footer-statistics.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FooterStatisticsView; });
/* harmony import */ var _mock_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mock/utils */ "./src/mock/utils.js");


const createFooterStatisticsTemplate = (count) => {
  return `<p>${count} movies inside</p>`;
};

class FooterStatisticsView {
  constructor(count) {
    this._count = count;
    this._element = null;
  }

  getTemplate() {
    return createFooterStatisticsTemplate(this._count);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_mock_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/main-navigation.js":
/*!*************************************!*\
  !*** ./src/view/main-navigation.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainNavigationView; });
/* harmony import */ var _mock_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mock/utils */ "./src/mock/utils.js");


const createMainNavigationTemplate = () => {
  return `<nav class="main-navigation">
    <div class="main-navigation__items">
      <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
      <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">13</span></a>
      <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">4</span></a>
      <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">8</span></a>
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`;
};

class MainNavigationView {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createMainNavigationTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_mock_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }

}


/***/ }),

/***/ "./src/view/profile.js":
/*!*****************************!*\
  !*** ./src/view/profile.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProfileView; });
/* harmony import */ var _mock_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mock/utils */ "./src/mock/utils.js");


const createProfileTemplate = () => {
  return `<section class="header__profile profile">
    <p class="profile__rating">Movie Buff</p>
    <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
  </section>`;
};

class ProfileView {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createProfileTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_mock_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/show-more-button.js":
/*!**************************************!*\
  !*** ./src/view/show-more-button.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShowMoreButtonView; });
/* harmony import */ var _mock_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mock/utils */ "./src/mock/utils.js");


const createShowMoreButtonTemplate = () => {
  return `<button class="films-list__show-more">Show more</button>`;
};

class ShowMoreButtonView {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createShowMoreButtonTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_mock_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/sort.js":
/*!**************************!*\
  !*** ./src/view/sort.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SortView; });
/* harmony import */ var _mock_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mock/utils */ "./src/mock/utils.js");


const createSortTemplate = () => {
  return `<ul class="sort">
    <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
    <li><a href="#" class="sort__button">Sort by date</a></li>
    <li><a href="#" class="sort__button">Sort by rating</a></li>
  </ul>`;
};

class SortView {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createSortTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_mock_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
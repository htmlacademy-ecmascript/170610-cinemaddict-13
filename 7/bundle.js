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

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/*! exports provided: SortType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortType", function() { return SortType; });
const SortType = {
  DEFAULT: `default`,
  DATE_UP: `date`,
  RATING_UP: `rating`
};


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
/* harmony import */ var _presenter_board_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./presenter/board.js */ "./src/presenter/board.js");
/* harmony import */ var _view_footer_statistics_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/footer-statistics.js */ "./src/view/footer-statistics.js");
/* harmony import */ var _mock_movie_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mock/movie.js */ "./src/mock/movie.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/render.js */ "./src/utils/render.js");






const FILMS_COUNT = 13;
const movies = new Array(FILMS_COUNT).fill(0).map(_mock_movie_js__WEBPACK_IMPORTED_MODULE_3__["generateFilm"]);

const siteBodyElement = document.querySelector(`body`);

const siteHeaderElement = siteBodyElement.querySelector(`.header`);
Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_4__["render"])(siteHeaderElement, new _view_profile_js__WEBPACK_IMPORTED_MODULE_0__["default"](), _utils_render_js__WEBPACK_IMPORTED_MODULE_4__["RenderPosition"].BEFOREEND);

const siteMainElement = document.querySelector(`main`);
const movieBoardPresenter = new _presenter_board_js__WEBPACK_IMPORTED_MODULE_1__["default"](siteMainElement);
movieBoardPresenter.init(movies);

const footerElement = siteBodyElement.querySelector(`.footer`);
const footerStatisticsElement = footerElement.querySelector(`.footer__statistics`);
Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_4__["render"])(footerStatisticsElement, new _view_footer_statistics_js__WEBPACK_IMPORTED_MODULE_2__["default"](movies.length), _utils_render_js__WEBPACK_IMPORTED_MODULE_4__["RenderPosition"].BEFOREEND);


/***/ }),

/***/ "./src/mock/movie.js":
/*!***************************!*\
  !*** ./src/mock/movie.js ***!
  \***************************/
/*! exports provided: generateDate, generateDescription, generateName, generateFilm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDate", function() { return generateDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDescription", function() { return generateDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateName", function() { return generateName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilm", function() { return generateFilm; });
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");
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
  const title = titles[Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomIndex"])(titles)];
  return title;
};

const generateRating = () => {
  const rating = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandom"])(MAX_RATING).toFixed(1);
  return rating;
};

const generateDate = (format) => {
  const maxDayGap = 3600;
  const daysGap = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(-maxDayGap);
  const date = dayjs__WEBPACK_IMPORTED_MODULE_1___default()().add(daysGap, `day`).toDate();
  return dayjs__WEBPACK_IMPORTED_MODULE_1___default()(date).format(format);
};

const generateDuration = () => {
  const duration = {
    hour: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(MIN_RANDOM_HOUR, MAX_RANDOM_HOUR),
    minute: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(MIN_RANDOM_MINUTE, MAX_RANDOM_MINUTE),
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
  const genre = genres[Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomIndex"])(genres)];
  return genre;
};

const generatePoster = () => {
  const textPosters = `made-for-each-other.png; popeye-meets-sinbad.png; sagebrush-trail.jpg; santa-claus-conquers-the-martians.jpg; the-dance-of-life.jpg; the-great-flamarion.jpg; the-man-with-the-golden-arm.jpg`;
  const posters = textPosters.split(`; `);
  const poster = posters[Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomIndex"])(posters)];
  return poster;
};

const generateDescription = () => {
  const textDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus`;
  const descriptions = textDescription.split(`. `);
  Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["shuffleArray"])(descriptions);
  const description = descriptions.slice(0, Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(MIN_RANDOM_SENTENCES, MAX_RANDOM_SENTENCES));
  return description.join(`. `);
};

const generateComments = () => {
  const comments = new Array(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, MAX_COMMENTS));
  return comments.length;
};

const generateName = (count) => {
  const textNames = `Éabha Leonard; Erika Calixtus; Timur Medea; Anne Lennox; Freek Irit; Isac Ambrosius; Col Hulderic; Mehmud Mohandas; Edith Yash; Dario Dianna; Sophokles Everette; Kreios Indy; Hannah Stanko; Nalini Satisha; Alfreda Avanti; Katherine Claudius; Burkhard Louise; Ludolf Kadri; Nilda Alessia; Evgenios Aníbal; Edita Aderyn; Carol Sylvain; Ianthe Dragutin; Cáel Chibueze; Roderick Aelius; Om Thalia; Glukel Jon; Terpsichore Dani; Binyamin Josie; Zakiah Mette; Marthe Ilsa; Yeriyahu Ezechiel; Lenka Robert; Theodorus Feliciana; Abdullaahi Seanán`;
  const mockNames = textNames.split(`; `);
  Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["shuffleArray"])(mockNames);
  const names = mockNames.slice(0, count);
  return names.join(`, `);
};

const generateCountry = () => {
  const textCountries = `Russia; Rwanda; Saint Kitts and Nevis; Saint Lucia; Saint Vincent and the Grenadines; Samoa; San Marino; Sao Tome and Principe; Saudi Arabia; Senegal; Serbia; Seychelles; Sierra Leone; Singapore; Slovakia; Slovenia; USA; Syria; Tajikistan; Tanzania; Thailand; Timor-Leste; Togo; Tonga; Trinidad and Tobago; Tunisia; Turkey; Turkmenistan; Tuvalu; Uganda; Ukraine`;
  const mockCountries = textCountries.split(`; `);
  Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["shuffleArray"])(mockCountries);
  const country = mockCountries.slice(0, 1);
  return country;
};

const generateAgeRating = () => {
  const textAgeRating = `0+; 6+; 12+; 16+; 18+`;
  const mockAgeRating = textAgeRating.split(`; `);
  Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["shuffleArray"])(mockAgeRating);
  const ageRating = mockAgeRating.slice(0, 1);
  return ageRating;
};

const generateRandomBoolean = (ratio) => {
  const randomBoolean = Math.random() < ratio;
  return randomBoolean;
};

let count = 0;

const generateId = () => {
  count++;
  return count;
};

const generateFilm = () => {
  return {
    id: generateId(),
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
    isWatchlist: generateRandomBoolean(0.3),
    isWatched: generateRandomBoolean(0.5),
    isFavorite: generateRandomBoolean(0.2),
  };
};


/***/ }),

/***/ "./src/presenter/board.js":
/*!********************************!*\
  !*** ./src/presenter/board.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Board; });
/* harmony import */ var _view_main_navigation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/main-navigation.js */ "./src/view/main-navigation.js");
/* harmony import */ var _view_all_movies_container_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/all-movies-container.js */ "./src/view/all-movies-container.js");
/* harmony import */ var _view_all_movies_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/all-movies-list.js */ "./src/view/all-movies-list.js");
/* harmony import */ var _view_movies_container_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/movies-container.js */ "./src/view/movies-container.js");
/* harmony import */ var _view_sort_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/sort.js */ "./src/view/sort.js");
/* harmony import */ var _view_no_movies_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view/no-movies.js */ "./src/view/no-movies.js");
/* harmony import */ var _view_load_more_button_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../view/load-more-button.js */ "./src/view/load-more-button.js");
/* harmony import */ var _movie_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./movie.js */ "./src/presenter/movie.js");
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../const.js */ "./src/const.js");












const MOVIES_COUNT_PER_STEP = 5;

class Board {
  constructor(boardContainer) {
    this._boardContainer = boardContainer;
    this._renderedMoviesCount = MOVIES_COUNT_PER_STEP;
    this._moviePresenter = {};
    this._currentSortType = _const_js__WEBPACK_IMPORTED_MODULE_10__["SortType"].DEFAULT;

    this._mainNavigationComponent = new _view_main_navigation_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this._allMoviesContainerComponent = new _view_all_movies_container_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this._allMoviesListComponent = new _view_all_movies_list_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this._moviesContainerComponent = new _view_movies_container_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this._sortComponent = new _view_sort_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
    this._noMoviesComponent = new _view_no_movies_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
    this._loadMoreButtonComponent = new _view_load_more_button_js__WEBPACK_IMPORTED_MODULE_6__["default"]();

    this._handleMovieChange = this._handleMovieChange.bind(this);
    this._handleModeChange = this._handleModeChange.bind(this);
    this._handleLoadMoreButtonClick = this._handleLoadMoreButtonClick.bind(this);
    this._handleSortTypeChange = this._handleSortTypeChange.bind(this);
  }

  init(boardMovies) {
    this._boardMovies = boardMovies.slice();
    this._sourcedBoardMovies = boardMovies.slice();
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_9__["render"])(this._boardContainer, this._mainNavigationComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].AFTERBEGIN);
    this._renderBoard();
  }

  _handleModeChange() {
    Object
      .values(this._moviePresenter)
      .forEach((presenter) => presenter.resetView());
  }

  _handleMovieChange(updatedMovie) {
    this._boardMovies = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_8__["updateItem"])(this._boardMovies, updatedMovie);
    this._moviePresenter[updatedMovie.id].init(updatedMovie);
  }

  _sortMovies(sortType) {
    switch (sortType) {
      case _const_js__WEBPACK_IMPORTED_MODULE_10__["SortType"].DATE_UP:
        this._boardMovies.sort(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_8__["sortByFieldAscending"])(_const_js__WEBPACK_IMPORTED_MODULE_10__["SortType"].DATE_UP));
        break;
      case _const_js__WEBPACK_IMPORTED_MODULE_10__["SortType"].RATING_UP:
        this._boardMovies.sort(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_8__["sortByFieldAscending"])(_const_js__WEBPACK_IMPORTED_MODULE_10__["SortType"].RATING_UP));
        break;
      default:
        this._boardMovies = this._sourcedBoardMovies.slice();
    }

    this._currentSortType = sortType;
  }

  _handleSortTypeChange(sortType) {
    if (this._currentSortType === sortType) {
      return;
    }

    this._sortMovies(sortType);
    this._clearMoviesList();
    this._renderMoviesList();
  }

  _renderSort() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_9__["render"])(this._boardContainer, this._sortComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);
    this._sortComponent.setSortTypeChangeHandler(this._handleSortTypeChange);
  }

  _renderAllMoviesContainer() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_9__["render"])(this._boardContainer, this._allMoviesContainerComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_9__["render"])(this._allMoviesContainerComponent, this._allMoviesListComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_9__["render"])(this._allMoviesListComponent, this._moviesContainerComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);
  }

  _renderMovie(movie) {
    const moviePresenter = new _movie_js__WEBPACK_IMPORTED_MODULE_7__["default"](this._moviesContainerComponent, this._handleMovieChange, this._handleModeChange);
    moviePresenter.init(movie);
    this._moviePresenter[movie.id] = moviePresenter;
  }

  _renderMovies(from, to) {
    this._boardMovies
      .slice(from, to)
      .forEach((boardMovie) => this._renderMovie(boardMovie));
  }

  _renderNoMovies() {
  }

  _handleLoadMoreButtonClick() {
    this._renderMovies(this._renderedMoviesCount, this._renderedMoviesCount + MOVIES_COUNT_PER_STEP);
    this._renderedMoviesCount += MOVIES_COUNT_PER_STEP;

    if (this._renderedMoviesCount >= this._boardMovies.length) {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_9__["remove"])(this._loadMoreButtonComponent);
    }

  }

  _renderLoadMoreButton() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_9__["render"])(this._allMoviesListComponent, this._loadMoreButtonComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);
    this._loadMoreButtonComponent.setClickHandler(this._handleLoadMoreButtonClick);
  }

  _clearMoviesList() {
    Object
      .values(this._moviePresenter)
      .forEach((presenter) => presenter.destroy());
    this._moviePresenter = {};
    this._renderedMoviesCount = MOVIES_COUNT_PER_STEP;
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_9__["remove"])(this._loadMoreButtonComponent);
  }

  _renderMoviesList() {
    this._renderMovies(0, Math.min(this._boardMovies.length, MOVIES_COUNT_PER_STEP));

    if (this._boardMovies.length > MOVIES_COUNT_PER_STEP) {
      this._renderLoadMoreButton();
    }
  }

  _renderBoard() {
    if (this._boardMovies.length === 0) {
      this._renderNoMovies();
      return;
    }

    this._renderSort();
    this._renderAllMoviesContainer();
    this._renderMoviesList();
  }
}


/***/ }),

/***/ "./src/presenter/movie.js":
/*!********************************!*\
  !*** ./src/presenter/movie.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Movie; });
/* harmony import */ var _view_card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/card.js */ "./src/view/card.js");
/* harmony import */ var _view_popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/popup.js */ "./src/view/popup.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");




const Mode = {
  DEFAULT: `DEFAULT`,
  POPUP: `POPUP`
};

const siteBodyElement = document.querySelector(`body`);

class Movie {
  constructor(moviesListContainer, changeData, changeMode) {
    this._moviesListContainer = moviesListContainer;

    this._changeData = changeData;
    this._changeMode = changeMode;

    this._cardComponent = null;
    this._popupComponent = null;
    this._mode = Mode.DEFAULT;

    this._handleShowPopupClick = this._handleShowPopupClick.bind(this);
    this._handleCloseButtonClick = this._handleCloseButtonClick.bind(this);
    this._handleEscKeyDown = this._handleEscKeyDown.bind(this);

    this._handleWatchlistClick = this._handleWatchlistClick.bind(this);
    this._handleWatchedClick = this._handleWatchedClick.bind(this);
    this._handleFavoritesClick = this._handleFavoritesClick.bind(this);

  }

  init(movie) {
    this._movie = movie;

    const prevCardComponent = this._cardComponent;
    const prevPopupComponent = this._popupComponent;

    this._cardComponent = new _view_card_js__WEBPACK_IMPORTED_MODULE_0__["default"](movie);
    this._popupComponent = new _view_popup_js__WEBPACK_IMPORTED_MODULE_1__["default"](movie);

    this._cardComponent.setShowPopupClickHandler(this._handleShowPopupClick);
    this._popupComponent.setCloseButtonClickHandler(this._handleCloseButtonClick);

    this._cardComponent.setWatchlistClickHandler(this._handleWatchlistClick);
    this._cardComponent.setWatchedClickHandler(this._handleWatchedClick);
    this._cardComponent.setFavoritesClickHandler(this._handleFavoritesClick);

    this._popupComponent.setWatchlistClickHandler(this._handleWatchlistClick);
    this._popupComponent.setWatchedClickHandler(this._handleWatchedClick);
    this._popupComponent.setFavoritesClickHandler(this._handleFavoritesClick);

    if (prevCardComponent === null || prevPopupComponent === null) {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["render"])(this._moviesListContainer, this._cardComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_2__["RenderPosition"].AFTERBEGIN);
      return;
    }


    if (this._mode === Mode.DEFAULT) {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["replace"])(this._cardComponent, prevCardComponent);
    }

    if (this._mode === Mode.POPUP) {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["replace"])(this._popupComponent, prevPopupComponent);
    }

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["remove"])(prevCardComponent);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["remove"])(prevPopupComponent);

  }

  destroy() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["remove"])(this._cardComponent);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["remove"])(this._popupComponent);
  }

  resetView() {
    if (this._mode !== Mode.DEFAULT) {
      this._replacePopupToCard();
    }
  }

  _replaceCardToPopup() {
    if (this._popupComponent) {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["render"])(siteBodyElement, this._popupComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_2__["RenderPosition"].BEFOREEND);
    }
    document.addEventListener(`keydown`, this._handleEscKeyDown);
    this._changeMode();
    this._mode = Mode.POPUP;
  }

  _replacePopupToCard() {
    this._popupComponent.getElement().remove();
    document.removeEventListener(`keydown`, this._handleEscKeyDown);
    this._mode = Mode.DEFAULT;
  }

  _handleEscKeyDown(e) {
    if (e.key === `Escape` || e.key === `Esc`) {
      e.preventDefault();
      this._replacePopupToCard();
    }
  }

  _handleShowPopupClick() {
    this._replaceCardToPopup();
  }

  _handleCloseButtonClick() {
    this._replacePopupToCard();
  }

  _handleWatchlistClick() {
    this._changeData(
        Object.assign(
            {},
            this._movie,
            {
              isWatchlist: !this._movie.isWatchlist
            }
        )
    );
  }

  _handleWatchedClick() {
    this._changeData(
        Object.assign(
            {},
            this._movie,
            {
              isWatched: !this._movie.isWatched
            }
        )
    );
  }

  _handleFavoritesClick() {
    this._changeData(
        Object.assign(
            {},
            this._movie,
            {
              isFavorite: !this._movie.isFavorite
            }
        )
    );
  }

}




/***/ }),

/***/ "./src/utils/common.js":
/*!*****************************!*\
  !*** ./src/utils/common.js ***!
  \*****************************/
/*! exports provided: getRandomInteger, getRandom, shuffleArray, getRandomIndex, sortByFieldAscending, sortByFieldDescending, removeActiveClass, updateItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInteger", function() { return getRandomInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandom", function() { return getRandom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shuffleArray", function() { return shuffleArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomIndex", function() { return getRandomIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByFieldAscending", function() { return sortByFieldAscending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByFieldDescending", function() { return sortByFieldDescending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeActiveClass", function() { return removeActiveClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateItem", function() { return updateItem; });
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

const updateItem = (items, update) => {
  const index = items.findIndex((item) => item.id === update.id);

  if (index === -1) {
    return items;
  }

  return [
    ...items.slice(0, index),
    update,
    ...items.slice(index + 1)
  ];
};


/***/ }),

/***/ "./src/utils/render.js":
/*!*****************************!*\
  !*** ./src/utils/render.js ***!
  \*****************************/
/*! exports provided: RenderPosition, render, createElement, remove, clearRenderedElements, replace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPosition", function() { return RenderPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearRenderedElements", function() { return clearRenderedElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return replace; });
/* harmony import */ var _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/abstract.js */ "./src/view/abstract.js");


const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
};

const render = (container, child, place) => {
  if (container instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    container = container.getElement();
  }

  if (child instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    child = child.getElement();
  }

  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(child);
      break;
    case RenderPosition.BEFOREEND:
      container.append(child);
      break;
  }
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

const remove = (component) => {
  if (!(component instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"])) {
    throw new Error(`Can remove only components`);
  }

  component.getElement().remove();
  component.removeElement();
};

const clearRenderedElements = (element) => {
  while (element.firstChild) {
    element.removeChild(element.lastChild);
  }
};

const replace = (newChild, oldChild) => {
  if (oldChild instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    oldChild = oldChild.getElement();
  }

  if (newChild instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    newChild = newChild.getElement();
  }

  const parent = oldChild.parentElement;

  if (parent === null || oldChild === null || newChild === null) {
    throw new Error(`Can't replace unexisting elements`);
  }

  parent.replaceChild(newChild, oldChild);
};


/***/ }),

/***/ "./src/view/abstract.js":
/*!******************************!*\
  !*** ./src/view/abstract.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Abstract; });
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");


class Abstract {
  constructor() {
    if (new.target === Abstract) {
      throw new Error(`Can't instantiate Abstract, only concrete one.`);
    }

    this._element = null;
    this._callback = {};
  }

  getTemplate() {
    throw new Error(`Abstract method not implemented: getTemplate`);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/all-movies-container.js":
/*!******************************************!*\
  !*** ./src/view/all-movies-container.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AllMoviesContainerView; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createAllMoviesContainerTemplate = () => {
  return `<section class="films">
  </section>`;
};

class AllMoviesContainerView extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createAllMoviesContainerTemplate();
  }
}


/***/ }),

/***/ "./src/view/all-movies-list.js":
/*!*************************************!*\
  !*** ./src/view/all-movies-list.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AllMoviesListView; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createAllMoviesListTemplate = () => {
  return `<section class="films-list">
      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
    </section>
  </section>`;
};

class AllMoviesListView extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createAllMoviesListTemplate();
  }
}


/***/ }),

/***/ "./src/view/card.js":
/*!**************************!*\
  !*** ./src/view/card.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardView; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createCardTemplate = (film) => {

  const {title, rating, date, duration, genre, poster, description, comments} = film;

  return `<article class="film-card">
          <h3 class="film-card__title">${title.translation}</h3>
          <p class="film-card__rating">${rating}</p>
          <p class="film-card__info">
            <span class="film-card__year">${date}</span>
            <span class="film-card__duration">${duration.hour}h ${duration.minute}m</span>
            <span class="film-card__genre">${genre[0].title}</span>
          </p>
          <img src="./images/posters/${poster}" alt="${title.translation}" class="film-card__poster">
          <p class="film-card__description">${description}.</p>
          <a class="film-card__comments">${comments} comments</a>
          <div class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite" type="button">Mark as favorite</button>
          </div>
        </article>`;
};

class CardView extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(movie) {
    super();
    this._movie = movie;

    this._showPopupClickHandler = this._showPopupClickHandler.bind(this);

    this._watchlistClickHandler = this._watchlistClickHandler.bind(this);
    this._watchedClickHandler = this._watchedClickHandler.bind(this);
    this._favoritesClickHandler = this._favoritesClickHandler.bind(this);

  }

  getTemplate() {
    return createCardTemplate(this._movie);
  }


  _showPopupClickHandler(e) {
    e.preventDefault();
    if (e.target.classList.contains(`film-card__poster`) || e.target.classList.contains(`film-card__title`) || e.target.classList.contains(`film-card__comments`)) {
      this._callback.showPopupClick();
    }
  }

  setShowPopupClickHandler(callback) {
    this._callback.showPopupClick = callback;
    this.getElement().addEventListener(`click`, this._showPopupClickHandler);
  }

  _watchlistClickHandler(e) {
    e.preventDefault();
    this._callback.watchlistClick();
  }

  _watchedClickHandler(e) {
    e.preventDefault();
    this._callback.watchedClick();
  }

  _favoritesClickHandler(e) {
    e.preventDefault();
    this._callback.favoritesClick();
  }

  setWatchlistClickHandler(callback) {
    this._callback.watchlistClick = callback;
    this.getElement().querySelector(`.film-card__controls-item--add-to-watchlist`).addEventListener(`click`, this._watchlistClickHandler);
  }

  setWatchedClickHandler(callback) {
    this._callback.watchedClick = callback;
    this.getElement().querySelector(`.film-card__controls-item--mark-as-watched`).addEventListener(`click`, this._watchedClickHandler);
  }

  setFavoritesClickHandler(callback) {
    this._callback.favoritesClick = callback;
    this.getElement().querySelector(`.film-card__controls-item--favorite`).addEventListener(`click`, this._favoritesClickHandler);
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
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createFooterStatisticsTemplate = (count) => {
  return `<p>${count} movies inside</p>`;
};

class FooterStatisticsView extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createFooterStatisticsTemplate();
  }
}


/***/ }),

/***/ "./src/view/load-more-button.js":
/*!**************************************!*\
  !*** ./src/view/load-more-button.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoadMoreButtonView; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createLoadMoreButtonTemplate = () => {
  return `<button class="films-list__show-more">Show more</button>`;
};

class LoadMoreButtonView extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
    this._clickHandler = this._clickHandler.bind(this);
  }

  getTemplate() {
    return createLoadMoreButtonTemplate();
  }

  _clickHandler(e) {
    e.preventDefault();
    this._callback.click();
  }

  setClickHandler(callback) {
    this._callback.click = callback;
    this.getElement().addEventListener(`click`, this._clickHandler);
  }

  unsetClickHandler(callback) {
    this._callback.click = callback;
    this.getElement().removeEventListener(`click`, this._clickHandler);
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
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


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

class MainNavigationView extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createMainNavigationTemplate();
  }
}


/***/ }),

/***/ "./src/view/movies-container.js":
/*!**************************************!*\
  !*** ./src/view/movies-container.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MoviesContainerView; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createMoviesContainerTemplate = () => {
  return `<div class="films-list__container">
</div>`;
};

class MoviesContainerView extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createMoviesContainerTemplate();
  }
}


/***/ }),

/***/ "./src/view/no-movies.js":
/*!*******************************!*\
  !*** ./src/view/no-movies.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NoMoviesView; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createNoMoviesTemplate = () => {
  return `<section class="films">
    <section class="films-list">
      <h2 class="films-list__title">There are no movies in our database</h2>
    </section>
  </section>`;
};

class NoMoviesView extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createNoMoviesTemplate();
  }
}


/***/ }),

/***/ "./src/view/popup.js":
/*!***************************!*\
  !*** ./src/view/popup.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MovieDetailsPopupView; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");



const createMovieDetailsPopupTemplate = (film) => {

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

class MovieDetailsPopupView extends _abstract_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(film) {
    super();
    this._film = film;

    this._closeButtonClickHandler = this._closeButtonClickHandler.bind(this);

    this._watchlistClickHandler = this._watchlistClickHandler.bind(this);
    this._watchedClickHandler = this._watchedClickHandler.bind(this);
    this._favoritesClickHandler = this._favoritesClickHandler.bind(this);

  }

  getTemplate() {
    return createMovieDetailsPopupTemplate(this._film);
  }

  _closeButtonClickHandler(e) {
    e.preventDefault();
    this._callback.closeButtonClick();
  }

  setCloseButtonClickHandler(callback) {
    this._callback.closeButtonClick = callback;
    this.getElement().querySelector(`.film-details__close-btn`).addEventListener(`click`, this._closeButtonClickHandler);
  }

  _watchlistClickHandler(e) {
    e.preventDefault();
    this._callback.watchlistClick();
  }

  _watchedClickHandler(e) {
    e.preventDefault();
    this._callback.watchedClick();
  }

  _favoritesClickHandler(e) {
    e.preventDefault();
    this._callback.favoritesClick();
  }

  setWatchlistClickHandler(callback) {
    this._callback.watchlistClick = callback;
    this.getElement().querySelector(`.film-details__control-label--watchlist`).addEventListener(`click`, this._watchlistClickHandler);
  }

  setWatchedClickHandler(callback) {
    this._callback.watchedClick = callback;
    this.getElement().querySelector(`.film-details__control-label--watched`).addEventListener(`click`, this._watchedClickHandler);
  }

  setFavoritesClickHandler(callback) {
    this._callback.favoritesClick = callback;
    this.getElement().querySelector(`.film-details__control-label--favorite`).addEventListener(`click`, this._favoritesClickHandler);
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
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createProfileTemplate = () => {
  return `<section class="header__profile profile">
    <p class="profile__rating">Movie Buff</p>
    <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
  </section>`;
};

class ProfileView extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createProfileTemplate();
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
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const.js */ "./src/const.js");



const createSortTemplate = () => {
  return `<ul class="sort">
    <li><a href="#" class="sort__button sort__button--active" data-sort-type="${_const_js__WEBPACK_IMPORTED_MODULE_1__["SortType"].DEFAULT}">Sort by default</a></li>
    <li><a href="#" class="sort__button" data-sort-type="${_const_js__WEBPACK_IMPORTED_MODULE_1__["SortType"].DATE_UP}">Sort by date</a></li>
    <li><a href="#" class="sort__button" data-sort-type="${_const_js__WEBPACK_IMPORTED_MODULE_1__["SortType"].RATING_UP}">Sort by rating</a></li>
  </ul>`;
};

class SortView extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();

    this._sortTypeChangeHandler = this._sortTypeChangeHandler.bind(this);
  }

  getTemplate() {
    return createSortTemplate();
  }

  _sortTypeChangeHandler(e) {
    if (e.target.tagName !== `A`) {
      return;
    }

    e.preventDefault();
    this._callback.sortTypeChange(e.target.dataset.sortType);
  }

  setSortTypeChangeHandler(callback) {
    this._callback.sortTypeChange = callback;
    this.getElement().addEventListener(`click`, this._sortTypeChangeHandler);
  }
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
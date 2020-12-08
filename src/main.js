import ProfileView from "./view/profile.js";
import MainNavigationView from "./view/main-navigation.js";
import FooterStatisticsView from "./view/footer-statistics.js";
import MovieBoardPresenter from "./presenter/movieboard.js";
import {generateFilm} from "./mock/film.js";
import {generateComment} from "./mock/comment.js";
import {render, RenderPosition} from "./utils/render.js";

const FILMS_COUNT = 43;
const films = new Array(FILMS_COUNT).fill(0).map(generateFilm);

const siteBodyElement = document.querySelector(`body`);
const siteHeaderElement = siteBodyElement.querySelector(`.header`);
render(siteHeaderElement, new ProfileView(), RenderPosition.BEFOREEND);

const siteMainElement = siteBodyElement.querySelector(`.main`);

const movieBoardPresenter = new MovieBoardPresenter(siteMainElement);
movieBoardPresenter.init(films);

render(siteMainElement, new MainNavigationView(), RenderPosition.AFTERBEGIN);

const footerElement = siteBodyElement.querySelector(`.footer`);
const footerStatisticsElement = footerElement.querySelector(`.footer__statistics`);
render(footerStatisticsElement, new FooterStatisticsView(films.length), RenderPosition.BEFOREEND);

import ProfileView from "./view/profile.js";
import MovieBoardPresenter from "./presenter/board.js";
import FooterStatisticsView from "./view/footer-statistics.js";
import {generateFilm} from "./mock/film.js";
import {render, RenderPosition} from "./utils/render.js";

const FILMS_COUNT = 13;
const movies = new Array(FILMS_COUNT).fill(0).map(generateFilm);

const siteBodyElement = document.querySelector(`body`);

const siteHeaderElement = siteBodyElement.querySelector(`.header`);
render(siteHeaderElement, new ProfileView(), RenderPosition.BEFOREEND);

const siteMainElement = document.querySelector(`main`);
const movieBoardPresenter = new MovieBoardPresenter(siteMainElement);
movieBoardPresenter.init(movies);

const footerElement = siteBodyElement.querySelector(`.footer`);
const footerStatisticsElement = footerElement.querySelector(`.footer__statistics`);
render(footerStatisticsElement, new FooterStatisticsView(movies.length), RenderPosition.BEFOREEND);

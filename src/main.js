import {createProfileTemplate} from "./view/profile.js";
import {createMainNavigationTemplate} from "./view/main-navigation.js";
import {createSortTemplate} from "./view/sort.js";
import {createFilmsTemplate} from "./view/films.js";
import {createFilmCardTemplate} from "./view/film-card.js";
import {createShowMoreButtonTemplate} from "./view/show-more-button.js";
import {createFooterStatisticsTemplate} from "./view/footer-statistics.js";
import {createFilmDetailsPopupTemplate} from "./view/film-details-popup.js";
import {generateFilm} from "./mock/film.js";

const FILMS_CARDS_COUNT = 5;
const FILMS_CARDS_EXTRA_COUNT = 2;
const MOCK_FILMS_COUNT = 20;

const films = new Array(MOCK_FILMS_COUNT).fill().map(generateFilm);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteBodyElement = document.querySelector(`body`);
const siteHeaderElement = siteBodyElement.querySelector(`.header`);
const siteMainElement = siteBodyElement.querySelector(`.main`);

render(siteHeaderElement, createProfileTemplate(), `beforeend`);
render(siteMainElement, createMainNavigationTemplate(), `afterbegin`);
render(siteMainElement, createSortTemplate(), `beforeend`);
render(siteMainElement, createFilmsTemplate(), `beforeend`);

const filmsElement = document.querySelector(`.films`);
const filmsListElement = filmsElement.querySelector(`.films-list`);

const filmsListContainerElement = filmsListElement.querySelector(`.films-list__container`);

for (let i = 0; i < FILMS_CARDS_COUNT; i++) {
  render(filmsListContainerElement, createFilmCardTemplate(films[i]), `beforeend`);
}

render(filmsListElement, createShowMoreButtonTemplate(), `beforeend`);

const filmsListExtraElements = filmsElement.querySelectorAll(`.films-list--extra`);

filmsListExtraElements.forEach((element) => {

  const filmsListExtraContainerElement = element.querySelector(`.films-list__container`);

  for (let i = 0; i < FILMS_CARDS_EXTRA_COUNT; i++) {
    render(filmsListExtraContainerElement, createFilmCardTemplate(films[i]), `beforeend`);
  }

});

const footerElement = siteBodyElement.querySelector(`.footer`);
const footerStatisticsElement = footerElement.querySelector(`.footer__statistics`);
render(footerStatisticsElement, createFooterStatisticsTemplate(), `beforeend`);

render(footerElement, createFilmDetailsPopupTemplate(), `afterend`);
const filmDetailsPopupElement = siteBodyElement.querySelector(`.film-details`);
filmDetailsPopupElement.classList.add(`visually-hidden`);

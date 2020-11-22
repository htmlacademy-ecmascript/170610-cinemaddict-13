import {createProfileTemplate} from "./view/profile.js";
import {createMainNavigationTemplate} from "./view/main-navigation.js";
import {createSortTemplate} from "./view/sort.js";
import {createFilmsTemplate} from "./view/films.js";
import {createFilmCardTemplate} from "./view/film-card.js";
import {createShowMoreButtonTemplate} from "./view/show-more-button.js";
import {createFooterStatisticsTemplate} from "./view/footer-statistics.js";
import {createFilmDetailsPopupTemplate} from "./view/film-details-popup.js";
import {generateFilm} from "./mock/film.js";
import {sortByFieldDescending} from "./mock/utils.js";

const FILMS_CARDS_COUNT = 5;
const FILMS_CARDS_EXTRA_COUNT = 2;
const MOCK_FILMS_COUNT = 13;

const Key = {
  ESC: `Escape`,
};

const films = new Array(MOCK_FILMS_COUNT).fill(0).map(generateFilm);

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

let count = FILMS_CARDS_COUNT;

for (let i = 0; i < count; i++) {
  render(filmsListContainerElement, createFilmCardTemplate(films[i]), `beforeend`);
}

render(filmsListElement, createShowMoreButtonTemplate(), `beforeend`);

const showMoreButton = filmsListElement.querySelector(`.films-list__show-more`);

const onShowMoreButtonClick = (e) => {
  e.preventDefault();

  count += FILMS_CARDS_COUNT;

  while (filmsListContainerElement.firstChild) {
    filmsListContainerElement.removeChild(filmsListContainerElement.lastChild);
  }

  for (let i = 0; i < count; i++) {
    render(filmsListContainerElement, createFilmCardTemplate(films[i]), `beforeend`);
    if (count >= MOCK_FILMS_COUNT) {
      showMoreButton.classList.add(`visually-hidden`);
      showMoreButton.removeEventListener(`click`, onShowMoreButtonClick);
    }
  }
};

showMoreButton.addEventListener(`click`, onShowMoreButtonClick);

const filmsListExtraElements = filmsElement.querySelectorAll(`.films-list--extra`);

const extraFilms = films.slice();

const topRatedFilms = extraFilms.sort(sortByFieldDescending(`rating`)).slice(0, FILMS_CARDS_EXTRA_COUNT);
const mostCommentedFilms = extraFilms.sort(sortByFieldDescending(`comments`)).slice(0, FILMS_CARDS_EXTRA_COUNT);

filmsListExtraElements.forEach((element, i) => {
  const filmsListExtraContainerElement = element.querySelector(`.films-list__container`);

  if (i === 0) {
    for (let x = 0; x < FILMS_CARDS_EXTRA_COUNT; x++) {
      render(filmsListExtraContainerElement, createFilmCardTemplate(topRatedFilms[x]), `beforeend`);
    }
  } else {
    for (let x = 0; x < FILMS_CARDS_EXTRA_COUNT; x++) {
      render(filmsListExtraContainerElement, createFilmCardTemplate(mostCommentedFilms[x]), `beforeend`);
    }
  }
});

const footerElement = siteBodyElement.querySelector(`.footer`);
const footerStatisticsElement = footerElement.querySelector(`.footer__statistics`);
render(footerStatisticsElement, createFooterStatisticsTemplate(), `beforeend`);

render(footerElement, createFilmDetailsPopupTemplate(), `afterend`);
const filmDetailsPopupElement = siteBodyElement.querySelector(`.film-details`);
filmDetailsPopupElement.classList.add(`visually-hidden`);

const onFilmsListContainerElementClick = (e) => {
  e.preventDefault();
  if (e.target.classList.contains(`film-card__title`) || e.target.classList.contains(`film-card__poster`) || e.target.classList.contains(`film-card__comments`)) {
    filmDetailsPopupElement.classList.remove(`visually-hidden`);
    siteBodyElement.classList.add(`modal-open`);
  }
};

filmsListContainerElement.addEventListener(`click`, onFilmsListContainerElementClick);

const closePopupButton = filmDetailsPopupElement.querySelector(`.film-details__close-btn`);

const onClosePopupButtonClick = (e) => {
  e.preventDefault();
  filmDetailsPopupElement.classList.add(`visually-hidden`);
  siteBodyElement.classList.remove(`modal-open`);
};

closePopupButton.addEventListener(`click`, onClosePopupButtonClick);

const onFilmDetailsPopupKeydown = (e) => {
  if (e.code === Key.ESC) {
    e.preventDefault();
    filmDetailsPopupElement.classList.add(`visually-hidden`);
    siteBodyElement.classList.remove(`modal-open`);
  }
};

document.addEventListener(`keydown`, onFilmDetailsPopupKeydown);

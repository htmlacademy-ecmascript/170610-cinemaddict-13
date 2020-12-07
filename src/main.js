import ProfileView from "./view/profile.js";
import MainNavigationView from "./view/main-navigation.js";
import SortView from "./view/sort.js";
import FilmsView from "./view/films.js";
import NoFilmsView from "./view/no-films";
import FilmCardView from "./view/film-card.js";
import ShowMoreButtonView from "./view/show-more-button.js";
import FooterStatisticsView from "./view/footer-statistics.js";
import FilmDetailsPopupView from "./view/film-details-popup.js";
import CommentView from "./view/comment.js";
import {sortByFieldAscending, sortByFieldDescending, removeActiveClass} from "./utils/common.js";
import {render, RenderPosition} from "./utils/render.js";
import {generateFilm} from "./mock/film.js";
import {generateComment} from "./mock/comment.js";

const FILMS_COUNT = 14;
const FILMS_CARDS_COUNT = 5;
const FILMS_CARDS_EXTRA_COUNT = 2;

const Key = {
  ESC: `Escape`,
};

const films = new Array(FILMS_COUNT).fill(0).map(generateFilm);

const siteBodyElement = document.querySelector(`body`);
const siteHeaderElement = siteBodyElement.querySelector(`.header`);
const siteMainElement = siteBodyElement.querySelector(`.main`);

render(siteHeaderElement, new ProfileView(), RenderPosition.BEFOREEND);
render(siteMainElement, new MainNavigationView(), RenderPosition.AFTERBEGIN);

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

render(siteMainElement, new SortView(), RenderPosition.BEFOREEND);
const sortMenuItems = siteMainElement.querySelectorAll(`.sort__button`);

/* Нарисуй фильмы */

if (films.length === 0) {
  render(siteMainElement, new NoFilmsView(), RenderPosition.BEFOREEND);
} else {
  render(siteMainElement, new FilmsView(), RenderPosition.BEFOREEND);
}

const filmsElement = document.querySelector(`.films`);
const filmsListElement = filmsElement.querySelector(`.films-list`);

const filmListContainerElement = filmsListElement.querySelector(`.films-list__container`);

/* Нарисуй фильм и попап */

const renderFilm = (filmElement, film) => {
  const filmComponent = new FilmCardView(film);
  const filmPopupComponent = new FilmDetailsPopupView(film);

  render(filmElement, filmComponent, RenderPosition.BEFOREEND);

  const showPopupComponent = () => {
    siteMainElement.appendChild(filmPopupComponent.getElement());
    siteBodyElement.classList.add(`hide-overflow`);

    const commentsListComponent = filmPopupComponent.getElement().querySelector(`.film-details__comments-list`);
    const commentsCountComponent = filmPopupComponent.getElement().querySelector(`.film-details__comments-count`);

    const commentsCount = film.comments;
    const comments = new Array(commentsCount).fill(0).map(generateComment);

    for (let i = 0; i < comments.length; i++) {
      render(commentsListComponent, new CommentView(comments[i]), RenderPosition.AFTERBEGIN);
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

/* Удали нарисованные фильмы */

const clearRenderedFilms = () => {
  while (filmListContainerElement.firstChild) {
    filmListContainerElement.removeChild(filmListContainerElement.lastChild);
  }
};

/* Порции фильмов */
render(filmsListElement, new ShowMoreButtonView(), RenderPosition.BEFOREEND);
const showMoreButton = filmsListElement.querySelector(`.films-list__show-more`);

let filmsRenderCount = FILMS_CARDS_COUNT;
let delta = FILMS_COUNT - filmsRenderCount;

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
    filmsRenderCount = FILMS_COUNT;
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
  removeActiveClass(sortMenuItems, `sort__button--active`);
  e.target.classList.toggle(`sort__button--active`);
  showMoreButton.classList.remove(`visually-hidden`);
  showMoreButton.addEventListener(`click`, onShowMoreButtonClick);

  switch (e.target.textContent) {
    case `Sort by default`:
      clearRenderedFilms();
      filmsRenderCount = FILMS_CARDS_COUNT;
      films.sort(sortByFieldAscending(`uid`));

      renderStartFilmsCards(films);

      break;
    case `Sort by date`:
      clearRenderedFilms();
      filmsRenderCount = FILMS_CARDS_COUNT;
      films.sort(sortByFieldDescending(`date`));

      renderStartFilmsCards(films);

      break;
    case `Sort by rating`:
      clearRenderedFilms();
      filmsRenderCount = FILMS_CARDS_COUNT;
      films.sort(sortByFieldDescending(`rating`));

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

const topRatedFilms = extraFilms.sort(sortByFieldDescending(`rating`)).slice(0, FILMS_CARDS_EXTRA_COUNT);
const mostCommentedFilms = extraFilms.sort(sortByFieldDescending(`comments`)).slice(0, FILMS_CARDS_EXTRA_COUNT);

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
render(footerStatisticsElement, new FooterStatisticsView(films.length), RenderPosition.BEFOREEND);

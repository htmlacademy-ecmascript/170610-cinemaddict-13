import ProfileView from "./view/profile.js";
import MainNavigationView from "./view/main-navigation.js";
import SortView from "./view/sort.js";
import FilmsView from "./view/films.js";
import FilmCardView from "./view/film-card.js";
import ShowMoreButtonView from "./view/show-more-button.js";
import FooterStatisticsView from "./view/footer-statistics.js";
import FilmDetailsPopupView from "./view/film-details-popup.js";
import CommentView from "./view/comment.js";
import {sortByFieldAscending, sortByFieldDescending, removeActiveClass} from "./mock/utils.js";
import {render, RenderPosition} from "./mock/utils.js";
import {generateFilm} from "./mock/film.js";
import {generateComment} from "./mock/comment.js";

const FILMS_CARDS_COUNT = 5;
const FILMS_CARDS_EXTRA_COUNT = 2;
const MAX_MOCK_FILMS_COUNT = 14;

const Key = {
  ESC: `Escape`,
};

const films = new Array(MAX_MOCK_FILMS_COUNT).fill(0).map(generateFilm);

/* Нарисуй фильм */

/* const renderFilm = (filmElement, film) => {
  const filmComponent = new FilmsView(film);
  const filmPopupComponent = new FilmDetailsPopupView(film);

  render(filmElement, filmComponent().getElement(), RenderPosition.BEFOREEND);
};*/

/* Удали нарисованные фильмы */

const clearRenderedFilms = () => {
  while (filmListContainerElement.firstChild) {
    filmListContainerElement.removeChild(filmListContainerElement.lastChild);
  }
};

const siteBodyElement = document.querySelector(`body`);
const siteHeaderElement = siteBodyElement.querySelector(`.header`);
const siteMainElement = siteBodyElement.querySelector(`.main`);

render(siteHeaderElement, new ProfileView().getElement(), RenderPosition.BEFOREEND);
render(siteMainElement, new MainNavigationView().getElement(), RenderPosition.AFTERBEGIN);

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

render(siteMainElement, new SortView().getElement(), RenderPosition.BEFOREEND);

const sortMenuItems = siteMainElement.querySelectorAll(`.sort__button`);

render(siteMainElement, new FilmsView().getElement(), RenderPosition.BEFOREEND);

const filmsElement = document.querySelector(`.films`);
const filmsListElement = filmsElement.querySelector(`.films-list`);

const filmListContainerElement = filmsListElement.querySelector(`.films-list__container`);

render(filmsListElement, new ShowMoreButtonView().getElement(), RenderPosition.BEFOREEND);
const showMoreButton = filmsListElement.querySelector(`.films-list__show-more`);

/* Порции фильмов */

let filmsRenderCount = FILMS_CARDS_COUNT;
let delta = MAX_MOCK_FILMS_COUNT - filmsRenderCount;

const renderStartFilmsCards = (array) => {
  if (array.length <= FILMS_CARDS_COUNT) {
    for (let i = 0; i < array.length; i++) {
      render(filmListContainerElement, (array[i]).getElement(), RenderPosition.BEFOREEND);
    }
    showMoreButton.classList.add(`visually-hidden`);
  } else {
    for (let i = 0; i < filmsRenderCount; i++) {
      render(filmListContainerElement, new FilmCardView(array[i]).getElement(), RenderPosition.BEFOREEND);
    }
  }
};

renderStartFilmsCards(films);

const showFilmsPortions = (array) => {
  delta = array.length - filmsRenderCount;

  if (delta >= FILMS_CARDS_COUNT) {
    filmsRenderCount += FILMS_CARDS_COUNT;

    for (let i = 0; i < filmsRenderCount; i++) {
      render(filmListContainerElement, new FilmCardView(array[i]).getElement(), RenderPosition.BEFOREEND);
    }
  } else if (delta <= FILMS_CARDS_COUNT) {
    filmsRenderCount = MAX_MOCK_FILMS_COUNT;
    for (let i = 0; i < filmsRenderCount; i++) {
      render(filmListContainerElement, new FilmCardView(array[i]).getElement(), RenderPosition.BEFOREEND);
    }
    showMoreButton.classList.add(`visually-hidden`);
    showMoreButton.removeEventListener(`click`, onShowMoreButtonClick);
  }
};

/* Кнопка */

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
      render(filmsListExtraContainerElement, new FilmCardView(topRatedFilms[x]).getElement(), RenderPosition.BEFOREEND);
    }
  } else {
    for (let x = 0; x < FILMS_CARDS_EXTRA_COUNT; x++) {
      render(filmsListExtraContainerElement, new FilmCardView(mostCommentedFilms[x]).getElement(), RenderPosition.BEFOREEND);
    }
  }
});

const footerElement = siteBodyElement.querySelector(`.footer`);
const footerStatisticsElement = footerElement.querySelector(`.footer__statistics`);
render(footerStatisticsElement, new FooterStatisticsView(films.length).getElement(), RenderPosition.BEFOREEND);

/* Попап */

const filmsListContainerElements = filmsElement.querySelectorAll(`.films-list__container`);
filmsListContainerElements.forEach((element) => {
  const onFilmsListContainerElementClick = (e) => {
    e.preventDefault();

    const filmId = e.target.parentNode.id;
    const film = films.find((item) => item.id === filmId);

    if (e.target.classList.contains(`film-card__title`) || e.target.classList.contains(`film-card__poster`) || e.target.classList.contains(`film-card__comments`)) {

      render(footerElement, new FilmDetailsPopupView(film).getElement(), RenderPosition.AFTERBEGIN);
      siteBodyElement.classList.add(`modal-open`);

      const filmDetailsElement = siteBodyElement.querySelector(`.film-details`);
      const commentsListElement = filmDetailsElement.querySelector(`.film-details__comments-list`);

      /* Комменты */

      const commentsCount = film.comments;
      const comments = new Array(commentsCount).fill(0).map(generateComment);

      for (let i = 0; i < comments.length; i++) {
        render(commentsListElement, new CommentView(comments[i]).getElement(), RenderPosition.AFTERBEGIN);
      }

      const commentsCountElement = filmDetailsElement.querySelector(`.film-details__comments-count`);
      commentsCountElement.textContent = `${commentsCount}`;

      const closePopupButton = filmDetailsElement.querySelector(`.film-details__close-btn`);

      const onClosePopupButtonClick = (evt) => {
        evt.preventDefault();
        filmDetailsElement.remove();
        siteBodyElement.classList.remove(`modal-open`);
        closePopupButton.removeEventListener(`click`, onClosePopupButtonClick);
      };

      closePopupButton.addEventListener(`click`, onClosePopupButtonClick);

      const onFilmDetailsPopupKeydown = (event) => {
        if (event.code === Key.ESC) {
          event.preventDefault();
          filmDetailsElement.remove();
          siteBodyElement.classList.remove(`modal-open`);
        }
        document.removeEventListener(`keydown`, onFilmDetailsPopupKeydown);
      };

      document.addEventListener(`keydown`, onFilmDetailsPopupKeydown);
    }
  };

  element.addEventListener(`click`, onFilmsListContainerElementClick);
});

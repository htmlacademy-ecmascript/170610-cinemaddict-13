import MovieView from "../view/film-card.js";
import PopupView from "../view/film-popup.js";
/* import CommentView from "../view/comment.js";
import {generateComment} from "../mock/comment.js";*/
import {RenderPosition, render, replace, remove} from "../utils/render.js";

export default class Movie {
  constructor(movieListContainer) {
    this._moviesListContainer = movieListContainer;

    this._movieComponent = null;
    this._popupComponent = null;

    this._handleMovieClick = this._handleMovieClick.bind(this);
    this._handleClosePopupButton = this._handleClosePopupButton.bind(this);
    this._escKeyDownHandler = this._escKeyDownHandler.bind(this);

  }

  init(film) {
    this._movie = film;

    const prevMovieComponent = this._movieComponent;
    const prevPopupComponent = this._popupComponent;

    this._movieComponent = new MovieView(this._movie);
    this._popupComponent = new PopupView(this._movie);

    this._movieComponent.setClickHandler(this._handleMovieClick);

    if (prevMovieComponent === null || prevPopupComponent === null) {
      render(this._moviesListContainer, this._movieComponent, RenderPosition.AFTERBEGIN);
    }

    /* Очистка не работает https://github.com/htmlacademy-ecmascript/taskmanager-13/commit/c33f1d8d21d7b259bc22a943b0ddf2a409543de2 */

    /* if (this._moviesListContainer.getElement().contains(prevMovieComponent.getElement())) {
      replace(this._movieComponent, prevMovieComponent);
    }*/

    /* if (this._moviesListContainer.getElement().contains(prevPopupComponent.getElement())) {
      replace(this._popupComponent, prevPopupComponent);
    }*/

    /* remove(prevMovieComponent);
    remove(prevPopupComponent);*/
  }

  destroy() {
    remove(this._movieComponent);
    remove(this._popupComponent);
  }

  _handleClosePopupButton(e) {
    e.preventDefault();
    this._replacePopupToCard();
    this._popupComponent.getElement().querySelector(`.film-details__close-btn`).removeEventListener(`click`, this._handleClosePopupButton);
  }

  _escKeyDownHandler(e) {
    if (e.key === `Escape` || e.key === `Esc`) {
      e.preventDefault();
      this._replacePopupToCard();
    }
  }

  _replaceCardToPopup() {
    replace(this._popupComponent, this._moviesListContainer);
    this._popupComponent.getElement().querySelector(`.film-details__close-btn`).addEventListener(`click`, this._handleClosePopupButton);
    document.addEventListener(`keydown`, this._escKeyDownHandler);
    document.querySelector(`body`).classList.add(`hide-overflow`);
  }

  _replacePopupToCard() {
    replace(this._moviesListContainer, this._popupComponent);
    document.removeEventListener(`keydown`, this._escKeyDownHandler);
    document.querySelector(`body`).classList.remove(`hide-overflow`);
  }

  _handleMovieClick() {
    this._replaceCardToPopup();
  }

}

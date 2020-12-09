import MovieView from "../view/film-card.js";
import PopupView from "../view/film-popup.js";
import CommentView from "../view/comment.js";
import {generateComment} from "../mock/comment.js";
import {RenderPosition, render, remove, replace} from "../utils/render.js";

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

    this._movieComponent = new MovieView(film);
    this._popupComponent = new PopupView(film);

    this._movieComponent.setClickHandler(this._handleMovieClick);

    render(this._moviesListContainer, this._movieComponent, RenderPosition.AFTERBEGIN);

  }

  _handleClosePopupButton(e) {
    e.preventDefault();
    this._replacePopupToCard();
    this._popupComponent.getElement(`film-details__close-btn`).removeEventListener(`click`, this._handleClosePopupButton);
  }

  _escKeyDownHandler(e) {
    if (e.key === `Escape` || e.key === `Esc`) {
      e.preventDefault();
      this._replacePopupToCard();
    }
  }

  _replaceCardToPopup() {
    replace(this._popupComponent, this._moviesListContainer);
    this._popupComponent.getElement(`film-details__close-btn`).addEventListener(`click`, this._handleClosePopupButton);
    document.addEventListener(`keydown`, this._escKeyDownHandler);
    document.querySelector(`.main`).classList.add(`hide-overflow`);
  }

  _replacePopupToCard() {
    replace(this._moviesListContainer, this._popupComponent);
    document.removeEventListener(`keydown`, this._escKeyDownHandler);
    document.querySelector(`.main`).classList.remove(`hide-overflow`);
  }

  _handleMovieClick() {
    this._replaceCardToPopup();
  }

}

import MovieView from "../view/film-card.js";
import PopupView from "../view/film-details-popup.js";
import CommentView from "../view/comment.js";
import {generateComment} from "../mock/comment.js";
import {RenderPosition, render, remove, replace} from "../utils/render.js";

export default class Movie {
  constructor(movieListContainer) {
    this._moviesListContainer = movieListContainer;

    this._movieComponent = null;
    this._popupComponent = null;

    this._handleMovieClick = this._handleMovieClick.bind(this);
    this._escKeyDownHandler = this._escKeyDownHandler.bind(this);

  }

  init(film) {
    this._movie = film;

    this._movieComponent = new MovieView(film);
    this._popupComponent = new PopupView(film);

    this._movieComponent.setClickHandler(this._handleMovieClick);

    render(this._moviesListContainer, this._movieComponent, RenderPosition.AFTERBEGIN);

  }

  _escKeyDownHandler(evt) {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      this._replacePopupToCard();
    }
  }

  _replaceCardToPopup() {
    replace(this._popupComponent, this._moviesListContainer);
    document.addEventListener(`keydown`, this._escKeyDownHandler);
  }

  _replacePopupToCard() {
    replace(this._moviesListContainer, this._popupComponent);
    document.removeEventListener(`keydown`, this._escKeyDownHandler);
  }

  _handleMovieClick() {
    this._replaceCardToPopup();
  }

}

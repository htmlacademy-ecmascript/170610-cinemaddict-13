import MovieView from "../view/film-card.js";
import PopupView from "../view/film-details-popup.js";
import CommentView from "../view/comment.js";
import {generateComment} from "../mock/comment.js";
import {RenderPosition, render, remove, replace} from "../utils/render.js";

export default class Movie {
  constructor(movieListContainer) {
    this._moviesListContainer = movieListContainer;

    this._movieComponent = null;
    this._moviePopupComponent = null;

/*    this._handleEditClick = this._handleEditClick.bind(this);
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
    this._escKeyDownHandler = this._escKeyDownHandler.bind(this);*/
  }

  init(film) {
    this._movie = film;

    this._movieComponent = new MovieView(film);
    this._moviePopupComponent = new PopupView(film);
/*
    this._taskComponent.setEditClickHandler(this._handleEditClick);
    this._taskEditComponent.setFormSubmitHandler(this._handleFormSubmit);
*/

    render(this._moviesListContainer, this._movieComponent, RenderPosition.AFTERBEGIN);
  }

  /*_replaceCardToForm() {
    replace(this._taskEditComponent, this._taskComponent);
    document.addEventListener(`keydown`, this._escKeyDownHandler);
  }

  _replaceFormToCard() {
    replace(this._taskComponent, this._taskEditComponent);
    document.removeEventListener(`keydown`, this._escKeyDownHandler);
  }

  _escKeyDownHandler(evt) {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      this._replaceFormToCard();
    }
  }

  _handleEditClick() {
    this._replaceCardToForm();
  }

  _handleFormSubmit() {
    this._replaceFormToCard();
  }*/
}

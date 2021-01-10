import CardView from "../view/card.js";
import PopupView from "../view/popup.js";
import {RenderPosition, render, replace, remove} from "../utils/render.js";

const siteBodyElement = document.querySelector(`body`);

export default class Movie {
  constructor(moviesListContainer) {
    this._moviesListContainer = moviesListContainer;

    this._cardComponent = null;
    this._popupComponent = null;

    this._handleShowPopupClick = this._handleShowPopupClick.bind(this);
    this._handleCloseButtonClick = this._handleCloseButtonClick.bind(this);

    this._handleEscKeyDown = this._handleEscKeyDown.bind(this);

  }

  init(movie) {
    this._movie = movie;

    this._cardComponent = new CardView(movie);
    this._popupComponent = new PopupView(movie);

    this._cardComponent.setShowPopupClickHandler(this._handleShowPopupClick);
    this._popupComponent.setCloseButtonClickHandler(this._handleCloseButtonClick);

    render(this._moviesListContainer, this._cardComponent, RenderPosition.AFTERBEGIN);

  }

  _replaceCardToPopup() {
    render(siteBodyElement, this._popupComponent, RenderPosition.BEFOREEND);
    document.addEventListener(`keydown`, this._handleEscKeyDown);
  }

  _replacePopupToCard() {
    this._popupComponent.getElement().remove();
    document.removeEventListener(`keydown`, this._handleEscKeyDown);
  }

  _handleEscKeyDown(e) {
    if (e.key === `Escape` || e.key === `Esc`) {
      e.preventDefault();
      this._replacePopupToCard();
    }
  }

  _handleShowPopupClick() {
    this._replaceCardToPopup();
  }

  _handleCloseButtonClick() {
    this._replacePopupToCard();
  }

}



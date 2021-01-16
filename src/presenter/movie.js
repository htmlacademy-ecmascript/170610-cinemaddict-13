import CardView from "../view/card.js";
import PopupView from "../view/popup.js";
import {RenderPosition, render, replace, remove} from "../utils/render.js";

const Mode = {
  DEFAULT: `DEFAULT`,
  POPUP: `POPUP`
};

const siteBodyElement = document.querySelector(`body`);

export default class Movie {
  constructor(moviesListContainer, changeData, changeMode) {
    this._moviesListContainer = moviesListContainer;

    this._changeData = changeData;
    this._changeMode = changeMode;

    this._cardComponent = null;
    this._popupComponent = null;
    this._mode = Mode.DEFAULT;

    this._handleShowPopupClick = this._handleShowPopupClick.bind(this);
    this._handlePopupCloseButtonClick = this._handlePopupCloseButtonClick.bind(this);
    this._handleEscKeyDown = this._handleEscKeyDown.bind(this);

    this._handleWatchlistClick = this._handleWatchlistClick.bind(this);
    this._handleWatchedClick = this._handleWatchedClick.bind(this);
    this._handleFavoritesClick = this._handleFavoritesClick.bind(this);

    this._handlePopupWatchlistClick = this._handlePopupWatchlistClick.bind(this);
    this._handlePopupWatchedClick = this._handlePopupWatchedClick.bind(this);
    this._handlePopupFavoritesClick = this._handlePopupFavoritesClick.bind(this);

  }

  init(movie) {
    this._movie = movie;

    const prevCardComponent = this._cardComponent;
    const prevPopupComponent = this._popupComponent;

    this._cardComponent = new CardView(movie);
    this._popupComponent = new PopupView(movie);

    this._cardComponent.setShowPopupClickHandler(this._handleShowPopupClick);
    this._cardComponent.setWatchlistClickHandler(this._handleWatchlistClick);
    this._cardComponent.setWatchedClickHandler(this._handleWatchedClick);
    this._cardComponent.setFavoritesClickHandler(this._handleFavoritesClick);

    this._popupComponent.setCloseButtonClickHandler(this._handlePopupCloseButtonClick);
    this._popupComponent.setPopupWatchlistClickHandler(this._handlePopupWatchlistClick);
    this._popupComponent.setPopupWatchedClickHandler(this._handlePopupWatchedClick);
    this._popupComponent.setPopupFavoritesClickHandler(this._handlePopupFavoritesClick);

    if (prevCardComponent === null || prevPopupComponent === null) {
      render(this._moviesListContainer, this._cardComponent, RenderPosition.BEFOREEND);
      return;
    }

    if (this._mode === Mode.DEFAULT) {
      replace(this._cardComponent, prevCardComponent);
    }

    if (this._mode === Mode.POPUP) {
      replace(this._popupComponent, prevPopupComponent);
    }

    if (this._cardComponent._movie.isWatchlist === true) {
      this._cardComponent.getElement().querySelector(`.film-card__controls-item--add-to-watchlist`).classList.toggle(`film-card__controls-item--active`);
    }

    if (this._cardComponent._movie.isWatched === true) {
      this._cardComponent.getElement().querySelector(`.film-card__controls-item--mark-as-watched`).classList.toggle(`film-card__controls-item--active`);
    }

    if (this._cardComponent._movie.isFavorite === true) {
      this._cardComponent.getElement().querySelector(`.film-card__controls-item--favorite`).classList.toggle(`film-card__controls-item--active`);
    }

    remove(prevCardComponent);
    remove(prevPopupComponent);

  }

  destroy() {
    remove(this._cardComponent);
    remove(this._popupComponent);
  }

  resetView() {
    if (this._mode !== Mode.DEFAULT) {
      this._replacePopupToCard();
    }
  }

  _replaceCardToPopup() {
    render(siteBodyElement, this._popupComponent, RenderPosition.BEFOREEND);
    document.addEventListener(`keydown`, this._handleEscKeyDown);
    this._changeMode();
    this._mode = Mode.POPUP;
  }

  _replacePopupToCard() {
    this._popupComponent.getElement().remove();
    document.removeEventListener(`keydown`, this._handleEscKeyDown);
    this._mode = Mode.DEFAULT;
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


  _handleWatchlistClick() {
    this._changeData(
        Object.assign(
            {},
            this._movie,
            {
              isWatchlist: !this._movie.isWatchlist
            }
        )
    );
  }

  _handleWatchedClick() {
    this._changeData(
        Object.assign(
            {},
            this._movie,
            {
              isWatched: !this._movie.isWatched
            }
        )
    );
  }

  _handleFavoritesClick() {
    this._changeData(
        Object.assign(
            {},
            this._movie,
            {
              isFavorite: !this._movie.isFavorite
            }
        )
    );
  }

  _update() {
    console.log(1);
  }

  _handlePopupCloseButtonClick() {
    this._replacePopupToCard();
  }

  _handlePopupWatchlistClick() {
    this._update();
  }

  _handlePopupWatchedClick() {
    this._update();
  }

  _handlePopupFavoritesClick() {
    this._update();
  }

}



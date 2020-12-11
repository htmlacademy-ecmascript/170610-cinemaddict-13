import MovieView from "../view/film-card.js";
import PopupView from "../view/film-popup.js";
/* import CommentView from "../view/comment.js";
import {generateComment} from "../mock/comment.js";*/
import {RenderPosition, render, replace, remove} from "../utils/render.js";

const Mode = {
  DEFAULT: `DEFAULT`,
  POPUP: `POPUP`
};

export default class Movie {
  constructor(movieListContainer, changeData, changeMode) {
    this._movieListContainer = movieListContainer;
    this._changeData = changeData;
    this._changeMode = changeMode;

    this._movieComponent = null;
    this._popupComponent = null;
    this._mode = Mode.DEFAULT;

    this._handleMovieClick = this._handleMovieClick.bind(this);
    this._handleClosePopupButton = this._handleClosePopupButton.bind(this);
    this._escKeyDownHandler = this._escKeyDownHandler.bind(this);

    this._handleWatchlistClick = this._handleWatchlistClick.bind(this);
    this._handleWatchedClick = this._handleWatchedClick.bind(this);
    this._handleFavoritesClick = this._handleFavoritesClick.bind(this);

  }

  init(movie) {
    this._movie = movie;

    const prevMovieComponent = this._movieComponent;
    const prevPopupComponent = this._popupComponent;

    this._movieComponent = new MovieView(movie);
    this._popupComponent = new PopupView(movie);

    this._movieComponent.setCardClickHandler(this._handleMovieClick);

    this._movieComponent.setWatchlistClickHandler(this._handleWatchlistClick);
    this._movieComponent.setWatchedClickHandler(this._handleWatchedClick);
    this._movieComponent.setFavoritesClickHandler(this._handleFavoritesClick);

    this._popupComponent.setWatchlistClickHandler(this._handleWatchlistClick);
    this._popupComponent.setWatchedClickHandler(this._handleWatchedClick);
    this._popupComponent.setFavoritesClickHandler(this._handleFavoritesClick);

    if (prevMovieComponent === null || prevPopupComponent === null) {
      render(this._movieListContainer, this._movieComponent, RenderPosition.BEFOREEND);
      return;
    }

    if (this._mode === Mode.DEFAULT) {
      replace(this._movieComponent, prevMovieComponent);
    }

    if (this._mode === Mode.POPUP) {
      replace(this._popupComponent, prevPopupComponent);
    }

    remove(prevMovieComponent);
    remove(prevPopupComponent);
  }

  destroy() {
    remove(this._movieComponent);
    remove(this._popupComponent);
  }

  resetView() {
    if (this._mode !== Mode.DEFAULT) {
      this._replacePopupToCard();
    }
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
    replace(this._popupComponent, this._movieComponent);
    this._popupComponent.getElement().querySelector(`.film-details__close-btn`).addEventListener(`click`, this._handleClosePopupButton);
    document.addEventListener(`keydown`, this._escKeyDownHandler);
    document.querySelector(`body`).classList.add(`hide-overflow`);
    this._changeMode();
    this._mode = Mode.POPUP;
  }

  _replacePopupToCard() {
    replace(this._movieComponent, this._popupComponent);
    document.removeEventListener(`keydown`, this._escKeyDownHandler);
    document.querySelector(`body`).classList.remove(`hide-overflow`);
    this._mode = Mode.DEFAULT;
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

  _handleMovieClick() {
    /*    this._changeData(film); */
    this._replaceCardToPopup();
  }

}

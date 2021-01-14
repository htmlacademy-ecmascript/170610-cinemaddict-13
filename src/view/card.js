import AbstractView from "./abstract.js";

const createCardTemplate = (film) => {

  const {title, rating, date, duration, genre, poster, description, comments} = film;

  return `<article class="film-card">
          <h3 class="film-card__title">${title.translation}</h3>
          <p class="film-card__rating">${rating}</p>
          <p class="film-card__info">
            <span class="film-card__year">${date}</span>
            <span class="film-card__duration">${duration.hour}h ${duration.minute}m</span>
            <span class="film-card__genre">${genre[0].title}</span>
          </p>
          <img src="./images/posters/${poster}" alt="${title.translation}" class="film-card__poster">
          <p class="film-card__description">${description}.</p>
          <a class="film-card__comments">${comments} comments</a>
          <div class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite" type="button">Mark as favorite</button>
          </div>
        </article>`;
};

export default class CardView extends AbstractView {
  constructor(movie) {
    super();
    this._movie = movie;

    this._showPopupClickHandler = this._showPopupClickHandler.bind(this);

    this._watchlistClickHandler = this._watchlistClickHandler.bind(this);
    this._watchedClickHandler = this._watchedClickHandler.bind(this);
    this._favoritesClickHandler = this._favoritesClickHandler.bind(this);

  }

  getTemplate() {
    return createCardTemplate(this._movie);
  }


  _showPopupClickHandler(e) {
    e.preventDefault();
    if (e.target.classList.contains(`film-card__poster`) || e.target.classList.contains(`film-card__title`) || e.target.classList.contains(`film-card__comments`)) {
      this._callback.showPopupClick();
    }
  }

  _watchlistClickHandler(e) {
    e.preventDefault();
    this._callback.watchlistClick();
  }

  _watchedClickHandler(e) {
    e.preventDefault();
    this._callback.watchedClick();
  }

  _favoritesClickHandler(e) {
    e.preventDefault();
    this._callback.favoritesClick();
  }

  setShowPopupClickHandler(callback) {
    this._callback.showPopupClick = callback;
    this.getElement().addEventListener(`click`, this._showPopupClickHandler);
  }

  setWatchlistClickHandler(callback) {
    this._callback.watchlistClick = callback;
    this.getElement().querySelector(`.film-card__controls-item--add-to-watchlist`).addEventListener(`click`, this._watchlistClickHandler);
  }

  setWatchedClickHandler(callback) {
    this._callback.watchedClick = callback;
    this.getElement().querySelector(`.film-card__controls-item--mark-as-watched`).addEventListener(`click`, this._watchedClickHandler);
  }

  setFavoritesClickHandler(callback) {
    this._callback.favoritesClick = callback;
    this.getElement().querySelector(`.film-card__controls-item--favorite`).addEventListener(`click`, this._favoritesClickHandler);
  }

}

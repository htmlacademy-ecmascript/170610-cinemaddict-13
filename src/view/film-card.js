import AbstractView from "./abstract.js";

const createFilmCardTemplate = (film) => {

  const {title, rating, date, duration, genre, poster, description, comments} = film;

  return `<article class="film-card">
          <h3 class="film-card__title">${title.translation}</h3>
          <p class="film-card__rating">${rating}</p>
          <p class="film-card__info">
            <span class="film-card__year">${date}</span>
            <span class="film-card__duration">${duration.hour}h ${duration.minute}m</span>
            <span class="film-card__genre">${genre[0].title}</span>
          </p>
          <img src="./images/posters/${poster}" alt="${title}" class="film-card__poster">
          <p class="film-card__description">${description}.</p>
          <a class="film-card__comments">${comments} comments</a>
          <div class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite" type="button">Mark as favorite</button>
          </div>
        </article>`;
};

export default class FilmCardView extends AbstractView {
  constructor(film) {
    super();
    this._film = film;
    this._clickHandler = this._clickHandler.bind(this);
  }

  getTemplate() {
    return createFilmCardTemplate(this._film);
  }

  _clickHandler(e) {
    e.preventDefault();
    if (e.target.classList.contains(`film-card__poster`) || e.target.classList.contains(`film-card__title`) || e.target.classList.contains(`film-card__comments`)) {
      this._callback.click();
    }
  }

  setClickHandler(callback) {
    this._callback.click = callback;
    this.getElement().addEventListener(`click`, this._clickHandler);
  }
}

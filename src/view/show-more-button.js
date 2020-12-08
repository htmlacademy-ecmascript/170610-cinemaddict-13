import AbstractView from "./abstract.js";

const createShowMoreButtonTemplate = () => {
  return `<button class="films-list__show-more">Show more</button>`;
};

export default class ShowMoreButtonView extends AbstractView {
  constructor() {
    super();
    this._clickHandler = this._clickHandler.bind(this);
  }

  getTemplate() {
    return createShowMoreButtonTemplate();
  }

  _clickHandler(e) {
    e.preventDefault();
    this._callback.click();
  }

  setClickHandler(callback) {
    this._callback.click = callback;
    this.getElement().addEventListener(`click`, this._clickHandler);
  }

  unsetClickHandler(callback) {
    this._callback.click = callback;
    this.getElement().removeEventListener(`click`, this._clickHandler);
  }
}

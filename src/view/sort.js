import AbstractView from "./abstract.js";
import {SortType} from "../const.js";

const createSortTemplate = () => {
  return `<ul class="sort">
    <li><a href="#" class="sort__button sort__button--active" data-sort-type="${SortType.DEFAULT}">Sort by default</a></li>
    <li><a href="#" class="sort__button" data-sort-type="${SortType.DATE_UP}">Sort by date</a></li>
    <li><a href="#" class="sort__button" data-sort-type="${SortType.RATING_UP}">Sort by rating</a></li>
  </ul>`;
};

export default class SortView extends AbstractView {
  constructor() {
    super();

    this._sortTypeChangeHandler = this._sortTypeChangeHandler.bind(this);
  }

  _sortTypeChangeHandler(e) {
    if (e.target.tagName !== `A`) {
      return;
    }

    e.preventDefault();
    this._callback.sortTypeChange(e.target.dataset.sortType);
  }

  setSortTypeChangeHandler(callback) {
    this._callback._sortTypeChange = callback;
    this.getElement().addEventListener(`click`, this._sortTypeChangeHandler);
  }

  getTemplate() {
    return createSortTemplate();
  }
}

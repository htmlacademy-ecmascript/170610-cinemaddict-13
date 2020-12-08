import AbstractView from "./abstract.js";

const createFilmsListTemplate = () => {
  return `<div class="films-list__container">
</div>`;
};

export default class FilmsListView extends AbstractView {
  getTemplate() {
    return createFilmsListTemplate();
  }
}

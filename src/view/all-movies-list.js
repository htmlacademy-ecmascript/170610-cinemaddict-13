import AbstractView from "./abstract.js";

const createAllMoviesListTemplate = () => {
  return `<section class="films-list">
      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
    </section>
  </section>`;
};

export default class AllMoviesListView extends AbstractView {
  getTemplate() {
    return createAllMoviesListTemplate();
  }
}

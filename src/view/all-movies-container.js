import AbstractView from "./abstract.js";

const createAllMoviesContainerTemplate = () => {
  return `<section class="films">
  </section>`;
};

export default class AllMoviesContainerView extends AbstractView {
  getTemplate() {
    return createAllMoviesContainerTemplate();
  }
}

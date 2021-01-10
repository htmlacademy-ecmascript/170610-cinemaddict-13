import MainNavigationView from "../view/main-navigation.js";
import AllMoviesContainerView from "../view/all-movies-container.js";
import AllMoviesListView from "../view/all-movies-list.js";
import MoviesContainerView from "../view/movies-container.js";
import SortView from "../view/sort.js";
import NoMoviesView from "../view/no-movies.js";
import LoadMoreButtonView from "../view/load-more-button.js";
import MoviePresenter from "./movie.js";
import {updateItem} from "../utils/common.js";
import {RenderPosition, render, remove} from "../utils/render.js";

const MOVIES_COUNT_PER_STEP = 5;

export default class Board {
  constructor(boardContainer) {
    this._boardContainer = boardContainer;
    this._renderedMoviesCount = MOVIES_COUNT_PER_STEP;
    this._moviePresenter = {};

    this._mainNavigationComponent = new MainNavigationView();
    this._allMoviesContainerComponent = new AllMoviesContainerView();
    this._allMoviesListComponent = new AllMoviesListView();
    this._moviesContainerComponent = new MoviesContainerView();
    this._sortComponent = new SortView();
    this._noMoviesComponent = new NoMoviesView();
    this._loadMoreButtonComponent = new LoadMoreButtonView();

    this._handleMovieChange = this._handleMovieChange.bind(this);
    this._handleModeChange = this._handleModeChange.bind(this);
    this._handleLoadMoreButtonClick = this._handleLoadMoreButtonClick.bind(this);
  }

  init(boardMovies) {
    this._boardMovies = boardMovies.slice();
    render(this._boardContainer, this._mainNavigationComponent, RenderPosition.AFTERBEGIN);
    this._renderBoard();
  }

  _handleModeChange() {
    Object
      .values(this._moviePresenter)
      .forEach((presenter) => presenter.resetView());
  }

  _handleMovieChange(updatedMovie) {
    this._boardMovies = updateItem(this._boardMovies, updatedMovie);
    this._moviePresenter[updatedMovie.id].init(updatedMovie);
  }

  _renderSort() {
    render(this._boardContainer, this._sortComponent, RenderPosition.BEFOREEND);
  }

  _renderAllMoviesContainer() {
    render(this._boardContainer, this._allMoviesContainerComponent, RenderPosition.BEFOREEND);
    render(this._allMoviesContainerComponent, this._allMoviesListComponent, RenderPosition.BEFOREEND);
    render(this._allMoviesListComponent, this._moviesContainerComponent, RenderPosition.BEFOREEND);
  }

  _renderMovie(movie) {
    const moviePresenter = new MoviePresenter(this._moviesContainerComponent, this._handleMovieChange, this._handleModeChange);
    moviePresenter.init(movie);
    this._moviePresenter[movie.id] = moviePresenter;
  }

  _renderMovies(from, to) {
    this._boardMovies
      .slice(from, to)
      .forEach((boardMovie) => this._renderMovie(boardMovie));
  }

  _renderNoMovies() {
  }

  _handleLoadMoreButtonClick() {
    this._renderMovies(this._renderedMoviesCount, this._renderedMoviesCount + MOVIES_COUNT_PER_STEP);
    this._renderedMoviesCount += MOVIES_COUNT_PER_STEP;

    if (this._renderedMoviesCount >= this._boardMovies.length) {
      remove(this._loadMoreButtonComponent);
    }

  }

  _renderLoadMoreButton() {
    render(this._allMoviesListComponent, this._loadMoreButtonComponent, RenderPosition.BEFOREEND);
    this._loadMoreButtonComponent.setClickHandler(this._handleLoadMoreButtonClick);
  }

  _clearMoviesList() {
    Object
      .values(this._moviePresenter)
      .forEach((presenter) => presenter.destroy());
    this._moviePresenter = {};
    this._renderedMoviesCount = MOVIES_COUNT_PER_STEP;
    remove(this._loadMoreButtonComponent);
  }

  _renderMoviesList() {
    this._renderMovies(0, Math.min(this._boardMovies.length, MOVIES_COUNT_PER_STEP));

    if (this._boardMovies.length > MOVIES_COUNT_PER_STEP) {
      this._renderLoadMoreButton();
    }
  }

  _renderBoard() {
    if (this._boardMovies.length === 0) {
      this._renderNoMovies();
      return;
    }

    this._renderSort();

    this._renderAllMoviesContainer();

    this._renderMoviesList();
  }
}

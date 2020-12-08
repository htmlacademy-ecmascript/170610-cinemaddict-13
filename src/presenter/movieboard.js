import SortView from "../view/sort.js";
import FilmsView from "../view/films.js";
import AllMoviesView from "../view/all-movies.js";
import TopRatedMoviesView from "../view/top-rated.js";
import MostCommentedMoviesView from "../view/most-commented.js";
import FilmsListView from "../view/films-list.js";
import FilmCardView from "../view/film-card.js";
import NoFilmsView from "../view/no-films.js";
import FilmDetailsPopupView from "../view/film-details-popup.js";
import CommentView from "../view/comment.js";
import {sortByFieldAscending, sortByFieldDescending, removeActiveClass} from "../utils/common.js";
import {RenderPosition, render, remove} from "../utils/render.js";
import ShowMoreButtonView from "../view/show-more-button";

const FILMS_COUNT_PER_STEP = 5;
const FILMS_CARDS_EXTRA_COUNT = 2;

export default class MovieBoard {
  constructor(mainContainer) {
    this._mainComponent = mainContainer;
    this._renderedMovieCount = FILMS_COUNT_PER_STEP;

    this._sortComponent = new SortView();
    this._moviesComponent = new FilmsView();
    this._allMoviesComponent = new AllMoviesView();
    this._topRatedComponent = new TopRatedMoviesView();
    this._moviesListComponent = new FilmsListView();
    this._mostCommentedComponent = new MostCommentedMoviesView();
    this._noMovieComponent = new NoFilmsView();
    this._showMoreButtonComponent = new ShowMoreButtonView();

    this._handleShowMoreButtonClick = this._handleShowMoreButtonClick.bind(this);
  }

  init(films) {
    this._movieBoardFilms = films.slice();

    render(this._mainComponent, this._moviesComponent, RenderPosition.BEFOREEND);

    this._renderMovieBoard();
  }

  _renderMovieBoard() {

    if (this._movieBoardFilms.length === 0) {
      this._renderNoMovies();
      return;
    }

    this._renderSort();

    this._renderAllMovies();
    this._renderMovies(0, Math.min(this._movieBoardFilms.length, FILMS_COUNT_PER_STEP));
    this._renderTopRatedMovies();
    this._renderMostCommentedMovies();

    if (this._movieBoardFilms.length > FILMS_COUNT_PER_STEP) {
      this._renderShowMoreButton();
    }
  }

  _renderMovie(film) {
    const movieComponent = new FilmCardView(film);
    render(this._moviesListComponent, movieComponent, RenderPosition.AFTERBEGIN);
  }

  _renderMovies(from, to) {

    render(this._allMoviesComponent, this._moviesListComponent, RenderPosition.AFTERBEGIN);
    this._movieBoardFilms
      .slice(from, to)
      .forEach((movieBoardFilm) => this._renderMovie(movieBoardFilm));
  }

  _renderAllMovies() {
    render(this._moviesComponent, this._allMoviesComponent, RenderPosition.BEFOREEND);
  }

  _renderTopRatedMovies() {
    render(this._moviesComponent, this._topRatedComponent, RenderPosition.BEFOREEND);
  }

  _renderMostCommentedMovies() {
    render(this._moviesComponent, this._mostCommentedComponent, RenderPosition.BEFOREEND);
  }

  _renderNoMovies() {
    render(this._mainComponent, this._noMovieComponent, RenderPosition.AFTERBEGIN);
  }

  _renderSort() {
    render(this._mainComponent, this._sortComponent, RenderPosition.AFTERBEGIN);
  }

  _handleShowMoreButtonClick() {
    this._renderMovies(this._renderedMovieCount, this._renderedMovieCount + FILMS_COUNT_PER_STEP);
    this._renderedMovieCount += FILMS_COUNT_PER_STEP;
    console.log(this._renderedMovieCount);

    if (this._renderedMovieCount >= this._movieBoardFilms.length) {
      remove(this._showMoreButtonComponent);
    }

  }

  _renderShowMoreButton() {
    render(this._allMoviesComponent, this._showMoreButtonComponent, RenderPosition.BEFOREEND);

    this._showMoreButtonComponent.setClickHandler(this._handleShowMoreButtonClick);
  }
}

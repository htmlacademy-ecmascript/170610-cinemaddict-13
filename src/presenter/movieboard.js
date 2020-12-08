import SortView from "../view/sort.js";
import FilmsView from "../view/films.js";
import AllMoviesView from "../view/all-movies.js";
import TopRatedMoviesView from "../view/top-rated.js";
import MostCommentedMoviesView from "../view/most-commented.js";
import FilmCardView from "../view/film-card.js";
import NoFilmsView from "../view/no-films.js";
import CommentView from "../view/comment.js";
import FilmDetailsPopupView from "../view/film-details-popup.js";
import {sortByFieldAscending, sortByFieldDescending, removeActiveClass} from "../utils/common.js";
import {RenderPosition, render, clearRenderedElements} from "../utils/render.js";
import ShowMoreButtonView from "../view/show-more-button";

const FILMS_COUNT_PER_STEP = 5;

export default class MovieBoard {
  constructor(mainComponent) {
    this._mainComponent = mainComponent;
    this._sortComponent = new SortView();
    this._movieListComponent = new FilmsView();
    this._allMoviesComponent = new AllMoviesView();
    this._topRatedComponent = new TopRatedMoviesView();
    this._mostCommentedComponent = new MostCommentedMoviesView();
    this._noMovieComponent = new NoFilmsView();
    this._showMoreButtonComponent = new ShowMoreButtonView();
  }

  init(films) {
    this._movieBoardFilms = films.slice();

    render(this._mainComponent, this._movieListComponent, RenderPosition.BEFOREEND);

    this._renderMovieBoard();
  }

  _renderMovieBoard() {

    if (this._movieBoardFilms.length === 0) {
      this._renderNoMovies();
      return;
    }

    this._renderSort();

    this._renderAllMovies(0, Math.min(this._movieBoardFilms.length, FILMS_COUNT_PER_STEP));
    this._renderTopRatedMovies();
    this._renderMostCommentedMovies();

    if (this._movieBoardFilms.length > FILMS_COUNT_PER_STEP) {
      this._renderShowMoreButton();
    }
  }

  _renderMovie() {
  }

  _renderAllMovies(from, to) {
    render(this._movieListComponent, this._allMoviesComponent, RenderPosition.BEFOREEND);
  }

  _renderTopRatedMovies() {
    render(this._movieListComponent, this._topRatedComponent, RenderPosition.BEFOREEND);
  }

  _renderMostCommentedMovies() {
    render(this._movieListComponent, this._mostCommentedComponent, RenderPosition.BEFOREEND);
  }

  _renderShowMoreButton() {
    render(this._allMoviesComponent, this._showMoreButtonComponent, RenderPosition.BEFOREEND);
  }

  _renderNoMovies() {
    render(this._mainComponent, this._noMovieComponent, RenderPosition.AFTERBEGIN);
  }

  _renderSort() {
    render(this._mainComponent, this._sortComponent, RenderPosition.AFTERBEGIN);
  }

}

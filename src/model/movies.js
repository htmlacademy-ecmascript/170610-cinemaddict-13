import Observer from "../utils/observer.js";

export default class Movies extends Observer {
  constructor() {
    super();
    this._movies = [];
  }

  setTasks(movies) {
    this._movies = movies.slice();
  }

  getTasks() {
    return this._movies;
  }
}

import {getRandom, getRandomInteger, shuffleArray, getRandomIndex} from "../mock/utils.js";

const MAX_RATING = 10;
const MIN_RANDOM_YEAR = 1895;
const MAX_RANDOM_YEAR = 2020;
const MIN_RANDOM_HOUR = 1;
const MAX_RANDOM_HOUR = 3;
const MIN_RANDOM_MINUTE = 1;
const MAX_RANDOM_MINUTE = 59;
const MIN_RANDOM_SENTENCES = 1;
const MAX_RANDOM_SENTENCES = 5;
const MAX_COMMENTS = 5;

const generateTitle = () => {
  const textTitle = `Побег из Шоушенка; Крёстный отец; Крёстный отец 2; Тёмный рыцарь; 12 разгневанных мужчин; Список Шиндлера; Властелин колец: Возвращение короля; Криминальное чтиво; Хороший, плохой, злой; Властелин колец: Братство Кольца; Бойцовский клуб; Форрест Гамп; Начало; Властелин колец: Две крепости; Звёздные войны. Эпизод V: Империя наносит ответный удар; Матрица; Славные парни; Пролетая над гнездом кукушки; Семь самураев; Семь; Жизнь прекрасна; Город Бога; Молчание ягнят; Эта прекрасная жизнь; Звёздные войны. Эпизод IV: Новая надежда; Спасти рядового Райана; Унесённые призраками; Зелёная миля; Паразиты; Интерстеллар; Леон; Подозрительные лица; Харакири; Король Лев; Назад в будущее; Пианист; Терминатор 2: Судный день; Американская история Икс; Новые времена; Психо; Гладиатор; Огни большого города; Отступники; 1+1; Одержимость; Гамильтон; Престиж; Могила светлячков; Однажды на Диком Западе; Касабланка; Новый кинотеатр «Парадизо»; Окно во двор; Чужой; Апокалипсис сегодня`;
  const titles = textTitle.split(`; `);
  const title = titles[getRandomIndex(titles)];
  return title;
};

const generateRating = () => {
  const rating = getRandom(MAX_RATING).toFixed(1);
  return rating;
};

const generateYear = () => {
  const year = getRandomInteger(MIN_RANDOM_YEAR, MAX_RANDOM_YEAR);
  return year;
};

const generateDuration = () => {
  const duration = {
    hour: getRandomInteger(MIN_RANDOM_HOUR, MAX_RANDOM_HOUR),
    minute: getRandomInteger(MIN_RANDOM_MINUTE, MAX_RANDOM_MINUTE),
  };

  return duration;
};

const generateGenre = () => {
  const textGenre = `Аниме; Биографии; Боевики; Вестерны; Военные; Детективы; Детские; Документальные; Драмы; Игры; Исторические; Комедии; Концерты; Короткометражки; Криминал; Мелодрамы; Музыкальные; Мультфильмы; Мюзиклы; Новости; Приключения; Реальное ТВ; Семейные; Спортивные; Ток-шоу; Триллеры; Ужасы; Фантастика; Фильмы-нуар; Фэнтези; Церемонии`;
  const genres = textGenre.split(`;`);
  const genre = genres[getRandomIndex(genres)];
  return genre;
};

const generatePoster = () => {
  const textPosters = `made-for-each-other.png; popeye-meets-sinbad.png; sagebrush-trail.jpg; santa-claus-conquers-the-martians.jpg; the-dance-of-life.jpg; the-great-flamarion.jpg; the-man-with-the-golden-arm.jpg`;
  const posters = textPosters.split(`; `);
  const poster = posters[getRandomIndex(posters)];
  return poster;
};

const generateDescription = () => {
  const textDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;
  const descriptions = textDescription.split(`.`);
  shuffleArray(descriptions);
  const description = descriptions.slice(0, getRandomInteger(MIN_RANDOM_SENTENCES, MAX_RANDOM_SENTENCES));
  return description.join(`. `);
};

const generateComments = () => {
  const comments = new Array(getRandomInteger(0, MAX_COMMENTS));
  return comments.length;
};

export const generateFilm = () => {
  return {
    title: generateTitle(),
    rating: generateRating(),
    year: generateYear(),
    duration: generateDuration(),
    genre: generateGenre(),
    poster: generatePoster(),
    description: generateDescription(),
    comments: generateComments(),
    isWatchlist: false,
    isFavorite: false
  };
};

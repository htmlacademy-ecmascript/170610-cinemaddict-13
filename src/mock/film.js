const MIN_RANDOM_SENTENCES = 1;
const MAX_RANDOM_SENTENCES = 5;

// Функция из интернета по генерации случайного числа из диапазона
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const generateTitle = () => {
  const textTitle = `Побег из Шоушенка; Крёстный отец; Крёстный отец 2; Тёмный рыцарь; 12 разгневанных мужчин; Список Шиндлера; Властелин колец: Возвращение короля; Криминальное чтиво; Хороший, плохой, злой; Властелин колец: Братство Кольца; Бойцовский клуб; Форрест Гамп; Начало; Властелин колец: Две крепости; Звёздные войны. Эпизод V: Империя наносит ответный удар; Матрица; Славные парни; Пролетая над гнездом кукушки; Семь самураев; Семь; Жизнь прекрасна; Город Бога; Молчание ягнят; Эта прекрасная жизнь; Звёздные войны. Эпизод IV: Новая надежда; Спасти рядового Райана; Унесённые призраками; Зелёная миля; Паразиты; Интерстеллар; Леон; Подозрительные лица; Харакири; Король Лев; Назад в будущее; Пианист; Терминатор 2: Судный день; Американская история Икс; Новые времена; Психо; Гладиатор; Огни большого города; Отступники; 1+1; Одержимость; Гамильтон; Престиж; Могила светлячков; Однажды на Диком Западе; Касабланка; Новый кинотеатр «Парадизо»; Окно во двор; Чужой; Апокалипсис сегодня`;
  const titles = textTitle.split(`; `);
  const title = titles[getRandomInteger(0, titles.length - 1)];
  return title;
};

const generatePoster = () => {
  const textPosters = `made-for-each-other.png; popeye-meets-sinbad.png; sagebrush-trail.jpg; santa-claus-conquers-the-martians.jpg; the-dance-of-life.jpg; the-great-flamarion.jpg; the-man-with-the-golden-arm.jpg`;
  const posters = textPosters.split(`; `);
  const poster = posters[getRandomInteger(0, posters.length - 1)];
  return poster;
};

const generateDescription = () => {
  const textDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;
  const descriptions = textDescription.split(`.`);
  shuffleArray(descriptions);
  const description = descriptions.slice(0, getRandomInteger(MIN_RANDOM_SENTENCES, MAX_RANDOM_SENTENCES));
  return description.join(`. `);
};

export const generateFilm = () => {
  return {
    title: generateTitle(),
    rating: `8.3`,
    year: `1929`,
    duration: `1h 55m`,
    genre: `Musical`,
    poster: `./images/posters/${generatePoster()}`,
    description: generateDescription(),
    comments: `5 comments`,
    isWatchlist: false,
    isFavorite: false
  };
};

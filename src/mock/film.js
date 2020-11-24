import {getRandom, getRandomInteger, shuffleArray, getRandomIndex} from "./utils";
import {nanoid} from 'nanoid';
import dayjs from "dayjs";

const MAX_RATING = 10;
const MIN_RANDOM_HOUR = 1;
const MAX_RANDOM_HOUR = 3;
const MIN_RANDOM_MINUTE = 1;
const MAX_RANDOM_MINUTE = 59;
const MIN_RANDOM_SENTENCES = 1;
const MAX_RANDOM_SENTENCES = 5;
const MAX_COMMENTS = 5;
const MAX_GENRES = 3;

const generateTitle = () => {
  const titles = [
    {
      original: `The Shawshank Redemption`,
      translation: `Побег из Шоушенка`,
    },
    {
      original: `The Godfather`,
      translation: `Крёстный отец`,
    },
    {
      original: `The Dark Knight`,
      translation: `Тёмный рыцарь`,
    },
    {
      original: `12 Angry Men`,
      translation: `12 разгневанных мужчин`,
    },
    {
      original: `Schindler's List`,
      translation: `Список Шиндлера`,
    },
    {
      original: `Pulp Fiction`,
      translation: `Криминальное чтиво`,
    },
    {
      original: `Il buono, il brutto, il cattivo`,
      translation: `Хороший, плохой, злой`,
    },
    {
      original: `Fight Club`,
      translation: `Бойцовский клуб`,
    },
    {
      original: `Forrest Gump`,
      translation: `Форрест Гамп`,
    },
    {
      original: `Inception`,
      translation: `Начало`,
    },
    {
      original: `The Matrix`,
      translation: `Матрица`,
    },
    {
      original: `The Nice Guys`,
      translation: `Славные парни`,
    },
    {
      original: `One Flew Over the Cuckoo's Nest`,
      translation: `Пролетая над гнездом кукушки`,
    },
    {
      original: `Shichinin no samurai`,
      translation: `Семь самураев`,
    },
    {
      original: `La vita è bella`,
      translation: `Жизнь прекрасна`,
    },
    {
      original: `The Silence of the Lambs`,
      translation: `Молчание ягнят`,
    },
    {
      original: `It's a Wonderful Life`,
      translation: `Эта прекрасная жизнь`,
    },
    {
      original: `Interstellar`,
      translation: `Интерстеллар`,
    },
    {
      original: `Léon`,
      translation: `Леон`,
    },
    {
      original: `City Lights`,
      translation: `Огни большого города`,
    },
  ];
  const title = titles[getRandomIndex(titles)];
  return title;
};

const generateRating = () => {
  const rating = getRandom(MAX_RATING).toFixed(1);
  return rating;
};

export const generateDate = (format) => {
  const maxDayGap = 3600;
  const daysGap = getRandomInteger(-maxDayGap);
  const date = dayjs().add(daysGap, `day`).toDate();
  return dayjs(date).format(format);
};

const generateDuration = () => {
  const duration = {
    hour: getRandomInteger(MIN_RANDOM_HOUR, MAX_RANDOM_HOUR),
    minute: getRandomInteger(MIN_RANDOM_MINUTE, MAX_RANDOM_MINUTE),
  };

  return duration;
};

const generateGenre = () => {
  const genres = [
    {
      title: `Аниме`,
    },
    {
      title: `Биографии`,
    },
    {
      title: `Боевики`,
    },
    {
      title: `Вестерны`,
    },
    {
      title: `Военные`,
    },
    {
      title: `Детективы`,
    },
    {
      title: `Детские`,
    },
    {
      title: `Документальные`,
    },
    {
      title: `Драмы`,
    },
    {
      title: `Игры`,
    },
    {
      title: `Исторические`,
    },
    {
      title: `Комедии`,
    },
    {
      title: `Концерты`,
    },
    {
      title: `Короткометражки`,
    },
    {
      title: `Криминал`,
    },
    {
      title: `Мелодрамы`,
    },
    {
      title: `Музыкальные`,
    },
    {
      title: `Мультфильмы`,
    },
    {
      title: `Новости`,
    },
    {
      title: `Приключения`,
    },
    {
      title: `Реальное ТВ`,
    },
    {
      title: `Семейные`,
    },
    {
      title: `Спортивные`,
    },
    {
      title: `Ток-шоу`,
    },
    {
      title: `Триллеры`,
    },
    {
      title: `Ужасы`,
    },
    {
      title: `Фантастика`,
    },
    {
      title: `Фильмы-нуар`,
    },
    {
      title: `Фэнтези`,
    },
    {
      title: `Церемонии`,
    },
  ];
  const genre = genres[getRandomIndex(genres)];
  return genre;
};

const generatePoster = () => {
  const textPosters = `made-for-each-other.png; popeye-meets-sinbad.png; sagebrush-trail.jpg; santa-claus-conquers-the-martians.jpg; the-dance-of-life.jpg; the-great-flamarion.jpg; the-man-with-the-golden-arm.jpg`;
  const posters = textPosters.split(`; `);
  const poster = posters[getRandomIndex(posters)];
  return poster;
};

export const generateDescription = () => {
  const textDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus`;
  const descriptions = textDescription.split(`. `);
  shuffleArray(descriptions);
  const description = descriptions.slice(0, getRandomInteger(MIN_RANDOM_SENTENCES, MAX_RANDOM_SENTENCES));
  return description.join(`. `);
};

const generateComments = () => {
  const comments = new Array(getRandomInteger(0, MAX_COMMENTS));
  return comments.length;
};

export const generateName = (count) => {
  const textNames = `Éabha Leonard; Erika Calixtus; Timur Medea; Anne Lennox; Freek Irit; Isac Ambrosius; Col Hulderic; Mehmud Mohandas; Edith Yash; Dario Dianna; Sophokles Everette; Kreios Indy; Hannah Stanko; Nalini Satisha; Alfreda Avanti; Katherine Claudius; Burkhard Louise; Ludolf Kadri; Nilda Alessia; Evgenios Aníbal; Edita Aderyn; Carol Sylvain; Ianthe Dragutin; Cáel Chibueze; Roderick Aelius; Om Thalia; Glukel Jon; Terpsichore Dani; Binyamin Josie; Zakiah Mette; Marthe Ilsa; Yeriyahu Ezechiel; Lenka Robert; Theodorus Feliciana; Abdullaahi Seanán`;
  const mockNames = textNames.split(`; `);
  shuffleArray(mockNames);
  const names = mockNames.slice(0, count);
  return names.join(`, `);
};

const generateCountry = () => {
  const textCountries = `Russia; Rwanda; Saint Kitts and Nevis; Saint Lucia; Saint Vincent and the Grenadines; Samoa; San Marino; Sao Tome and Principe; Saudi Arabia; Senegal; Serbia; Seychelles; Sierra Leone; Singapore; Slovakia; Slovenia; USA; Syria; Tajikistan; Tanzania; Thailand; Timor-Leste; Togo; Tonga; Trinidad and Tobago; Tunisia; Turkey; Turkmenistan; Tuvalu; Uganda; Ukraine`;
  const mockCountries = textCountries.split(`; `);
  shuffleArray(mockCountries);
  const country = mockCountries.slice(0, 1);
  return country;
};

const generateAgeRating = () => {
  const textAgeRating = `0+; 6+; 12+; 16+; 18+`;
  const mockAgeRating = textAgeRating.split(`; `);
  shuffleArray(mockAgeRating);
  const ageRating = mockAgeRating.slice(0, 1);
  return ageRating;
};

const generateRandomBoolean = (ratio) => {
  const randomBoolean = Math.random() < ratio;
  return randomBoolean;
};

let count = 0;

const generateUid = () => {
  count++;
  return count;
};

export const generateFilm = () => {
  return {
    id: nanoid(),
    uid: generateUid(),
    title: generateTitle(),
    rating: generateRating(),
    date: generateDate(`YYYY`),
    duration: generateDuration(),
    genre: new Array(MAX_GENRES).fill(0).map(generateGenre),
    poster: generatePoster(),
    description: generateDescription(),
    comments: generateComments(),
    director: generateName(1),
    writers: generateName(3),
    actors: generateName(4),
    country: generateCountry(),
    ageRating: generateAgeRating(),
    isWatched: generateRandomBoolean(0.5),
    isWatchlist: generateRandomBoolean(0.3),
    isFavorite: generateRandomBoolean(0.2),
  };
};

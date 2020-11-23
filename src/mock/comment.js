import {generateName, generateDescription} from "./film.js";
import dayjs from "dayjs";
import {getRandomIndex} from "./utils";

const generateDate = () => {
  return dayjs();
};

const generateEmotion = () => {
  const textEmotions = `smile.png; sleeping.png; puke.png; angry.png `;
  const emotions = textEmotions.split(`; `);
  const emotion = emotions[getRandomIndex(emotions)];
  return emotion;
};

export const generateComment = () => {
  return {
    date: generateDate(),
    author: generateName(1),
    message: generateDescription(),
    emotion: generateEmotion(),
  };
};

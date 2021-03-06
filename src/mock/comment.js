import {generateName, generateDescription, generateDate} from "./movie";
import {getRandomIndex} from "../utils/common.js";

const generateEmotion = () => {
  const textEmotions = `smile.png; sleeping.png; puke.png; angry.png `;
  const emotions = textEmotions.split(`; `);
  const emotion = emotions[getRandomIndex(emotions)];
  return emotion;
};

export const generateComment = () => {
  return {
    date: generateDate(`YYYY/MM/DD HH:mm`),
    author: generateName(1),
    message: generateDescription(),
    emotion: generateEmotion(),
  };
};

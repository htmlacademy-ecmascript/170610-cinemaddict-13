import {generateName, generateDescription} from "./film.js";
import dayjs from "dayjs";

const generateDate = () => {
  return dayjs();
};

export const generateComment = () => {
  return {
    date: generateDate(),
    author: generateName(1),
    message: generateDescription(),
    /*    emotion: generateEmotion(),*/
  };
};

import { SoundEffects } from '@/utils/sounds';

/* eslint-disable no-shadow */
type NumStr = number | string;

export interface IQuestions {
  id: string | QuestionType;
  next?: NumStr;
  content: string | string[];
  visible?: boolean;
  IsFade: number;
  hasIndicator?: boolean;
  IndicatorDelay?: number;
  IsAction?: boolean;
  options?: Array<string>;
  sound?: SoundEffects;
  soundEffect?: 'play' | 'fadeIn';
}

export enum QuestionType {
  TEXT_1 = 1,
  TEXT_2 = 2,
  TEXT_3 = 3,
  TEXT_4 = 4,
  TEXT_5 = 5,
  TEXT_6 = 6,
  TEXT_7 = 7,
  TEXT_8 = 8,
  TEXT_9 = 9,
  TEXT_10 = 10,
  STEP_1 = 61,
  STEP_2 = 62,
  Question_1 = 63,
  Question_2 = 64,
  Question_3 = 65,
  Question_4 = 66,
  Question_5 = 67,
  ANSWER_1 = 71,
  ANSWER_2 = 72,
  ANSWER_3 = 73,
  ANSWER_4 = 74,
  ANSWER_5 = 75,
  USER_CONFIRM = 101,
  STATE_1 = `STATE_1`,
  STATE_2 = `STATE_2`,
  STATE_3 = `STATE_3`,
}

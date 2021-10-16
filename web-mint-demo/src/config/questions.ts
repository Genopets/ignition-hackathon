import { IQuestions, QuestionType } from '@/types/questions';
import { SoundEffects } from '@/utils/sounds';
import { v4 as uuid } from 'uuid';

const Questions: Array<IQuestions> = [
  {
    next: QuestionType.USER_CONFIRM,
    content: [`boot.ini`, `...`, `loading akashic database`, `...`],
    visible: true,
    IsFade: 2,
  },
  {
    id: QuestionType.TEXT_1,
    next: QuestionType.USER_CONFIRM,
    content: [`petExistText`, `...`],
    IsFade: 2,
  },
  {
    id: QuestionType.TEXT_2,
    content: [`blockchain connection established`, `...`],
    IsFade: 2,
  },
  {
    content: [
      `initiate genopet resonance sequence`,
      `...`,
      `...`,
      `initiate hemisync protocol`,
      `...`,
      `initiate genopet resonance sequence`,
      `...`,
      `triangulate position`,
      `...`,
      `location determined`,
      `...`,
    ],
    IsFade: 2,
  },
  {
    id: QuestionType.TEXT_3,
    content: `human/genopet sync begin`,
    IsFade: 2,
    hasIndicator: true,
    IndicatorDelay: 4,
  },
  {
    content: [`...`, `...`],
    IsFade: 2,
  },
  {
    content: `step 1: breathe . . .`,
    IsFade: 1,
    hasIndicator: true,
    IndicatorDelay: 2,
  },
  {
    content: `step 2: trust your instincts . . .`,
    IsFade: 1,
    hasIndicator: true,
    IndicatorDelay: 3,
  },
  {
    content: `step 3: choose`,
    IsFade: 2,
  },
  {
    content: ``,
    IsFade: 2,
    IsAction: true,
    options: [`explore`, `conserve`],
  },
  {
    content: `step 4: choose`,
    IsFade: 2,
  },
  {
    content: ``,
    IsFade: 2,
    IsAction: true,
    options: [`order`, `flow`],
    sound: SoundEffects.q1,
    SoundEffects: `fadeIn`,
  },
  {
    content: `step 5: choose`,
    IsFade: 2,
  },
  {
    content: ``,
    IsFade: 2,
    IsAction: true,
    options: [`end`, `means`],
  },
  {
    content: `step 6: choose`,
    IsFade: 2,
  },
  {
    content: ``,
    IsFade: 2,
    IsAction: true,
    options: [`explicit`, `implicit`],
    sound: SoundEffects.q2,
    SoundEffects: `fadeIn`,
  },
  {
    content: `step 7: choose`,
    IsFade: 2,
  },
  {
    content: ``,
    IsFade: 2,
    IsAction: true,
    options: [`act`, `react`],
  },
  {
    content: `processing`,
    IsFade: 2,
    sound: SoundEffects.q3,
    SoundEffects: `fadeIn`,
  },
  {
    content: `...`,
    IsFade: 2,
  },
  {
    content: `calibrating`,
    IsFade: 2,
    hasIndicator: true,
  },
].map((question) => ({
  ...question,
  id: question?.id || uuid(),
}));

export default Questions;

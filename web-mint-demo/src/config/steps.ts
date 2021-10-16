import { IQuestions, QuestionType } from '@/types/questions';
import { v4 as uuid } from 'uuid';

const Steps: Array<IQuestions> = [
  // {
  //   id: `ques_1`,
  //   content: `sync voice frequency`,
  //   visible: true,
  //   visibleAt: QuestionType.TEXT_1,
  //   IsFade: 2,
  // },
  // {
  //   id: `space_1`,
  //   content: ``,
  //   visibleAt: QuestionType.TEXT_2,
  //   IsFade: 2,
  // },
  // {
  //   id: `space_2`,
  //   content: ``,
  //   visibleAt: QuestionType.TEXT_2,
  //   IsFade: 2,
  // },
  // {
  //   id: `space_3`,
  //   content: ``,
  //   visibleAt: QuestionType.TEXT_2,
  //   IsFade: 2,
  // },
  // {
  //   id: `ques_3`,
  //   content: `genopets are born from`,
  //   visibleAt: QuestionType.TEXT_3,
  //   IsFade: 2,
  // },
  // {
  //   id: `ques_4`,
  //   content: `your care & nurture.`,
  //   visibleAt: QuestionType.TEXT_4,
  //   IsFade: 2,
  // },
  // {
  //   id: `space_4`,
  //   content: ``,
  //   visibleAt: QuestionType.TEXT_4,
  //   IsFade: 2,
  // },
  // {
  //   id: `space_5`,
  //   content: ``,
  //   visibleAt: QuestionType.TEXT_4,
  //   IsFade: 2,
  // },
  // {
  //   id: `space_6`,
  //   content: ``,
  //   visibleAt: QuestionType.TEXT_4,
  //   IsFade: 2,
  // },
  // {
  //   id: `space_7`,
  //   next: QuestionType.ANSWER_1,
  //   content: `click record & read phrase:`,
  //   visibleAt: QuestionType.TEXT_5,
  //   IsFade: 2,
  // },
  {
    content: `...`,
    IsFade: 1,
  },
  {
    next: QuestionType.ANSWER_2,
    content: [`sync complete`, `click to summon genopet >`],
    IsFade: 2,
  },
].map((question) => ({
  ...question,
  id: uuid(),
}));

export default Steps;

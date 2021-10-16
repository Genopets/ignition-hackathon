import { QuestionType } from '@/types/questions';

export interface NextStateProps {
  nextState: (value: QuestionType) => void;
  soundOff: () => void;
}

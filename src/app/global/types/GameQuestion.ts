export interface Setting {
  timerEnabled: boolean;
  timeAllowed?: number;
}
export interface OptionList {
  options: OptionItem[];
}

export interface Pagination {
  pageNo: number;
  totalQuiz: number;
}
export interface OptionItem {
  optionId: string | number;
  answerText: 'string';
}
export interface Quiz {
  quizId: string | number;
  quizVideo?: string;
  quizImage?: string;
  quizMessage: string;
  optionType: 'single' | 'multiple';
  options: OptionList[];
}

export interface GameQuestion {
  setting: Setting;
  quizzes: Quiz[];
  pagination: Pagination;
}

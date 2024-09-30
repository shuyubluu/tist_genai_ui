export interface Questions {
  id: number;
  question: string;
  isChoice: boolean;
}
export interface QuestionsData {
  problemAspects: string;
  questions: Questions[];
}

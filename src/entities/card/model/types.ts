export interface Card {
  id: number;
  title: string;
  content: string;
  tags: string[];
}

export interface CardFormValues {
  title: string;
  content: string;
  tags: string[];
}

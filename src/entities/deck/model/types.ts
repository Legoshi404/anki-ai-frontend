export interface Deck {
  id: number;
  name: string;
  newCount: number;
  learningCount: number;
  reviewCount: number;
  newLimit: number;
  reviewLimit: number;
  newToday: number;
  reviewToday: number;
  reviewRemaining: number;
  newRemaining: number;
}

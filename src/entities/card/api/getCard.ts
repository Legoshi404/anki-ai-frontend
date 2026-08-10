import { apiFetch } from "@/shared/api/client";

import type { Card } from "..";

export function getCard(deckId: number, cardId: number): Promise<Card> {
  return apiFetch<Card>(`/decks/${deckId}/cards/${cardId}`);
}

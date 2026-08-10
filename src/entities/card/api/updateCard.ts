import { apiFetch } from "@/shared/api/client";

import type { Card } from "..";
import type { CardFormValues } from "../model/types";

export function updateCard(
  deckId: number,
  cardId: number,
  data: CardFormValues,
): Promise<Card> {
  return apiFetch<Card>(`/decks/${deckId}/cards/${cardId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

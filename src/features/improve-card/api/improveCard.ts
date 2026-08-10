import { apiFetch } from "@/shared/api/client";

import type { CardFormValues } from "@/entities/card/model/types";

export function improveCard(
  deckId: number,
  cardId: number,
  values: CardFormValues,
) {
  return apiFetch<CardFormValues>(`/decks/${deckId}/cards/${cardId}/improve`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });
}

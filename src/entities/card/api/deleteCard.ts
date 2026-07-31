import { apiFetch } from "@/shared/api/client";

interface Response {
  id: number;
}

export function deleteCard(deckId: number, cardId: number): Promise<Response> {
  return apiFetch<Response>(`/decks/${deckId}/cards/${cardId}`, {
    method: "DELETE",
  });
}

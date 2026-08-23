import { apiFetch } from "@/shared/api/client";

import type { Deck } from "../model/types";

export function getDecks() {
  return apiFetch<Deck[]>("/decks");
}

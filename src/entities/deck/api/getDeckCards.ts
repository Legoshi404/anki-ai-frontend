import { apiFetch } from "@/shared/api/client";
import type { PaginationResponse } from "@/shared/api/pagination";

import type { Card } from "@/entities/card";

interface Params {
  deckId: number;
  page: number;
  pageSize?: number;
}

const DEFAULT_PAGE = 1;

export function getDeckCards({
  deckId,
  page = DEFAULT_PAGE,
  pageSize,
}: Params) {
  return apiFetch<PaginationResponse<Card>>(
    `/decks/${deckId}/cards?page=${page}&pageSize=${pageSize}`,
  );
}

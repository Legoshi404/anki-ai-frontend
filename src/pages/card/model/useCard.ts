import { useCallback, useEffect, useState } from "react";

import { useAsync } from "@/shared/lib/useAsync";

import type { Card } from "@/entities/card";
import { getCard } from "@/entities/card/api/getCard";

interface Params {
  deckId: number;
  cardId: number;
}

export function useCard({ deckId = 1, cardId }: Params) {
  const { execute, loading, error } = useAsync();

  const [card, setCard] = useState<Card | null>(null);

  const reload = useCallback(() => {
    execute(async () => {
      const response = await getCard(deckId, cardId);

      setCard(response);
    });
  }, [deckId, cardId, execute]);

  useEffect(() => {
    void reload();
  }, [reload]);

  return {
    card,
    loading,
    error,
    reload,
  };
}

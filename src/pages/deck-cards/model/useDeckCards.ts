import { useCallback, useEffect, useState } from "react";

import { notifications } from "@mantine/notifications";
import type { SetURLSearchParams } from "react-router";

import { useDocumentTtitle } from "@/shared/hooks/useDocumentTtitle";
import { useAsync } from "@/shared/lib/useAsync";

import type { Card } from "@/entities/card";
import { deleteCard } from "@/entities/card/api/deleteCard";
import { getDeckCards } from "@/entities/deck";

interface Params {
  deckId: number;
  page: number;
  pageSize: number;
  setSearchParams: SetURLSearchParams;
}

export function useDeckCards({
  deckId = 1,
  page,
  pageSize,
  setSearchParams,
}: Params) {
  const { execute, loading, error } = useAsync();

  const [cards, setCards] = useState<Card[] | null>(null);
  const [deck, setDeck] = useState<{ id: number; name: string } | null>(null);
  const [total, setTotal] = useState<number>(0);

  useDocumentTtitle(deck?.name || `${deckId}`);

  const reload = useCallback(() => {
    execute(async () => {
      const response = await getDeckCards({
        deckId,
        page,
        pageSize,
      });

      setDeck(response.data.deck);
      setCards(response.data.cards);
      setTotal(response.total);
    });
  }, [deckId, page, pageSize, execute]);

  useEffect(() => {
    if (!deckId) {
      return;
    }

    void reload();
  }, [deckId, reload]);

  useEffect(() => {
    let maxPossiblePage = Math.floor(total / pageSize);
    const reminder = total % pageSize;

    if (reminder) {
      maxPossiblePage++;
    }

    if (page > maxPossiblePage && cards) {
      setSearchParams(
        {
          page: String(Math.min(maxPossiblePage, page)),
        },
        {
          replace: true,
        },
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total]);

  const handleDeleteCard = async (deckId: number, cardId: number) =>
    await execute(async () => {
      await deleteCard(deckId, cardId);
      await reload();

      notifications.show({
        color: "green",
        title: "Success",
        message: "Card has been deleted",
        position: "top-right",
      });
    });

  return {
    deck,
    cards,
    total,
    loading,
    error,
    handleDeleteCard,
  };
}

import { useEffect, useState } from "react";

import { Loader, Pagination, Stack, Title } from "@mantine/core";
import { useParams, useSearchParams } from "react-router";

import type { Card } from "@/entities/card/model/types";
import { getDeckCards } from "@/entities/deck/api/getDeckCards";

import { CardsList } from "@/widgets/cards-list";

const PAGE_SIZE = 10;

export function DeckCardsPage() {
  const { deckId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const [cards, setCards] = useState<Card[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const page = Number(searchParams.get("page") ?? "1");

  useEffect(() => {
    if (!deckId) {
      return;
    }

    async function loadCards() {
      setLoading(true);

      try {
        const response = await getDeckCards({
          deckId: deckId!,
          page,
          pageSize: PAGE_SIZE,
        });

        setCards(response.data);
        setTotal(response.total);
      } finally {
        setLoading(false);
      }
    }

    loadCards();
  }, [deckId, page]);

  return (
    <Stack>
      <Title order={2}>Deck {deckId}</Title>
      {loading ? <Loader /> : <CardsList cards={cards} />}
      <Pagination
        value={page}
        onChange={(page) =>
          setSearchParams({
            page: String(page),
          })
        }
        total={Math.ceil(total / PAGE_SIZE)}
      />
    </Stack>
  );
}

import { Loader, Pagination, Stack, Title } from "@mantine/core";
import { useParams, useSearchParams } from "react-router";

import { CardsList } from "@/widgets/cards-list";

import { useDeckCards } from "../model/useDeckCards";

const PAGE_SIZE = 10;

export function DeckCardsPage() {
  const { deckId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page") ?? "1");

  const { cards, total, loading, error, handleDeleteCard } = useDeckCards({
    deckId: Number(deckId),
    page,
    pageSize: PAGE_SIZE,
    setSearchParams,
  });

  if (error) {
    return <div>Smth went wrong</div>;
  }

  return (
    <Stack>
      <Title order={2}>Deck {deckId}</Title>
      {loading ? (
        <Loader />
      ) : (
        <CardsList cards={cards} onDelete={handleDeleteCard} />
      )}
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

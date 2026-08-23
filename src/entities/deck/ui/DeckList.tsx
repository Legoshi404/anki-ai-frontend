import { Stack } from "@mantine/core";

import type { Deck } from "../model/types";
import { DeckCard } from "./DeckCard";

interface Props {
  decks: Deck[];
}

export function DeckList({ decks }: Props) {
  return (
    <Stack>
      {decks.map((deck) => (
        <DeckCard key={deck.id} deck={deck} />
      ))}
    </Stack>
  );
}

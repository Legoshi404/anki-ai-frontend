import { Stack } from "@mantine/core";

import { type Card, CardPreview } from "@/entities/card";

interface Props {
  cards: Card[];
  onDelete: (deckId: number, cardId: number) => void;
}

export function CardsList({ cards, onDelete }: Props) {
  return (
    <Stack>
      {cards.map((card) => (
        <CardPreview key={card.id} card={card} onDelete={onDelete} />
      ))}
    </Stack>
  );
}

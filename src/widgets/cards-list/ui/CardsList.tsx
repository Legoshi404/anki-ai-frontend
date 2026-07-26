import { Stack } from "@mantine/core";

import { type Card, CardPreview } from "@/entities/card";

interface Props {
  cards: Card[];
}

export function CardsList({ cards }: Props) {
  return (
    <Stack>
      {cards.map((card) => (
        <CardPreview key={card.id} card={card} />
      ))}
    </Stack>
  );
}

import { Group, Paper, Text } from "@mantine/core";
import { Link } from "react-router";

import type { Deck } from "../model/types";

interface Params {
  deck: Deck;
}

export function DeckCard({ deck }: Params) {
  return (
    <Paper
      key={deck.id}
      component={Link}
      to={`/decks/${deck.id}/cards`}
      withBorder
      p="md"
      style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
    >
      <Group justify="space-between">
        <Text fw={500}>{deck.name}</Text>
        <Group gap="md">
          <Text c="blue">{deck.newToday}</Text>
          <Text c="green">{deck.reviewToday}</Text>
        </Group>
      </Group>
    </Paper>
  );
}

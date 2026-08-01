import { Badge, Group, Paper, Stack, Text, Title } from "@mantine/core";
import { Link } from "react-router";

import { DeleteCardButton } from "@/features/delete-card/ui/DeleteCardButton";

import type { Card } from "../model/types";

interface Props {
  card: Card;
  onDelete: (deckId: number, cardId: number) => void;
}

export function CardPreview({ card, onDelete }: Props) {
  return (
    <Paper
      component={Link}
      to={`/decks/1/cards/${card.id}`}
      withBorder
      p="md"
      radius="md"
    >
      <Group justify="space-between">
        <Stack gap="sm">
          <Title order={4}>{card.title}</Title>
          <Text c="dimmed" lineClamp={2}>
            {card.content}
          </Text>
          <Group gap="xs">
            {card.tags.map((tag) => (
              <Badge key={tag} variant="light">
                {tag}
              </Badge>
            ))}
          </Group>
        </Stack>
        <DeleteCardButton onDelete={() => onDelete(1, card.id)} />
      </Group>
    </Paper>
  );
}

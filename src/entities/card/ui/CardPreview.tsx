import { Badge, Group, Paper, Stack, Text, Title } from "@mantine/core";
import { Link, useParams } from "react-router";

import { DeleteCardButton } from "@/features/delete-card/ui/DeleteCardButton";

import type { Card } from "../model/types";

interface Props {
  card: Card;
  onDelete: (deckId: number, cardId: number) => void;
}

export function CardPreview({ card, onDelete }: Props) {
  const { deckId } = useParams();

  return (
    <Paper
      component={Link}
      state={{ from: "cards" }}
      to={`/decks/${deckId}/cards/${card.id}`}
      withBorder
      p="md"
      radius="md"
      style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
    >
      <Group justify="space-between" wrap="nowrap">
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

import { Badge, Group, Paper, Stack, Text, Title } from "@mantine/core";

import type { Card } from "../model/types";

interface Props {
  card: Card;
}

export function CardPreview({ card }: Props) {
  return (
    <Paper withBorder p="md" radius="md">
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
    </Paper>
  );
}

import {
  Button,
  Group,
  Loader,
  Stack,
  TagsInput,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { ArrowLeftIcon } from "@phosphor-icons/react";
import { Link, useParams } from "react-router";

import { useCard } from "../model/useCard";

export function CardPage() {
  const { deckId, cardId } = useParams();
  const { card, loading, form } = useCard({
    deckId: Number(deckId),
    cardId: Number(cardId),
  });

  if (loading) {
    return <Loader />;
  }

  if (!card) {
    return <Text>Card not found</Text>;
  }

  return (
    <Stack>
      <Button
        component={Link}
        to={`/decks/${deckId}/cards`}
        leftSection={<ArrowLeftIcon size={16} />}
      >
        Back to cards
      </Button>
      <TextInput label="Title" {...form.getInputProps("title")} readOnly />
      <Textarea label="Content" {...form.getInputProps("content")} readOnly />
      <TagsInput label="Tags" {...form.getInputProps("tags")} readOnly />
      <Group justify="flex-end">
        <Button disabled>Save</Button>
      </Group>
    </Stack>
  );
}

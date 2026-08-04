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
  const { card, loading, form, handleUpdateCard } = useCard({
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
      <form onSubmit={form.onSubmit(handleUpdateCard)}>
        <TextInput
          label="Title"
          placeholder="Card title"
          {...form.getInputProps("title")}
        />
        <Textarea
          label="Content"
          autosize
          minRows={8}
          placeholder="Card content"
          {...form.getInputProps("content")}
        />
        <TagsInput
          label="Tags"
          placeholder="Add tags"
          {...form.getInputProps("tags")}
        />
        <Group justify="flex-end">
          <Button type="submit">Save</Button>
        </Group>
      </form>
    </Stack>
  );
}

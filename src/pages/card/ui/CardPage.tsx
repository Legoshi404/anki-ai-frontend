import {
  Button,
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
  const { card, loading } = useCard({
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
      <TextInput value={card.title} readOnly />
      <Textarea value={card.content} readOnly />
      <TagsInput value={card.tags} readOnly />
    </Stack>
  );
}

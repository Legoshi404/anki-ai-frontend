import {
  Button,
  Container,
  Group,
  Loader,
  Text,
  Title,
  Tooltip,
} from "@mantine/core";

import { ErrorState } from "@/shared/ui/ErrorState";

import { useDecks } from "@/entities/deck/model/useDecks";
import { DeckList } from "@/entities/deck/ui/DeckList";

export function DecksPage() {
  const { decks, loading, error, reload } = useDecks();

  return (
    <Container>
      <Group mb="md" justify="space-between">
        <Title order={1}>Decks</Title>
        <Tooltip label="This feature is under development">
          <Button disabled>Create deck</Button>
        </Tooltip>
      </Group>
      {loading && <Loader />}
      {!loading && !error && decks.length !== 0 && <DeckList decks={decks} />}
      {!loading && !error && decks.length === 0 && (
        <Text c="dimmed">Looks like you don't have any decks yet</Text>
      )}
      {error && (
        <ErrorState
          onRetry={reload}
          message="We couldn't load your decks. Please try again."
        />
      )}
    </Container>
  );
}

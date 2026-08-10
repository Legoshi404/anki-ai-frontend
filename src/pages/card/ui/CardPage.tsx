import { Button, Group, Loader, Stack, Text } from "@mantine/core";
import { ArrowLeftIcon } from "@phosphor-icons/react";
import { Link, useParams } from "react-router";

import { CardForm } from "@/entities/card/ui/CardForm/CardForm";

import { useImproveCard } from "@/features/improve-card/model/useImproveCard";

import { useCard } from "../model/useCard";

export function CardPage() {
  const { deckId, cardId } = useParams();
  const {
    card,
    loading,
    form,
    aiForm,
    handleUpdateCard,
    applyAiDraft,
    handleDiscardAiDraft,
  } = useCard({
    deckId: Number(deckId),
    cardId: Number(cardId),
  });

  const {
    improve,
    loading: improveLoading,
    generated,
  } = useImproveCard({
    deckId: Number(deckId),
    cardId: Number(cardId),
    form,
    aiForm,
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
      <Group align="flex-start" grow>
        <CardForm
          form={form}
          title="Edit Card"
          footer={
            <>
              <Button type="button" onClick={handleUpdateCard}>
                Save
              </Button>
              <Button
                type="button"
                onClick={() => improve(form.getValues())}
                loading={improveLoading}
              >
                ✨ Improve
              </Button>
            </>
          }
          onSubmit={handleUpdateCard}
        />
        {generated && (
          <CardForm
            form={aiForm}
            title="AI draft"
            footer={
              <Group>
                <Button type="button" onClick={handleDiscardAiDraft}>
                  Discard
                </Button>
                <Button type="button" onClick={applyAiDraft}>
                  Use this version
                </Button>
              </Group>
            }
          />
        )}
      </Group>
    </Stack>
  );
}

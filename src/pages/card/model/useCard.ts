import { useCallback, useEffect, useState } from "react";

import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";

import { useAsync } from "@/shared/lib/useAsync";

import type { Card } from "@/entities/card";
import { getCard } from "@/entities/card/api/getCard";
import { updateCard } from "@/entities/card/api/updateCard";
import type { CardFormValues } from "@/entities/card/model/types";

interface Params {
  deckId: number;
  cardId: number;
}

export function useCard({ deckId = 1, cardId }: Params) {
  const { execute, loading, error } = useAsync();
  const form = useForm<CardFormValues>({
    mode: "uncontrolled",
    initialValues: {
      title: "",
      content: "",
      tags: [] as string[],
    },
    validate: {
      title: (value) =>
        value.trim().length === 0 ? "Title is required" : null,
      content: (value) =>
        value.trim().length === 0 ? "Content is required" : null,
    },
  });

  const [card, setCard] = useState<Card | null>(null);

  const reload = useCallback(() => {
    execute(async () => {
      const response = await getCard(deckId, cardId);

      form.initialize({
        title: response.title,
        content: response.content,
        tags: response.tags,
      });

      setCard(response);
    });
  }, [deckId, cardId, execute]);

  const handleUpdateCard = useCallback(
    (values: CardFormValues) => {
      execute(async () => {
        await updateCard(deckId, cardId, values);
      });

      notifications.show({
        color: "green",
        title: "Success",
        message: "The card has been updated successfully",
        position: "top-right",
      });
    },
    [deckId, cardId, execute],
  );

  useEffect(() => {
    void reload();
  }, [reload]);

  return {
    card,
    form,
    loading,
    error,
    reload,
    handleUpdateCard,
  };
}

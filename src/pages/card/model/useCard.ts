import { useCallback, useEffect, useState } from "react";

import { useForm } from "@mantine/form";

import { useAsync } from "@/shared/lib/useAsync";

import type { Card } from "@/entities/card";
import { getCard } from "@/entities/card/api/getCard";

interface Params {
  deckId: number;
  cardId: number;
}

export function useCard({ deckId = 1, cardId }: Params) {
  const { execute, loading, error } = useAsync();
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      title: "",
      content: "",
      tags: [] as string[],
    },
  });

  const [card, setCard] = useState<Card | null>(null);

  const reload = useCallback(() => {
    execute(async () => {
      const response = await getCard(deckId, cardId);

      form.setValues({
        title: response.title,
        content: response.content,
        tags: response.tags,
      });

      setCard(response);
    });
  }, [deckId, cardId, execute]);

  useEffect(() => {
    void reload();
  }, [reload]);

  return {
    card,
    form,
    loading,
    error,
    reload,
  };
}

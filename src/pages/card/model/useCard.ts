import { useCallback, useEffect, useState } from "react";

import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useLocation, useNavigate } from "react-router";

import { useDocumentTtitle } from "@/shared/hooks/useDocumentTtitle";
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
  const [showAiPanel, setShowAiPanel] = useState(false);
  const { execute, loading, error } = useAsync();

  const location = useLocation();
  const navigate = useNavigate();

  const handleBack = () => {
    if (location.state?.from === "cards") {
      navigate(-1);
    } else {
      navigate(`/decks/${deckId}/cards`);
    }
  };

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

  const aiForm = useForm<CardFormValues>({
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [execute, deckId, cardId]);

  const update = useCallback(
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

  const applyAiDraft = () => {
    form.setValues(aiForm.getValues());
    setShowAiPanel(false);
  };

  const handleUpdateCard = () => update(form.getValues());

  const handleImprove = () => {
    const values = form.getValues();
    aiForm.setValues({
      title: values.title + " (Improved)",
      content: values.content + " (Improved)",
      tags: [...values.tags, "improved"],
    });
    setShowAiPanel(true);
  };

  const handleDiscardAiDraft = () => {
    setShowAiPanel(false);
  };

  useEffect(() => {
    void reload();
  }, [reload]);

  useDocumentTtitle(card?.title || `${cardId}`);

  return {
    card,
    form,
    aiForm,
    showAiPanel,
    loading,
    error,
    reload,
    handleUpdateCard,
    applyAiDraft,
    handleImprove,
    handleDiscardAiDraft,
    handleBack,
  };
}

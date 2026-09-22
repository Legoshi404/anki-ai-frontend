import { useState } from "react";

import type { FormRulesRecord, UseFormReturnType } from "@mantine/form";

import { useAsync } from "@/shared/lib/useAsync";

import type { CardFormValues } from "@/entities/card/model/types";

import { improveCard } from "../api/improveCard";

interface Params {
  deckId: number;
  cardId: number;
  form: UseFormReturnType<
    CardFormValues,
    CardFormValues,
    FormRulesRecord<CardFormValues>
  >;
  aiForm: UseFormReturnType<
    CardFormValues,
    CardFormValues,
    FormRulesRecord<CardFormValues>
  >;
}
export function useImproveCard({ deckId, cardId, form, aiForm }: Params) {
  const { execute, loading, error } = useAsync();
  const [generated, setGenerated] = useState(false);

  const improve = (values: CardFormValues) =>
    execute(async () => {
      const suggestion = await improveCard(deckId, cardId, values);
      aiForm.setValues(suggestion);

      setGenerated(true);
    });

  const apply = () => {
    form.setValues(aiForm.getValues());
    aiForm.reset();
    setGenerated(false);
  };

  const discard = () => {
    aiForm.reset();
    setGenerated(false);
  };

  return {
    improve,
    apply,
    discard,
    loading,
    error,
    generated,
  };
}

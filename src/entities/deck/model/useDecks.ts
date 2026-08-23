import { useCallback, useEffect, useState } from "react";

import { useDocumentTtitle } from "@/shared/hooks/useDocumentTtitle";
import { useAsync } from "@/shared/lib/useAsync";

import { getDecks } from "../api/getDecks";
import type { Deck } from "./types";

export function useDecks() {
  useDocumentTtitle("Decks");

  const { execute, loading, error } = useAsync();

  const [decks, setDecks] = useState<Deck[]>([]);

  useEffect(() => {
    document.title = "Decks";
  }, []);

  useEffect(() => {
    void execute(async () => {
      const response = await getDecks();

      setDecks(response);
    });
  }, [execute]);

  const reload = useCallback(() => {
    void execute(async () => {
      const response = await getDecks();

      setDecks(response);
    });
  }, [execute]);

  return {
    decks,
    loading,
    error,
    reload,
  };
}

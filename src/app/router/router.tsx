import { createBrowserRouter, Navigate } from "react-router";

import { DeckCardsPage } from "@/pages/deck-cards";
import { DecksPage } from "@/pages/decks";

export const router = createBrowserRouter([
  {
    path: "/decks",
    element: <DecksPage />,
  },
  {
    path: "/decks/:deckId/cards",
    element: <DeckCardsPage />,
  },
  {
    path: "*",
    element: <Navigate to="/decks" replace />,
  },
]);

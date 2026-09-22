import { createBrowserRouter, Navigate } from "react-router";

import { CardPage } from "@/pages/card/ui/CardPage";
import { DeckCardsPage } from "@/pages/deck-cards";
import { DecksPage } from "@/pages/decks";

import { AppLayout } from "../layout/AppLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="decks" replace />,
      },
      {
        path: "decks",
        element: <DecksPage />,
      },
      {
        path: "decks/:deckId/cards",
        element: <DeckCardsPage />,
      },
      {
        path: "/decks/:deckId/cards/:cardId",
        element: <CardPage />,
      },
      {
        path: "*",
        element: <Navigate to="/decks" replace />,
      },
    ],
  },
]);

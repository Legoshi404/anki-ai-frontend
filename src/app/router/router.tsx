import { createBrowserRouter } from "react-router";

import { DeckCardsPage } from "@/pages/deck-cards";

export const router = createBrowserRouter([
  {
    path: "/decks/:deckId/cards",
    element: <DeckCardsPage />,
  },
]);

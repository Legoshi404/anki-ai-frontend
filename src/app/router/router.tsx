import { createBrowserRouter } from "react-router";

import { CardPage } from "@/pages/card/ui/CardPage";
import { DeckCardsPage } from "@/pages/deck-cards";

export const router = createBrowserRouter([
  {
    path: "/decks/:deckId/cards",
    element: <DeckCardsPage />,
  },
  {
    path: "/decks/:deckId/cards/:cardId",
    element: <CardPage />,
  },
]);

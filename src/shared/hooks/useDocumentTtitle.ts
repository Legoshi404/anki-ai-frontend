import { useEffect } from "react";

export function useDocumentTtitle(title: string) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

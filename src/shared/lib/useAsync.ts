import { useCallback, useState } from "react";

import { notifications } from "@mantine/notifications";

import { ApiError } from "../api/ApiError";

export function useAsync() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const execute = useCallback(
    async <T>(callback: () => Promise<T>): Promise<T | undefined> => {
      setLoading(true);
      setError(null);

      try {
        return await callback();
      } catch (error) {
        const normalizedError =
          error instanceof ApiError ? error : new Error("Unknown error");
        setError(normalizedError);

        notifications.show({
          color: "red",
          title: "Error",
          message: normalizedError.message,
          position: "top-right",
        });

        throw normalizedError;
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  return {
    execute,
    loading,
    error,
  };
}

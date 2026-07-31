import { ApiError } from "./ApiError";

const API_URL = "http://localhost:3000";

interface ErrorResponse {
  error?: {
    message?: string;
  };
}

export async function apiFetch<T>(
  path: string,
  init?: RequestInit,
): Promise<T> {
  const response = await fetch(`${API_URL}${path}`, init);

  if (!response.ok) {
    let message = "Unknown error";

    try {
      const body = (await response.json()) as ErrorResponse;

      message = body.error?.message ?? message;
    } catch {
      message = await response.text();
    }

    throw new ApiError(response.status, message);
  }

  return response.json() as Promise<T>;
}

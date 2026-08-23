import { Button, Center, Stack, Text, Title } from "@mantine/core";

interface Props {
  onRetry: () => void;
  message: string;
}

export function ErrorState({ onRetry, message }: Props) {
  return (
    <Center
      py="xl"
      p="md"
      style={{
        borderRadius: 16,
        border: "4px solid var(--mantine-color-red-6)",
      }}
    >
      <Stack align="center">
        <Title order={3}>Something went wrong</Title>
        <Text c="dimmed">{message}</Text>
        <Button onClick={onRetry}>Try again</Button>
      </Stack>
    </Center>
  );
}

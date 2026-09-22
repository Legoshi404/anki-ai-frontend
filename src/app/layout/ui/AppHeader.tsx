import { Anchor, Group, Text } from "@mantine/core";
import { Link } from "react-router";

export function AppHeader() {
  return (
    <Group h="100%" px="md">
      <Text fw={700}>Anki AI</Text>
      <Anchor component={Link} to="/decks" underline="never">
        Decks
      </Anchor>
    </Group>
  );
}

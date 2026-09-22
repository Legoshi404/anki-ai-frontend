import { AppShell, Box } from "@mantine/core";
import { Outlet } from "react-router";

import { AppHeader } from "./ui/AppHeader";

export function AppLayout() {
  return (
    <AppShell header={{ height: 60 }}>
      <AppShell.Header>
        <AppHeader />
      </AppShell.Header>
      <AppShell.Main>
        <Box p="md">
          <Outlet />
        </Box>
      </AppShell.Main>
    </AppShell>
  );
}

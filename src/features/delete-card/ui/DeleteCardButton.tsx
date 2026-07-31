import { useState } from "react";

import { ActionIcon, Button, Group, Popover, Text } from "@mantine/core";
import { XCircleIcon } from "@phosphor-icons/react";

interface Props {
  onDelete: () => void;
}

export function DeleteCardButton({ onDelete }: Props) {
  const [opend, setOpened] = useState(false);

  return (
    <Popover opened={opend} onChange={setOpened} position="bottom-end">
      <Popover.Target>
        <ActionIcon
          color="red"
          variant="subtle"
          onClick={() => setOpened((value) => !value)}
        >
          <XCircleIcon size={18} />
        </ActionIcon>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="sm" mb="sm">
          Delete this card?
        </Text>
        <Group>
          <Button size="xs" variant="default" onClick={() => setOpened(false)}>
            Cancel
          </Button>
          <Button
            size="xs"
            color="red"
            onClick={() => {
              onDelete();
              setOpened(false);
            }}
          >
            Delete
          </Button>
        </Group>
      </Popover.Dropdown>
    </Popover>
  );
}

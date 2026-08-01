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
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setOpened((value) => !value);
          }}
        >
          <XCircleIcon size={18} />
        </ActionIcon>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="sm" mb="sm">
          Delete this card?
        </Text>
        <Group>
          <Button
            size="xs"
            variant="default"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();

              setOpened(false);
            }}
          >
            Cancel
          </Button>
          <Button
            size="xs"
            color="red"
            onClick={(e) => {
              console.log("clck");
              e.preventDefault();
              e.stopPropagation();
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

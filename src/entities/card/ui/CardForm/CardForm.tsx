import { Group, TagsInput, Textarea, TextInput, Title } from "@mantine/core";
import type { UseFormReturnType } from "@mantine/form";

import type { CardFormValues } from "../../model/types";

interface Params {
  form: UseFormReturnType<CardFormValues>;
  onSubmit?: React.SubmitEventHandler<HTMLFormElement>;
  title?: string;
  footer?: React.ReactNode;
}

export function CardForm({ form, title, footer, onSubmit }: Params) {
  return (
    <form onSubmit={onSubmit}>
      {title && <Title order={2}>{title}</Title>}
      <TextInput
        key={form.key("title")}
        label="Title"
        placeholder="Card title"
        {...form.getInputProps("title")}
      />
      <Textarea
        key={form.key("content")}
        label="Content"
        autosize
        minRows={8}
        placeholder="Card content"
        {...form.getInputProps("content")}
      />
      <TagsInput
        key={form.key("tags")}
        label="Tags"
        placeholder="Add tags"
        {...form.getInputProps("tags")}
      />
      <Group justify="flex-end">
        {footer && <Group justify="flex-between">{footer}</Group>}
      </Group>
    </form>
  );
}

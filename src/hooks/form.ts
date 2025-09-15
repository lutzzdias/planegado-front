import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
import { TextField } from "../components/TextField";

export const { fieldContext, formContext, useFieldContext } =
  createFormHookContexts();

export const { useAppForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    TextField,
  },
  formComponents: {},
});

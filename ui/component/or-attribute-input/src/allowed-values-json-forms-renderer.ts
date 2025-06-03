import { RankedTester, rankWith, and, ControlProps, uiTypeIs, formatIs, schemaMatches } from "@jsonforms/core";
import { JsonFormsStateContext, getTemplateWrapper, JsonFormsRendererRegistryEntry } from "@openremote/or-json-forms";
import { InputType, OrInputChangedEvent } from "@openremote/or-mwc-components/or-mwc-input";
import { html } from "lit";
import "@openremote/or-mwc-components/or-mwc-input";

const allowedValuesTester: RankedTester = rankWith(
  6,
  schemaMatches((schema) => schema.hasOwnProperty("format") && schema.format === "allowed-values")
);

const allowedValuesRenderer = (state: JsonFormsStateContext, props: ControlProps) => {
  const template = html`
    <style>
      .allowed-values {
        min-width: 300px;
        max-width: 600px;
        width: 100%;
      }
    </style>
    <or-mwc-input class="allowed-values" .type="${InputType.TEXT}"></or-mwc-input>
  `;

  return getTemplateWrapper(template, undefined);
};

export const allowedValuesRendererRegistryEntry: JsonFormsRendererRegistryEntry = {
  tester: allowedValuesTester,
  renderer: allowedValuesRenderer,
};

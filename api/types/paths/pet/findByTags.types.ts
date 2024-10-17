// This code was automatically generated from an OpenAPI description.
// Do not edit this file. Edit the OpenAPI file instead.
// For more information, see https://github.com/pmcelhaney/counterfact/blob/main/docs/faq-generated-code.md

import type { WideOperationArgument } from "../../../types.ts";
import type { OmitValueWhenNever } from "../../../types.ts";
import type { COUNTERFACT_RESPONSE } from "../../../types.ts";
import type { Context } from "../../../routes/_.context.ts";
import type { ResponseBuilderFactory } from "../../../types.ts";
import type { Pet } from "../../components/schemas/Pet.js";

export type HTTP_GET = (
  $: OmitValueWhenNever<{
    query: { tags?: Array<string> };
    path: never;
    header: never;
    body: never;
    context: Context;
    response: ResponseBuilderFactory<{
      200: {
        headers: never;
        requiredHeaders: never;
        content: {
          "application/xml": {
            schema: Array<Pet>;
          };
          "application/json": {
            schema: Array<Pet>;
          };
        };
      };
      400: {
        headers: never;
        requiredHeaders: never;
        content: never;
      };
    }>;
    x: WideOperationArgument;
    proxy: (url: string) => COUNTERFACT_RESPONSE;
    user: never;
  }>,
) =>
  | {
      status: 200;
      contentType?: "application/xml";
      body?: Array<Pet>;
    }
  | {
      status: 200;
      contentType?: "application/json";
      body?: Array<Pet>;
    }
  | {
      status: 400;
    }
  | { status: 415; contentType: "text/plain"; body: string }
  | COUNTERFACT_RESPONSE
  | { ALL_REMAINING_HEADERS_ARE_OPTIONAL: COUNTERFACT_RESPONSE };
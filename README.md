# Counterfact issue minimal reproduction

 1. Run `npm install`.
 2. Run `npx counterfact https://petstore3.swagger.io/api/v3/openapi.json api`.
    1. Observe that an error is produced.
 4. Run `npx tsx api/routes/_.context.ts`.
    1. Observe that it runs without error.


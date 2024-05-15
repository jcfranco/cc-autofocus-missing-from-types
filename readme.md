# cc-autofocus-missing-from-types

Repro case for TS error caused by missing `autofocus` prop/attr in input types.

## Steps to reproduce

1. Clone this repo
2. `npm install`
3. `npm start`

Note the following error:

```
[ ERROR ]  TypeScript: src/components/my-component/my-component.tsx:32:22
           Type '{ autofocus: true; }' is not assignable to type 'CalciteInput &
           HTMLAttributes<HTMLCalciteInputElement>'.Property 'autofocus' does not exist on type 'CalciteInput &
           HTMLAttributes<HTMLCalciteInputElement>'.

     L31:    <calcite-icon icon="banana"></calcite-icon>
     L32:    <calcite-input autofocus></calcite-input>
     L33:  </div>;
```
import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-starter-project-name',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [{
        src: '../node_modules/@esri/calcite-components/dist/calcite',
        dest: 'calcite',
      }],
    },
  ],
  testing: {
    browserHeadless: "new",
  },
};

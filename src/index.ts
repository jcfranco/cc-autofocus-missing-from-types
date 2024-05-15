/**
 * @fileoverview entry point for your component library
 *
 * This is the entry point for your component library. Use this file to export utilities,
 * constants or data structure that accompany your components.
 *
 * DO NOT use this file to export your components. Instead, use the recommended approaches
 * to consume components of this package as outlined in the `README.md`.
 */

import { setAssetPath } from '@esri/calcite-components/dist/components';
import '@esri/calcite-components/dist/calcite/calcite.css';

setAssetPath(window.location.href);

export { format } from './utils/utils';
export * from './components';


'use client';

/**
 * This is a generated file. If you modify it manually, your changes will be lost!
 * This file was generated from packages/generator-react-native-vector-icons/src/app/templates
 * If you're contributing to react-native-vector-icons, make the change there; otherwise it'll be lost
 *
 * MaterialSymbolsRounded icon set component.
 * Usage: <MaterialSymbolsRounded name="icon-name" size={20} color="#4F8EF7" />
 */

import { createIconSet } from '@react-native-vector-icons/common';

import glyphMap from '../glyphmaps/MaterialSymbolsRounded.json';

export const MaterialSymbolsRounded = createIconSet(glyphMap, {
  postScriptName: 'MaterialSymbolsRounded',
  fontFileName: 'MaterialSymbolsRounded.ttf',
});

export type MaterialSymbolsRoundedIconName = keyof typeof glyphMap;

/** @alias */
export default MaterialSymbolsRounded;

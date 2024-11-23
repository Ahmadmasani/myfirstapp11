import { Application } from '@nativescript/core';
import { Theme } from './utils/theme';

export const theme = new Theme();

Application.run({ moduleName: 'app-root' });
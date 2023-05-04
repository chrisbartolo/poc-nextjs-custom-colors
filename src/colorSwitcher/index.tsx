import base from './config/base';
import { IThemes } from './utils';
import dark from "@/colorSwitcher/config/dark";

/**
 * The default theme to load
 */
export const DEFAULT_THEME: string = 'base';

export const themes: IThemes = {
    base,
    dark,
};

import { themes } from './index';
import {getRGBColorRaw} from "@/app/colorUtil";

export interface ITheme {
    [key: string]: string;
}

export interface IThemes {
    [key: string]: ITheme;
}

export interface IMappedTheme {
    [key: string]: string | undefined;
}

export const mapTheme = (variables: ITheme): IMappedTheme => {
    return {
        '--color-primary': variables.primary || '',
        '--color-secondary': variables.secondary || '',
        '--color-positive': variables.positive || '',
        '--color-negative': variables.negative || '',
        '--color-text-primary': variables.textPrimary || '',
        '--background-primary': variables.backgroundPrimary || '',
        '--background-sec': variables.backgroundSecondary || '',
    };
};

export const extend = (
    extending: ITheme,
    newTheme: ITheme
): ITheme => {
    return {...extending, ...newTheme};
};

export const applyTheme = (theme: string): void => {
    const themeObject: IMappedTheme = mapTheme(themes[theme]);
    if (!themeObject) return;

    const root = document.documentElement;

    Object.keys(themeObject).forEach((property) => {
        if (property === 'name') {
            return;
        }

        console.log(`setProperty: ${property}  and object ${getRGBColorRaw(themeObject[property])}`);
        root.style.setProperty(property, getRGBColorRaw(themeObject[property]));
    });
};
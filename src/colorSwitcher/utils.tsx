
import { themes } from './index';

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

/////////////////////////////////////////////////////////////////////
// Change hex color into RGB /////////////////////////////////////////////////////////////////////
export const getRGBColor = (hex: string, type: string) => {
    let color = hex.replace(/#/g, "")
    // rgb values
    let r = parseInt(color.substring(0, 2), 16)
    let g = parseInt(color.substring(2, 4), 16)
    let b = parseInt(color.substring(4, 6), 16)

    return `--color-${type}: ${r}, ${g}, ${b};`
}

export const getRGBColorRaw = (hex: string | undefined) => {
    if (hex) {
        let color = hex.replace(/#/g, "")
        // rgb values
        const r = parseInt(color.substring(0, 2), 16)
        const g = parseInt(color.substring(2, 4), 16)
        const b = parseInt(color.substring(4, 6), 16)
        return `${r}, ${g}, ${b}`
    } else {
        return `0,0,0`;
    }
}

/////////////////////////////////////////////////////////////////////
// Determine the accessible color of text
/////////////////////////////////////////////////////////////////////
export const getAccessibleColor = (hex: string) => {
    let color = hex.replace(/#/g, "")
    // rgb values
    const r = parseInt(color.substring(0, 2), 16)
    const g = parseInt(color.substring(2, 4), 16)
    const b = parseInt(color.substring(4, 6), 16)
    const yiq = (r * 299 + g * 587 + b * 114) / 1000
    return yiq >= 128 ? "#000000" : "#FFFFFF"
}
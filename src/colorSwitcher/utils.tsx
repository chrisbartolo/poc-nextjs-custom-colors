import chroma from "chroma-js";
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
        '--color-customone': variables.customone || '',
        '--color-customtwo': variables.customtwo || '',
        '--color-customthree': variables.customthree || '',
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
    applyThemeObject(themeObject);
};

export const applyThemeObject = (themeObject: IMappedTheme): void => {
    if (!themeObject) return;

    const root = document.documentElement;

    Object.keys(themeObject).forEach((property) => {
        if (property === 'name') {
            return;
        }

        console.log(`setProperty: ${property}  and object ${getRGBColorRaw(themeObject[property])}`);
        root.style.setProperty(property, getRGBColorRaw(themeObject[property]));
    });
}

export const applyThemeFromColor = (primary: string, secondary: string): void => {
    const colors = chroma.scale([primary, secondary])
        .mode('lch').colors(7)
    console.log(colors);

    const theme = {
        primary: colors[0],
        secondary: colors[1],
        negative: colors[2],
        positive: colors[3],
        customone: colors[4],
        customtwo: colors[5],
        customthree: colors[6],
    }
    applyThemeObject(mapTheme(theme));
}

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

export const rawThemeInStyle = (theme: string): string => {
    const themeObject: IMappedTheme = mapTheme(themes[theme]);
    if (!themeObject) return "";

    const root = document.documentElement;
    const primaryColor = getRGBColor("#d30505", "primary")
    let presetColors = "";
    Object.keys(themeObject).forEach((property) => {
        if (property === 'name') {
            return;
        }
        presetColors += ` ${property}:${getRGBColorRaw(themeObject[property])}; `
    });
    return `:root {${presetColors}`;
};

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
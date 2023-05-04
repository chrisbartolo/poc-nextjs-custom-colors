/////////////////////////////////////////////////////////////////////
// Change hex color into RGB /////////////////////////////////////////////////////////////////////
export const getRGBColor = (hex: string, type: string) => {
    let color = hex.replace(/#/g, "")
    // rgb values
    let r = parseInt(color.substr(0, 2), 16)
    let g = parseInt(color.substr(2, 2), 16)
    let b = parseInt(color.substr(4, 2), 16)

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
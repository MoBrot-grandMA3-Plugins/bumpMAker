export interface defaultUIInput {
    height: number,
    width: number,
    position: string,
    columns: number,
    rows: number,
    extraStyles: (uiElement: any) => void
}

export interface buttonInput {
    parent: any,
    textShadow: number,
    position: string,
    text: string,
    font: string,
    TextAlignment: string,
    hasHover: boolean,
    extraStyles: (button: any) => void;
}

export interface layoutGridInput {
    columns: number,
    rows: number,
    position: string,
    extraStyles: (grid: any) => void;
}

export interface textInput {
    text: string,
    contentDriven: boolean,
    contentWidth: boolean,
    textAutoAdjust: boolean,
    position: string,
    padding: string,
    font: string,
    hasHover: boolean,
}

export interface userTextInputInput {
    width: number,
    height: number
    columns: number,
    rows: number,
    extraStyles: (textInput: any) => void
}
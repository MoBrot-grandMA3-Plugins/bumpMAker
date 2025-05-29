
export interface defaultUIInput {
    height: number,
    width: number,
    position: string,
    columns: number,
    rows: number,
    extraStyles: (uiElement: any) => void
}

class UIBuilder {

    baseInput: any;

    constructor(input: defaultUIInput, title: string) {
        this.baseInput = GetFocusDisplay().ScreenOverlay.Append("BaseInput");
        this.baseInput.name = title;
        this.baseInput.H = input.height;
        this.baseInput.W = input.width;
        this.baseInput.Columns = input.columns;
        this.baseInput.Rows = input.columns;
        this.baseInput.AutoClose = "No";
        this.baseInput.CloseOnEscape = "Yes";
        input.extraStyles(this.baseInput);
    }

    addFrame(input: defaultUIInput) {

        const frame = this.baseInput.Append("DialogFrame");
        frame.H = input.height;
        frame.W = input.width;
        frame.Columns = input.columns;
        frame.Rows = input.rows;
        frame.Anchors = input.position;
        input.extraStyles(frame);

        return this;
    }

    addTitleBar(input: {defaultUIInput: defaultUIInput, style: string}): TitleBar {

        const titleBar = this.baseInput.Append("Titlebar");
        titleBar.Columns = input.defaultUIInput.columns;
        titleBar.rows = input.defaultUIInput.rows;
        titleBar.Anchors = input.defaultUIInput.position;
        titleBar.texture = input.style;
        input.defaultUIInput.extraStyles(titleBar);

        return new TitleBar(titleBar);
    }



    getBaseInput() {
        return this.baseInput;
    }
}

export interface titleBarIconInput {
    title: string,
    style: string,
    icon: string,
    position: string,
    extraStyles: (uiElement: any) => void
}
export interface closeButtonInput {
    position: string,
    style: string
    extraStyles: (uiElement: any) => void
}

class TitleBar {

    titleBar;

    constructor(titleBar) {
        this.titleBar = titleBar;
    }

    addIcon(input: titleBarIconInput): TitleBar {
        const titleBarIcon = this.titleBar.Append("Titlebutton");
        titleBarIcon.Text = input.title;
        titleBarIcon.Texture = input.style;
        titleBarIcon.Anchor = input.position;
        titleBarIcon.Icon = input.icon;
        input.extraStyles(titleBarIcon);

        return this;
    }

    addCloseButton(input: closeButtonInput): TitleBar {

        const closeButton = this.titleBar.Append("CloseButton");
        closeButton.Anchors = input.position;
        closeButton.Texture = input.stlye;

        return this;
    }

    get() {
        return this.titleBar;
    }
}
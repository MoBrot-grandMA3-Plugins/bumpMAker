import {buttonInput, defaultUIInput, layoutGridInput, textInput, userTextInputInput} from "./InputTypes";

export class UIBuilder {

    baseInput: any;
    frame: any = null;

    handle: any;

    constructor(input: defaultUIInput, title: string, handle: any) {
        this.baseInput = GetFocusDisplay().ScreenOverlay.Append("BaseInput");
        this.baseInput.name = title;
        this.baseInput.H = input.height;
        this.baseInput.W = input.width;
        this.baseInput.Columns = input.columns;
        this.baseInput.Rows = input.columns;
        this.baseInput.AutoClose = "No";
        this.baseInput.CloseOnEscape = "Yes";
        input.extraStyles(this.baseInput);

        this.handle = handle;
    }

    addFrame(input: defaultUIInput): UIBuilder {

        const frame = this.baseInput.Append("DialogFrame");
        frame.H = input.height;
        frame.W = input.width;
        frame.Columns = input.columns;
        frame.Rows = input.rows;
        frame.Anchors = input.position;
        input.extraStyles(frame);

        this.frame = frame;

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

    addLayoutGrid(input: layoutGridInput) {

        if(this.frame == null) {
            Printf("A Grid needs a frame!");
            return this;
        }

        const grid = this.frame.Append("UILayoutGrid");
        grid.Columns = input.columns;
        grid.Rows = input.rows;
        grid.Anchors = input.position;
        input.extraStyles(grid);

        return this;
    }

    /*
    A Click method must be defined in the extraStyles argument.

    Example:
    button.Clicked = "Test";
    signTable.Test = (caller) => { PrintF("Test") }

     */
    addButton(input: buttonInput): UIBuilder {

        const button = input.parent.Append("Button");
        button.Anchors = input.position;
        button.Textshadow = input.textShadow;
        button.Text = input.text;
        button.Font = input.font;
        button.TextalignmentH = input.TextAlignment;
        button.HasHover = input.hasHover ? "YES" : "NO";
        button.PluginComponent = this.handle;
        input.extraStyles(button);
        return this;
    }

    addText(input: textInput) {

        if(this.frame == null) {
            Printf("A Grid needs a frame!");
            return this;
        }

        const text = this.frame.Append("UIObject");
        text.Text = input.text;
        text.ContentDriven = input.contentDriven;
        text.ContentWidth = input.contentWidth;
        text.TestAutoAdjust = input.textAutoAdjust;
        text.Anchors = input.position;
        text.Padding = input.padding;
        text.Front = input.font;
        text.HasHover = input.hasHover;
        text.BackColor = Root().ColorTheme.ColorGroups.Transparent;

        return this;
    }

    addUserTextInput(input: userTextInputInput) {

        const text = this.baseInput.Append("LineEdit");
        text.W = input.width;
        text.H = input.height;
        text.PluginComponent = this.handle;
        text.Columns = input.columns;
        text.Rows = input.rows;
        input.extraStyles(text);

        return this;
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

    constructor(titleBar: any) {
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
        closeButton.Texture = input.style;

        return this;
    }

    get() {
        return this.titleBar;
    }
}
import {UIBuilder} from "./ui/UiUtils";

const pluginName = select(1);
const componentName = select(2);
const signalTable = select(3);
const myHandle = select(4);

function main(this: void, displayHandle: Display, argument: string) {

    const ui = new UIBuilder(
        {
            columns: 500,
            height: 500,
            position: "",
            rows: 100,
            width: 100,
            extraStyles(uiElement: any): void {
            },
        },
        "test",
        myHandle
    );

    ui.addTitleBar({
     defaultUIInput: {
         columns: 3,
         rows: 1
     },
        style: "corner1"
    });

}

export default [main]
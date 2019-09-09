export default class FloatingButtonsAction{
    public get action(): VoidFunction {
        return this._action;
    }
    public set action(value: VoidFunction) {
        this._action = value;
    }
    public get color(): String {
        return this._color;
    }
    public set color(value: String) {
        this._color = value;
    }
    public get icon(): String {
        return this._icon;
    }
    public set icon(value: String) {
        this._icon = value;
    }

    constructor(private _icon: String, private _color: String, private _action: VoidFunction ){

    }
}
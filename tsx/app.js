/// <reference path="../typings/tsd.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DemoProps = (function () {
    function DemoProps() {
    }
    return DemoProps;
}());
var Demo = (function (_super) {
    __extends(Demo, _super);
    function Demo(props) {
        _super.call(this, props);
    }
    Demo.prototype.render = function () {
        return React.createElement("div", null, "Hello ", this.props.name);
    };
    return Demo;
}(React.Component));
ReactDOM.render(React.createElement(Demo, {name: "World"}), document.getElementById('example'));
//# sourceMappingURL=app.js.map
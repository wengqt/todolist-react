"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by weng on 2017/3/23.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var InputComponent = function (_React$Component) {
    _inherits(InputComponent, _React$Component);

    function InputComponent(props) {
        _classCallCheck(this, InputComponent);

        var _this = _possibleConstructorReturn(this, (InputComponent.__proto__ || Object.getPrototypeOf(InputComponent)).call(this, props));

        _this.handleSub = _this.handleSub.bind(_this);

        return _this;
    }

    _createClass(InputComponent, [{
        key: "handleSub",
        value: function handleSub() {
            //this.props.handleSubmit(this.refs.itemText.value.trim());
            console.log(this.refs.itemText.value.trim());
            // this.setState({item :this.refs.itemText.value.trim(),list:this.list.push(this.item)});
            // this.props.changeItem(this.refs.itemText.value.trim());
            this.props.changeList(this.refs.itemText.value.trim());
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement("input", { type: "text", ref: "itemText" }),
                _react2.default.createElement(
                    "button",
                    { onClick: this.handleSub },
                    "submit"
                )
            );
        }
    }]);

    return InputComponent;
}(_react2.default.Component);

exports.default = InputComponent;

//# sourceMappingURL=InputComponent-compiled.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _InputComponent = require("./InputComponent.js");

var _InputComponent2 = _interopRequireDefault(_InputComponent);

var _ListComponent = require("./ListComponent.js");

var _ListComponent2 = _interopRequireDefault(_ListComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by weng on 2017/3/26.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var TodoComponent = function (_React$Component) {
    _inherits(TodoComponent, _React$Component);

    function TodoComponent(props) {
        _classCallCheck(this, TodoComponent);

        var _this = _possibleConstructorReturn(this, (TodoComponent.__proto__ || Object.getPrototypeOf(TodoComponent)).call(this, props));

        _this.state = {
            list: []
        };

        return _this;
    }
    // changeItem(item){
    //     this.state.item = item;
    //     this.setState({
    //         item
    //     });
    // }


    _createClass(TodoComponent, [{
        key: "changeList",
        value: function changeList(last) {
            this.setState({
                list: [].concat(_toConsumableArray(this.state.list), [last])

            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(_InputComponent2.default, { changeList: function changeList(last) {
                        return _this2.changeList(last);
                    }, list: this.state.list }),
                _react2.default.createElement(_ListComponent2.default, { list: this.state.list })
            );
        }
    }]);

    return TodoComponent;
}(_react2.default.Component);

exports.default = TodoComponent;

//# sourceMappingURL=TodoComponent-compiled.js.map
var React = require("react")
var ReactDOM = require("react-dom")
var expect = require("expect")
var $ = require("jQuery")
var TestUtils = require("react-addons-test-utils")


var Todo = require("Todo");

describe("Todo", () => {
    it("Todo should exist", () => {
        expect(Todo).toExist();
    });

    // describe("render", () => {
    //     it("should render clock to output", () => {
    //         var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62} />)
    //         var $el = $(ReactDOM.findDOMNode(clock));
    //         var actualText = $el.find(".clock-text").text();
    //         expect(actualText).toBe("01:02")
    //     })
    // });

});

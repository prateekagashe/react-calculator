import React from "react";
import { Row } from "react-bootstrap";
import CustomButton from "../Button";
import "./Calculator.css";
import ScientificMode from "./ScientificMode";
import ToggleButton from "../ToggleTheme";
import CustomInput from "../Input";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input1: 0,
            input2: 0,
            result: "",
            lastUpdated: "input1",
            inputArray: [],
            calculatorContainer: "calculator-light",
            buttonClass: "btn-Operator-light",
        };
    }

    handleColorChange = (val) => {
        if (val == "light") {
            this.setState({
                calculatorContainer: "calculator-light",
                buttonClass: "btn-Operator-light",
            });
        } else {
            this.setState({
                calculatorContainer: "calculator-dark",
                buttonClass: "btn-Operator-dark",
            });
        }
    };

    operator = (val) => {
        this.setState({
            input1: this.state.input1 == 0 ? val : this.state.input1 + val,
            lastUpdated: "input1",
        });
    };

    HandleScientificOperation = (val) => {
        let tempInput;
        let res;
        if (this.state.lastUpdated == "input1") {
            tempInput = this.state.input1;
        } else {
            tempInput = this.state.input2;
        }
        if (val == "√") {
            res = Math.sqrt(tempInput)
        } else if (val == "square") {
            res = tempInput ** 2;
        } else {
            res =  tempInput > 0 ? -Math.abs(tempInput) : Math.abs(tempInput)
        }
        this.setState({ 
            input1: res,
        });
    };

    setVariableState = (arr, res) => {
        this.setState({
            input2: res,
            lastUpdated: "input2",
            input1: "",
            inputArray: arr,
        });
    };

    clearDisplay = () => {
        this.setState({
            input1: 0,
            input2: 0,
            inputArray: [],
        });
    };

    calculate = (val) => {
        let previouInput;
        previouInput = this.state.input1;
        this.setState({
            input2: previouInput,
            input1: 0,
            lastUpdated: "input2",
        });
        let arr = this.state.inputArray;
        arr.push(val);

        if (arr.length === 2) {
            if (arr[0] == "+") {
                let res = parseFloat(this.state.input2) + parseFloat(this.state.input1);
                arr = arr.splice(1);

                if (arr[0] == "=") {
                    arr.splice(0);
                    this.setState({
                        input1: res,
                        input2: 0,
                        lastUpdated: "input1",
                    });
                } else {
                    this.setVariableState(arr, res);
                }
            } else if (arr[0] == "-") {
                arr = arr.splice(1);

                let res = parseFloat(this.state.input2) - parseFloat(this.state.input1);
                if (arr[0] == "=") {
                    arr.splice(0);
                    this.setState({
                        input2: res,
                        input1: 0,
                        lastUpdated: "input2",
                    });
                } else {
                    this.setVariableState(arr, res);
                }
            } else if (arr[0] == "*") {
                arr = arr.splice(1);
                let res = parseFloat(this.state.input2) * parseFloat(this.state.input1);
                if (arr[0] == "=") {
                    arr.splice(0);
                    this.setState({
                        input1: res,
                        input2: 1,
                        lastUpdated: "input1",
                    });
                } else {
                    this.setVariableState(arr, res);
                }
            } else if (arr[0] == "/") {
                arr = arr.splice(1);
                let res = parseFloat(this.state.input2) / parseFloat(this.state.input1);
                if (arr[0] == "=") {
                    arr.splice(0);
                    this.setState({
                        input2: res,
                        input1: 1,
                        lastUpdated: "input2",
                    });
                } else {
                    this.setVariableState(arr, res);
                }
            } else {
                this.setState({
                    inputArray: arr,
                });
            }
        }
    };

    render() {
        return (
            <div className={this.state.calculatorContainer}>
                <CustomInput
                    inputDisabled={true}
                    className={'calculator-display'}
                    inputValue={
                        this.state.lastUpdated == "input1"
                            ? this.state.input1
                            : this.state.input2
                    }
                />
                <Row>
                    <CustomButton
                        className={this.state.buttonClass}
                        name="1"
                        handler={() => this.operator("1")}
                    />
                    <CustomButton
                        className={this.state.buttonClass}
                        name="2"
                        handler={() => this.operator("2")}
                    />
                    <CustomButton
                        className={this.state.buttonClass}
                        name="3"
                        handler={() => this.operator("3")}
                    />
                    <CustomButton
                        className={this.state.buttonClass}
                        name="Add (+)"
                        handler={() => this.calculate("+")}
                    />
                </Row>
                <Row>
                    <CustomButton
                        className={this.state.buttonClass}
                        name="4"
                        handler={() => this.operator("4")}
                    />
                    <CustomButton
                        className={this.state.buttonClass}
                        name="5"
                        handler={() => this.operator("5")}
                    />
                    <CustomButton
                        className={this.state.buttonClass}
                        name="6"
                        handler={() => this.operator("6")}
                    />
                    <CustomButton
                        className={this.state.buttonClass}
                        name="Subtract (-)"
                        handler={() => this.calculate("-")}
                    />
                </Row>
                <Row>
                    <CustomButton
                        className={this.state.buttonClass}
                        name="7"
                        handler={() => this.operator("7")}
                    />
                    <CustomButton
                        className={this.state.buttonClass}
                        name="8"
                        handler={() => this.operator("8")}
                    />
                    <CustomButton
                        className={this.state.buttonClass}
                        name="9"
                        handler={() => this.operator("9")}
                    />
                    <CustomButton
                        className={this.state.buttonClass}
                        name="Multiply (*)"
                        handler={() => this.calculate("*")}
                    />
                </Row>
                <Row>
                    <CustomButton
                        className={this.state.buttonClass}
                        name="Clear"
                        handler={() => this.clearDisplay()}
                    />
                    <CustomButton
                        className={this.state.buttonClass}
                        name="0"
                        handler={() => this.operator("0")}
                    />
                    <CustomButton
                        className={this.state.buttonClass}
                        name="="
                        handler={() => this.calculate("=")}
                    />
                    <CustomButton
                        className={this.state.buttonClass}
                        name="Divide (/)"
                        handler={() => this.calculate("/")}
                    />
                </Row>
                <Row>
                    <ToggleButton
                        className={this.state.buttonClass}
                        name="Light Theme"
                        handler={() => this.handleColorChange("light")}
                    />
                    <ToggleButton
                        className={this.state.buttonClass}
                        name="Dark Theme"
                        handler={() => this.handleColorChange("dark")}
                    />
                    <ScientificMode
                        className={this.state.buttonClass}
                        HandleScientificOperation={
                            this.HandleScientificOperation
                        }
                    />
                </Row>
            </div>
        );
    }
}

export default Calculator;

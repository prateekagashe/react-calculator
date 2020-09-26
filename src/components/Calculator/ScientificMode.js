import React from "react";
import CustomButton from "../Button";

class ScientificMode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scientificMode: false,
        };
    }

    HandleMode = () => {
        this.setState({
            scientificMode: !this.state.scientificMode,
        });
    };

    render() {
        var className = this.props.className;
        var HandleScientificOperation = this.props.HandleScientificOperation;

        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <CustomButton
                    className={className}
                    name={
                        this.state.scientificMode
                            ? "Normal Mode"
                            : "Scientific Mode"
                    }
                    handler={(val) => this.HandleMode()}
                />
                {this.state.scientificMode ? (
                    <div>
                        <CustomButton
                            className={className}
                            name="√"
                            handler={(val) => HandleScientificOperation("√")}
                        />
                        <CustomButton
                            className={className}
                            name="Square"
                            handler={(val) => HandleScientificOperation("square")}
                        />
                        <CustomButton
                            className={className}
                            name="±"
                            handler={(val) => HandleScientificOperation("±")}
                        />
                    </div>
                ) : null}
            </div>
        );
    }
}

export default ScientificMode;

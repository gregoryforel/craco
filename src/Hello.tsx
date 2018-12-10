import { Button } from "antd";
import React, { Component } from "react";
import randomColor from "randomcolor";

interface IProps {
  name: string;
  onClickButton: (args: {name: string}) => Promise<void>;
}

interface IState {
  isProcessing: boolean;
}

class Hello extends React.Component<IProps, IState> {
  public state: IState = {
    isProcessing: false
  };
  public render(): React.ReactNode {
    return (
      <div style={{ color: randomColor() }}>
        <div>Hello, {this.props.name}</div>
        <Button
          type="primary"
          loading={this.state.isProcessing}
          onClick={async () => {
            this.setState({ isProcessing: true });
            await this.props.onClickButton(name);
            this.setState({ isProcessing: false });
          }}
        >
          {this.state.isProcessing ? "Updating" : "Change color"}
        </Button>
      </div>
    );
  }
}

export default Hello;
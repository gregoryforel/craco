import { Button } from "antd";
import * as React from "react";

import * as styles from "./App.less";
import * as styles2 from "./app.module.less";
import "./main.less";

class App extends React.Component {
  public render() {
    const moduleStyle = styles2.module;

    const text = moduleStyle
      ? "When using CSS Modules, antd's button doesn't have the right styling anymore"
      : "Antd button looks good, but now, CSS module don't work anymore";

    return (
      <div className={styles.app}>
        <div className={styles2.module}>{text}</div>

        <Button type="danger">Antd button</Button>
      </div>
    );
  }
}

export default App;

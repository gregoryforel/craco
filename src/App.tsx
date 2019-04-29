import { Button } from "antd";
import * as React from "react";

import * as styles from "./App.less";

class App extends React.Component {
  public render() {
    return (
      <div className={styles.app}>
        hi
        <Button type="danger">Antd button</Button>
      </div>
    );
  }
}

export default App;

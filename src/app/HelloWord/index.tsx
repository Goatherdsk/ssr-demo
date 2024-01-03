import React, { Component }  from "react";
import { observer, inject } from 'mobx-react';
// import { useStore } from "./hooks";

interface Props {
  appStore?: any;
}

@inject('appStore')
@observer
class HelloWord extends Component<Props> {
  render() {
    // const { appStore } = useStore() || {};
    console.log('store', this.props);
    const appStore = this.props?.appStore || {};
    const { num, setNum } = appStore || {};
    return <div>
      helloWord! {num}
      <div onClick={() => setNum(num+1)}>addNum</div>
    </div>
  }
}

export default (HelloWord);
import * as React from "react";
import { Link } from 'react-router'

interface InPanelProps {
  upWeightData:any;
}
interface InPanelStates {
  weightData:any;
}


class InPanel extends React.Component<InPanelProps, InPanelStates> {
  public state:InPanelStates;
  constructor(props:InPanelProps){
    super(props);
    this.state={
      weightData:null,
    }
  }
  hidePop() {
    let pop = document.querySelector('.in-panel');
    let popFrom=document.querySelector('.list-panel');
    let is = pop.classList.contains('unsee');
    if (!is) pop.classList.add('unsee');
    popFrom.classList.add('unsee');
  }
  freshWeight(e){
    let val=parseInt(e.target.value);
    if(typeof(val)!='number'){
      alert('请输入数字');
      return;
    }
    this.setState({weightData:val});
  }
  render() {
    return <div className="in-panel unsee">
      <div className="panel">
        <div className="row">
          <label>体重</label>
          <input type="tel" onChange={this.freshWeight.bind(this)} defaultValue={this.state.weightData}/>
        </div>
        <div className="clearfix">
          <a onClick={this.hidePop} className="cancel">取消</a>
          <a className="save" onClick={this.props.upWeightData.bind(this,this.state.weightData)}>保存</a>
        </div>
      </div>
    </div>;
  }
}

export default InPanel;

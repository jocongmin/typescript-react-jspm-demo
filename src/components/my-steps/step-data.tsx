import * as React from "react";
interface StepDataProps {
  stepNum:number;
}
interface StepDataStates {
  stepNum:number;
}


class StepData extends React.Component<StepDataProps,StepDataStates> {
  public state:StepDataStates;
  constructor(props:StepDataProps){
    super(props);
    this.state={
      stepNum:0,
    }
  }
  leftDayData(){
    let onEl=document.querySelector('#num_nav span.on');
    onEl.previousSibling.click();
  }
  rightDayData(){
    let onEl=document.querySelector('#num_nav span.on');
    onEl.nextSibling.click();
  }
  refreshStep(){
    let onEl=document.querySelector('#num_nav span.on');
    onEl.click();
  }
  componentWillReceiveProps(newprops,newstates){
  }
  render() {
    return <div className="step-data">
            <i className="btn-left" onClick={this.leftDayData.bind(this)}></i>
            <i className="btn-right" onClick={this.rightDayData.bind(this)}></i>
            <div className="slider-box">
                <div className="data">
                    <p>{this.props.stepNum}</p>
                    <a href="javascript:void(0);" onClick={this.refreshStep.bind(this)}><em className="foot"></em>步数</a>
                </div>
            </div>
        </div>;
  }
}

export default StepData;

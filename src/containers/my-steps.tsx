
import * as React from "react";
import { FooterData, TopBar, NavDate, StepData, InPanel, ListPanel } from '../components/my-steps/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as stepNumberActions from '../reducers/stepNumber-reducer';
const $data = [
  {
    mouth: 0,
    day: 8,
    stepnum: 88866
  }
];


interface MyStepsProps {
  stepNumber:any;
  actions:any;
}
interface MyStepsStates {
  hideBtn: boolean;
}


class MySteps extends React.Component<MyStepsProps, MyStepsStates> {
  public state: MyStepsStates;
  public actions:any;
  constructor(props: MyStepsProps) {
    super(props);
    // set initial state
    this.state = {
      hideBtn: false,
    };
    this.actions=this.props.actions;
  }
  getWeightData(data:any) {
    this.actions.upWeightData({weightNewData:data});
    const inPanel=document.querySelector('.in-panel');
    inPanel.classList.add('unsee');
  }
  componentDidMount(){
  }
  render(): JSX.Element {
    const states=this.props.stepNumber;
    const actions=this.actions;
    return <div className="mystep">
      <TopBar hidetab={false} title={'计步器'} hideBtn={this.state.hideBtn} />
      <NavDate refreshStepNum={this.actions.updateBaseCurrency}/>
      <StepData stepNum={states.dayStep}/>
      <p className="tip">点击上方"步数"按钮更新步数</p>
      <FooterData distance={states.distance} hots={states.hot}/>
      <InPanel upWeightData={this.getWeightData.bind(this)} />
      <ListPanel bindEquiment={actions.bindEquiment} addEquiment={actions.addEquiment}/>
    </div>;
  }
}

function mapStateToProps(state) {
  return {
    stepNumber: state.stepNumber,
  };
}

const actions = Object.assign({}, stepNumberActions);
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MySteps);

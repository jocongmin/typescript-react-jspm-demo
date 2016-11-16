import * as React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {CommBtn,TopBar,Form} from '../components/my-body-data/index';
import * as formDataActions from '../reducers/formData-reducer';


interface MyBodyDataProps {
    name: string,
    formData:any,
    actions:any,
}
interface MyBodyDataStates {
    hideBtn:boolean,
}

class MyBodyData extends React.Component<MyBodyDataProps, MyBodyDataStates> {
    public state:MyBodyDataStates;
    public actions:any;
    constructor(props:MyBodyDataProps){
      super(props);
      this.state={
        hideBtn:true,
      }
      this.actions=this.props.actions;
    }
    upFormData(){
    }
    componentDidMount(){
    }
    getChildFormData(childFormData:any){
      this.actions.upFormData({formData:childFormData});
    }
    render():JSX.Element {
        const { currencies } = this.props.formData;
        const { actions } = this.props;
        console.log(this.props)
        return <div className="mydata-body">
                <TopBar hidetab={true} title={'我的身体数据'} hideBtn={this.state.hideBtn}/>
                <Form upDataToFth={this.getChildFormData.bind(this)} updateData={actions.updateBaseCurrency}/>
                <CommBtn fhEvent={this.upFormData}/>
            </div>;
    }
}
function mapStateToProps(state) {
  return {
    formData: state.formData,
  };
}

const actions = Object.assign({}, formDataActions);
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyBodyData);

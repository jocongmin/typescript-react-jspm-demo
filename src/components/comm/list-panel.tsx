import * as React from "react";
import { Link } from 'react-router'

interface ListPanelProps {
  bindEquiment:any;
  addEquiment:any;
}

class ListPanel extends React.Component<ListPanelProps, {}> {
    showPop(e){
      let pop=document.querySelector('.in-panel');
      let btnPop=document.querySelector('.list-panel');
      let is =pop.classList.contains('unsee');
    　 if(is) pop.classList.remove('unsee');
      btnPop.classList.add('unsee');
    }
    render() {
        return <div className="list-panel unsee">
            <a onClick={this.props.bindEquiment}>解绑设备</a>
            <a onClick={this.props.addEquiment}>新增设备</a>
            <a className="alter" onClick={this.showPop}>修改体重</a>
        </div>;
    }
}

export default ListPanel;

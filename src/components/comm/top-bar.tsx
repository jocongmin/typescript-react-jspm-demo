import * as React from "react";

interface TopBarProps {
  hideBtn:boolean;
  title:string;
  hidetab:boolean;
  todoFatherEvent:any;
}

class TopBar extends React.Component<TopBarProps, {}> {
    constructor(props:TopBarProps){
      super(props);
    }
    showPop(){
      let pop=document.querySelector('.list-panel');
      let is=pop.classList.contains('unsee')
      if(is){
        pop.classList.remove('unsee');
      }else{
        pop.classList.add('unsee');
      }
    }
    render() {
        return <div className="nav top-nav">
            <a href="javascript:history.go(-1)" className="bk"></a>
            <span className="tit">{this.props.title}</span>
            <a className={this.props.hidetab?'':'hm'} onClick={this.showPop.bind(this)}></a>
        </div>;
    }
}

export default TopBar;

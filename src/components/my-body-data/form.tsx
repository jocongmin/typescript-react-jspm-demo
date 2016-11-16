import * as React from "react";

interface FormProps {
  updateData:any,
  upDataToFth:any,
}
interface FormStates{
   formData:{
     sex:number,
     birth:string,
     high:any,
     weight:any
   },
}
class Form extends React.Component<FormProps,FormStates> {
    public state:FormStates;
    public refs:any;
    constructor(props:FormProps){
      super(props);
      this.state={
        formData:{
          sex:0,
          birth:"2000-02-12",
          high:170,
          weight:120
        }
      }
    }
    highHtml(){
      let optionHtml="";
      for(var i=150;i<250;i++){
        optionHtml+="<option value="+i+">"+i+"cm</option>";
      }
      return optionHtml;
    }
    weightHtml(){
      let optionHtml="";
      for(var i=50;i<200;i++){
        optionHtml+="<option value="+i+">"+i+"斤</option>";
      }
      return optionHtml;
    }
    sexChange(){
      var that=this;
      this.refs.man.onclick=function(){
        that.state.formData.sex=1;
        that.forceUpdate();
      }
      this.refs.woman.onclick=function(){
        that.state.formData.sex=0;
        that.forceUpdate();
      }
    }
    updateBirth(e){
      let val=e.target.value;
      this.state.formData.birth=val;
    }
    updateHigh(e){
      let val=e.target.value;
      this.state.formData.high=val;
    }
    updateWeight(e){
      let val=e.target.value;
      this.state.formData.weight=val;
    }
    updateFormData(){
      var that = this;
      let btn=document.querySelector('.next-bg');
      btn.addEventListener('click',function(e){
        that.props.upDataToFth.bind(that,that.state.formData)();
      },false);
    }
    componentDidMount(){
      this.sexChange();
      this.updateFormData();
    }
    render() {
        return <div>
            <div ref="sex" className="sex-change flex">
                <div className="name flex1">
                    <span ref="man" className={this.state.formData.sex?"man on":"man"}></span>
                    <p>男</p>
                </div>
                <div className="name flex1">
                    <span ref="woman" className={this.state.formData.sex?"woman":"woman on"}></span>
                    <p>女</p>
                </div>
            </div>
            <div className="input-box flex">
               <label>生日</label>
               <input type="date" onChange={this.updateBirth.bind(this)} defaultValue={this.state.formData.birth}/>
           </div>
            <div className="input-box flex">
                <label>身高</label>
                <select className="" name="" onChange={this.updateHigh.bind(this)} defaultValue={this.state.formData.high} dangerouslySetInnerHTML={{__html: `${this.highHtml()}`}}>
                </select>
            </div>
            <div className="input-box flex">
                <label>体重</label>
                <select className="" name="" onChange={this.updateWeight.bind(this)} defaultValue={this.state.formData.weight}　dangerouslySetInnerHTML={{__html: `${this.weightHtml()}`}}>
                </select>
            </div>
        </div>
    }
}

export default Form;

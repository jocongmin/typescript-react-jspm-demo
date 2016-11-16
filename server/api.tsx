
class api{
  constructor(){

  }
  getStep(whichMouth,whichDay){
    console.log(whichMouth,whichDay);
    enum stepData {dayStep,distance,hot};
    stepData.dayStep=parseInt(Math.random()*whichDay*1000);
    stepData.distance=parseInt(Math.random()*whichDay*1000);
    stepData.hot=parseInt(Math.random()*whichDay*1000);
    return stepData;
  }
  upWeight(weightNewData){
    console.log(weightNewData,'weightNewData')
  }

  upBodyFormData(formData){
    console.log(formData)
  }
  bindEquiment(){
    console.log('bindEquiment')
  }
  addEquiment(){
    console.log('addEquiment')
  }
}

let API=new api();
export default API;

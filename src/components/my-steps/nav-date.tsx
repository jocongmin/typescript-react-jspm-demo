import * as React from "react";
interface NavDateProps {
  refreshStepNum:any;
}
interface NavDateStates {
  dateData: any[];
  theMouth: number;
  dayCount: any[];
  numDay: number;
  today:number;
  clickMouth: number;
  target: string;
  nowDayInNum: number;
  scrollNeed: number;
  mouthDay: {
    mouth: number,
    day: number
  }
}

class NavDate extends React.Component<NavDateProps, NavDateStates> {
  public state: NavDateStates;
  public numNav: any;
  public refs: any;
  public ofLeft: any;
  public onEl: any;
  public scrollBox: any;
  public screenWidth: any;
  public todayEl: any;
  constructor(props: NavDateProps) {
    super(props);
    this.state = {
      dateData: [],
      theMouth: 0,
      numDay: 0,
      today:0,
      dayCount: [],
      clickMouth: -1,
      target: "",
      nowDayInNum: 0,
      scrollNeed: 0,
      mouthDay: {　　　//当前点击对象的所处的月份和日期
        mouth: 0,
        day: 0
      }
    }
  }
  whichToday() {
    let time = new Date();
    let today = time.getDate();
    this.state.today=today;
    return this.state.today;
  }
  mouthDayCount(mouthBefore) {
    function days_in_month(y, m) {
      return 32 - new Date(y, m - 1, 32).getDate();
    }
    var now = new Date();
    console.dir(now)
    var y = now.getYear();
    var m = now.getMonth() + 1 - mouthBefore;
    if (m - 1 == 12) {
      y += 1;
      m = 1;
    }
    return days_in_month(y, m);
  }
  centerOnEl() {
    let ofLeft = this.todayEl.offsetLeft;
    this.todayEl.classList.add('on');
    let screenWidth = this.screenWidth;
    let scrollNeed = ofLeft - (screenWidth / 2) + 20;
    this.scrollBox.scrollLeft = scrollNeed;
  }
  dateDataProd(mouthBefore) {
    this.state.numDay = this.mouthDayCount(mouthBefore);
    let hasShowDay = this.state.dateData;
    let dateData = [];
    for (var i = 1; i <= this.state.numDay; i++) {
      dateData.push(i);
    }
    let newAllDate= dateData.concat(hasShowDay);
    this.setState({dateData: newAllDate});
  }
  onClass(which, e) {
    //传递的数据要在第一个中获取，第二个是事件，不能相反
    let the = e.target;
    this.state.target = the;
    //the=the.nextSibling;
    let all = this.refs.box.childNodes;
    let ofLeft = the.offsetLeft;
    let screenWidth = this.screenWidth;
    let scrollNeed = ofLeft - (screenWidth / 2) + 20;
    this.state.scrollNeed = scrollNeed;
    let mouth = the.getAttribute('data-mouth');
    let day = the.innerHTML;
    if(day=='今天'){
      day=this.state.today;
    }
    this.state.mouthDay.mouth = parseInt(mouth);
    this.state.mouthDay.day = day;
    if (which>this.state.nowDayInNum) {
      return;
    }
    all.forEach(function(item) {
      item.classList.remove('on');
    });
    if (the.classList.contains('needAppend')) {
      if (mouth <= this.state.clickMouth) return;
      let left = the.scrollLeft;
      let allLeft = (this.state.numDay * 57) + left;
      this.state.scrollNeed = allLeft;
      this.appendDate();
      this.state.clickMouth++;
    } else {
      the.classList.add('on');
      //加载更多上个月时间的情况下会自动渲染加　on ，所以这里add on 只需要放在不加载更多上个月时间的情况下即可
    }
    this.refs.box.scrollLeft = scrollNeed;
    let mouthDay:any=this.state.mouthDay;
    let whichMouth=mouth;
    this.props.refreshStepNum({mouthDay:mouthDay});
  }
  appendDate() {
    let mouth = this.state.theMouth;
    this.dateDataProd(mouth);
  }
  dateEl(dateAll) {
    var that = this;
    let allSpan = [];
    this.whichToday();
    let today=this.state.today;
    let theMouth = this.state.theMouth;
    let max = dateAll.length - 1;
    let once = false;
    let eachNum = this.state.numDay;
    this.state.dayCount.unshift(eachNum);
    let dayCountArr = this.state.dayCount;
    let next = 0;
    let eachMouth = dayCountArr.length - 1;
    let plusDay = dayCountArr[0];
    const last = dayCountArr.length - 1;
    const nowMouthDayNum = dayCountArr[last];
    for (var i = 0; i <= max; i++) {
      if (i >= plusDay) {
        next++;
        plusDay += dayCountArr[next];
        eachMouth--;
      }
      const leaveDayNum = plusDay - nowMouthDayNum;
      this.state.nowDayInNum = today + leaveDayNum-1;
      if (i == (this.state.nowDayInNum) && eachMouth == 0) {
        allSpan.push(<span key={i} data-mouth={eachMouth} 　onClick={this.onClass.bind(this, i)} className='today'>今天</span>);
      } else {
        if (i <= 4) {
          allSpan.push(<span key={i} data-mouth={eachMouth} 　onClick={this.onClass.bind(this, i)} className='needAppend'>{dateAll[i]}</span>);
        } else {
          let is = (eachMouth == this.state.mouthDay.mouth && dateAll[i] == this.state.mouthDay.day);
          //这里　is条件才能成功，因为一旦有添加就会不会是ｉ＜＝4的情况了，需要在这里添加is的情况
          if (is) {
            allSpan.push(<span key={i} data-mouth={eachMouth} 　onClick={this.onClass.bind(this, i)} className='on'>{dateAll[i]}</span>);
          } else {
            allSpan.push(<span key={i} data-mouth={eachMouth} onClick={this.onClass.bind(this, i)}>{dateAll[i]}</span>);
          }
        }
      }
    }
    this.state.theMouth += 1;
    return allSpan;
  }

  noTouchMove(){
    this.scrollBox.addEventListener('touchmove',function(event){
       event.preventDefault();
    },false);
  }
  shouldComponentUpdate(newprops,newstates){
    if(newprops.refreshStepNum){
      if(newstates.target.classList.contains('needAppend')){
        return true;
      }
      return false;
    }
    return true;
  }
  componentWillMount() {
    this.dateDataProd(0);
  }
  componentDidMount() {
    let that = this;
    this.numNav = document.querySelectorAll('#num_nav span');
    this.onEl = document.querySelector('#num_nav .on');
    this.todayEl = document.querySelector('.today');
    this.todayEl.click();
    this.scrollBox = document.querySelector('#num_nav');
    this.screenWidth = document.body.offsetWidth;
    this.centerOnEl();
    this.noTouchMove();
  }
  componentDidUpdate() {
    var that = this;
    let box = this.refs.box;
    //box.scrollLeft=this.state.scrollNeed;
    box.childNodes.forEach(function(el) {
      let is = (el.classList.contains('on'));
      if (is) {
        let ofLeft = el.offsetLeft;
        let screenWidth = that.screenWidth;
        let scrollNeed = ofLeft - (screenWidth / 2) + 20;
        that.scrollBox.scrollLeft = scrollNeed;
      }
    })
  }
  render() {
    let that = this;
    const html = that.dateEl(that.state.dateData);
    return <div ref="box" className="nav date" id="num_nav">
      {html}
    </div>;
  }
}

export default NavDate;

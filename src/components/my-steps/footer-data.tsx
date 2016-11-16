import * as React from "react";

interface FooterDataProps {
  distance:number;
  hots:number;
}

class FooterData extends React.Component<FooterDataProps, {}> {
  render() {
    return <footer className="footer">
            <div className="bottom">
                <div className="v-line">
                    <p className="num">{this.props.distance}</p>
                    <p className="unit"><i className="m-unit"></i>距离:公里</p>
                </div>
                <div>
                    <p className="num">{this.props.hots}</p>
                    <p className="unit"><i className="k-unit"></i>热量:千卡</p>
                </div>
            </div>
            <p className="text">powered by butup.me</p>
        </footer>;
  }
}

export default FooterData;

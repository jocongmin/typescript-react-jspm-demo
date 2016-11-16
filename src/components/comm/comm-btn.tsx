import * as React from "react";
import { Link } from 'react-router'

interface CommBtnProps {
  fhEvent:any,
}

class CommBtn extends React.Component<CommBtnProps, {}> {
    render() {
        return <div className="comm-btn">
            <Link to="/steps"><span className="sp next-bg" onClick={this.props.fhEvent}>下一步</span></Link>
        </div>;
    }
}

export default CommBtn;

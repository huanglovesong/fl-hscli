import React from 'react';
import PropTypes from 'prop-types';
import './less/topnav.less';
import { connect } from 'dva';

class TopNav extends React.Component {

  static propTypes = {

  }

  static defaultProps = {

  }

  constructor(props) {
    super(props);

  }

  componentWillMount() {
    const path = this.props.routing.location.pathname;
    this.setState({
      navArr: path === '/' ? ['基本资料'] : window.getBrandData(),
    })
  }

  render() {
    const { navArr } = this.state;
    //获取传递的第三级页面
    const { childPage } = this.props;
    return (
      <div className="topnav-box">
        <p>
          {
            navArr.length > 0 && navArr.map((item, index) => {
              if (index === 0) {
                return <span key={index} className="navcolor">{item}</span>
              } else {
                return <span key={index}>/{item}{childPage && `/${childPage}`}</span>
              }
            })
          }
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
}
export default connect(mapStateToProps)(TopNav);

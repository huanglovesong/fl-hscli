import React from 'react';
import { connect } from 'dva';

class Home extends React.Component {
  componentWillMount() {
    this.props.dispatch({ type: 'home/mypage', payload: { id: localStorage.getItem('MerchantId') } });
  }
  componentWillReceiveProps(nextProps) {
    const { mypageResult } = nextProps.home;
    if (mypageResult !== this.props.home.mypageResult) {
      if (mypageResult.code === '0') {
        this.setState({
          pageData: mypageResult.data
        })
      }
    }
  }

  render() {
    return (
      <div>
        Home
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    ...state,
  };
}
export default connect(mapStateToProps)(Home);

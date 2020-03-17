import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Users from './Users';

const mapStateToProps = state => {
    return {
        accountOwners: state.accountOwners.data,
    };
};

// console.log("2222222222", mapStateToProps())

export default connect()(Users);


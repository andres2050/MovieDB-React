import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ProductActions from './MovieActions';

function mapStateToProps(state) {
    return {...state};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...ProductActions,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
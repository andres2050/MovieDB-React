function mapStateToProps(state) {
    return {...state};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...ProductActions,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
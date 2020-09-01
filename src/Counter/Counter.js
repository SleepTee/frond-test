import React from "react";
import {connect} from "react-redux"
import {add2} from "../redux/actions/action";

class Counter extends React.Component{
    render() {
        return (
            <div style={{padding:20 , border: "1px solid #ccc" }}>
                <h1>Counter: {this.props.counter2}</h1>
                <hr />
                <button onClick={() => this.props.onAdd(1)}>Add</button>
                <button onClick={() => this.props.onAdd(-1)}>Sub</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        counter2: state.Reduxcounter2.counter2
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAdd: number => dispatch(add2(number)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)
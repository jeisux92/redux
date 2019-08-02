import React, { Component } from 'react';
import { connect } from "react-redux";
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {
    incCounter,
    decCounter,
    addCounter,
    subCounter,
    storeResult,
    deleteResult
} from "../../store/actionCreators";
class Counter extends Component {
    state = {
        counter: 0
    }

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementerCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementerCounter} />
                <CounterControl label="Add 5" clicked={() => this.props.onAddCounter(5)} />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubCounter(5)} />
                <hr />
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {this.props.rslts.map((rst) => <li onClick={() => this.props.onDeleteResult(rst..id)} key={rst.id}>{rst.value}</li>)}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ctr: state.counter,
    rslts: state.results
})

const mapDispatchToProps = dispatch => ({
    onIncrementerCounter: () => dispatch(incCounter()),
    onDecrementerCounter: () => dispatch(decCounter()),
    onAddCounter: (value) => dispatch(addCounter(value)),
    onSubCounter: (value) => dispatch(subCounter(value)),
    onStoreResult: () => dispatch(storeResult()),
    onDeleteResult: (index) => dispatch(deleteResult(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
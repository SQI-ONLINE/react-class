import React from 'react'

class Notebook extends React.Component {

    constructor(props) {
        super(props);
        this.state = { count: 0, name: "" }

        this.increaseCount.bind();
    }

    testButton = () => {
        alert("BUTTON IS WORKING!!!")
    }

    increaseCount = () => {
        // alert("something")
        this.setState({ count: this.state.count + 1 });
        // this.setState((state, props) => {
        //     this.setState({count: state.count})
        // })
    }

    componentDidMount() {

    }

    render() {
        return (
            <>
                <div className="text-center">
                    <p className="display-4">FIRST CLASS COMPONENT</p>
                    <Pages count={this.state.count} />
                    <button onClick={this.increaseCount}>Increase</button>
                </div>
            </>
        )
    }
}


class Pages extends React.Component {
    render() {
        return (
            <>
                <p>Page {this.props.count}</p>
            </>
        )
    }
}

export default Notebook;

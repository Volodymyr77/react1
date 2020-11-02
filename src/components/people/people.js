import React, {Component} from 'react';

class People extends Component {

    constructor(props) {
        super(props);
        let {people} = this.props;
        this.state = {people};
    }


    changeStatus= ()=>{

        let {people} = this.state;
        people.status = !people.status;
        this.setState({
            people
        });
    };
    render() {
        console.log('.');

        return (
            <div>
                {<div className={this.state.people.name}>
                    {this.state.people.name}>
                    {this.state.people.age}>
                    {this.state.people.car}>
                    {this.state.people.status.toString()}
                    <button onClick= {this.changeStatus}> changeStatus</button>
                </div>}
            </div>
        );
    }
}

export default People;
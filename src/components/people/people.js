import React, {Component} from 'react';

class People extends Component {

    constructor(props) {
        super(props);
        let {people} = this.props;
        this.state = {people};
    }


    changeCar= ()=>{

        let {people} = this.state;
        people.car = 'dodge';
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
                    <button onClick= {this.changeCar}> changeCar</button>
                </div>}
            </div>
        );
    }
}

export default People;
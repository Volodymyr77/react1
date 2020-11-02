import React, {Component} from 'react';
import {peoples} from "../../data/data";
import People from "../people/people";

class Peoples extends Component {


    render() {
        let className = 'target';
        return (
                <div className={className}>
                    {
                        peoples.map((item, index) => {
                            return (<People people={item} key={index} />)
                        })
                    }
                </div>

        );
    }
}

export default Peoples;
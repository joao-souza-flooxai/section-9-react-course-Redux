import './interval.css';
import React from 'react';

import Card from './Card';
import { connect } from 'react-redux';


function Interval(props)  {

    const {min,max} = props;

    return (
        <Card title="Numbers interval" red>

            <div className="Interval">
                <span>
                    <strong>Min: </strong>
                    <input type="number" value={min} onChange={e=>props.onMinChange(+e.target.value)}/>
                </span>
                <span>
                    <strong>Máx: </strong>
                    <input type="number" value={max} onChange={e=>props.onMaxChange(+e.target.value)} />
                </span>
            </div>
         
        </Card>
    );
};

const mapStateToProps = (state) => {
    return {
        min: state.numbers.min,
        max: state.numbers.max
    };
};

export default connect(mapStateToProps)(Interval)

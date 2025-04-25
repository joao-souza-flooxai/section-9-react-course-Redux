
import React from 'react';

import Card from './Card';

export default function Interval(props)  {
    const {min,max} = props;
    return (
        <Card title="Sum of the numbers" blue>

            <div>
                <span>
                    <span>Result: </span>
                    <strong>{ min+max }</strong>
                </span>
            </div>
         
        </Card>
    );
};

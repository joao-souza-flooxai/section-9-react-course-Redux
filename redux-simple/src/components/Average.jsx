
import React from 'react';

import Card from './Card';

export default function Interval(props)  {
    const {min,max} = props;
    return (
        <Card title="Average of the numbers" green>

            <div>
                <span>
                    <span>Result: </span>
                    <strong>{ (min + max)/2 }</strong>
                </span>
            </div>
         
        </Card>
    );
};

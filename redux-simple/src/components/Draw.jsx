
import React from 'react';

import Card from './Card';

export default function Interval(props)  {
    const {min,max} = props;
    const random = parseInt(Math.random() * (min-max)) + min
    return (
        <Card title="Draw of the numbers" purple>

            <div>
                <span>
                    <span>Result: </span>
                    <strong>{random}</strong>
                </span>
            </div>
         
        </Card>
    );
};

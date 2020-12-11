import React from 'react';
import { Select, MenuItem } from '@material-ui/core';

function Filter({filterValue, setfilterValue} ) {
    const optionHandle = (e) => {
        setfilterValue(e.target.value);
    }

    return (
        <div>
            <Select value={filterValue} onChange={optionHandle}>
                <MenuItem value="all">All</MenuItem>
                <MenuItem value="completed">Completed</MenuItem>
                <MenuItem value="uncompleted">Uncompleted</MenuItem>
            </Select>
        </div>
    )
}

export default Filter

import React from 'react';
import './FilterCheckbox.css';

const FilterCheckbox = () => {
    return (
        <label className="switch">
            <input type="checkbox"/>
            <span className="slider round"></span>
        </label>
    );
};

export default FilterCheckbox;

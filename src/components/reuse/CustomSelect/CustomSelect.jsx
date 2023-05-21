import React, { memo } from 'react';
import Select from 'react-select';

import './CustomSelect.scss';

function CustomSelect({
	options,
	setFilter,
	placeholder,
	isNotMulti,
	value,
}) {
	const handleChange = (values) => {
		if (values[0]) values = values.map((item) => item.value).join();
		else values = values.value;
		setFilter(values);
	};
	return (
		<Select 
			options={options}
			isMulti={!isNotMulti}
			placeholder={placeholder}
			className='custom-select'
			classNamePrefix='custom-select'
			closeMenuOnSelect={false}
			onChange={handleChange}
			defaultValue={value}
		/>
	);
}
  
export default memo(CustomSelect);

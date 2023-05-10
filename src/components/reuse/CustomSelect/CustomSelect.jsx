import React, { memo } from 'react';
import Select from 'react-select';

import './CustomSelect.scss';

function CustomSelect({
	options,
	setFilter,
	placeholder
}) {
	const handleChange = (values) => {
		values = values.map((item) => item.value).join();
		setFilter(values);
	};
	return (
		<Select 
			options={options}
			isMulti
			placeholder={placeholder}
			className='custom-select'
			classNamePrefix='custom-select'
			closeMenuOnSelect={false}
			onChange={handleChange}
		/>
	);
}
  
export default memo(CustomSelect);

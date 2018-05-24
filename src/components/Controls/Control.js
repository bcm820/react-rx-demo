import React from 'react';

export const Control = props => {
  switch (props.control) {
    case 'name':
      return null;
    case 'positionX':
      return <SelectInput {...props} options={['right', 'left']} />;
    case 'positionY':
      return <SelectInput {...props} options={['top', 'bottom']} />;
    case 'direction':
      return (
        <SelectInput {...props} options={['normal', 'reverse', 'alternate']} />
      );
    case 'timing':
      return (
        <SelectInput
          {...props}
          options={['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out']}
        />
      );
    case 'playState':
      return <PauseButton {...props} />;
    default:
      return <NumberInput {...props} />;
  }
};

const SelectInput = ({ control, value, handleChange, options }) => (
  <div>
    <label>{control}: </label>
    <select onChange={e => handleChange(control, e.target.value)} value={value}>
      {options.map(value => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  </div>
);

const NumberInput = ({ control, value, handleChange }) => (
  <div>
    <label>{control}: </label>
    <input
      type="number"
      value={value}
      min={control === 'duration' ? 1 : 0}
      max={control === 'duration' ? 10 : 1000}
      step={control === 'duration' ? 1 : 20}
      onChange={e => handleChange(control, parseInt(e.target.value, 10))}
    />
  </div>
);

const PauseButton = ({ control, value, handleChange }) => {
  const setting = value === 'running' ? 'paused' : 'running';
  return (
    <button onClick={() => handleChange(control, setting)}>{value}</button>
  );
};

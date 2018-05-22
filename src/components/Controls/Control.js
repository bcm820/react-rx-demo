import React from 'react';

export const Control = ({ label, value, handleChange, group }) => {
  return (
    <tr>
      <td>{label}</td>
      <td>
        {typeof value === 'number' ? (
          <input
            type="number"
            value={value}
            min={label === 'speed' ? 1 : label === 'duration' ? 500 : 0}
            max={label === 'speed' ? 10 : label === 'duration' ? 5000 : 1000}
            step={label === 'speed' ? 1 : label === 'duration' ? 100 : 20}
            onChange={e => handleChange(group, label, e.target.value)}
          />
        ) : (
          <select
            style={{ width: '125px' }}
            onChange={e => handleChange(group, label, e.target.value)}
            value={value}
          >
            <option value="normal">normal</option>
            <option value="reverse">reverse</option>
            <option value="alternate">alternate</option>
          </select>
        )}
      </td>
    </tr>
  );
};

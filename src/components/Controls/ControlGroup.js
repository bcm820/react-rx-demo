import React from 'react';
import { Control } from './Control';

export const ControlGroup = ({ label, controls, handleChange }) => {
  return (
    <div>
      <strong>{label}</strong>
      <table>
        <tbody>
          {Object.keys(controls).map(controlLabel => (
            <Control
              key={controlLabel}
              label={controlLabel}
              value={controls[controlLabel]}
              handleChange={handleChange}
              group={label}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

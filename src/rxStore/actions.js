export function changeControl(payload) {
  return {
    type: 'CHANGE_CONTROL',
    payload
  };
}

export function setPreset(payload) {
  return {
    type: 'SET_PRESET',
    payload
  };
}

export function setToCustom() {
  return { type: 'SET_TO_CUSTOM' };
}

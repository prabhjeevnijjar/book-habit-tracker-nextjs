export const checkInputHandler = (event) => {
  if (event.target?.type === 'text' || event.target?.type === 'text') {
    const allowedChar = /^[a-zA-Z\s]*$/;
    if (allowedChar.test(event.target.value)) return true;
    else return false;
  } else if (event.target?.type === 'number') {
    const allowedChar = /^[0-9]*$/;
    if (allowedChar.test(event.target.value)) return true;
    else return false;
  }
  return true;
};

export const onChangeHandler = (e, setState, state) => {
  if (checkInputHandler(e)) setState({ ...state, [e.target.name]: e.target.value });
};

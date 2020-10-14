const regexvalidatePassword = new RegExp(
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
);
const ConfirmPasswordInput = (confirmPasswordInputValue) => {
  if (regexvalidatePassword.test(confirmPasswordInputValue)) {
    return confirmPasswordInputValue;
  } else {
    return false;
  }
};
export default ConfirmPasswordInput;

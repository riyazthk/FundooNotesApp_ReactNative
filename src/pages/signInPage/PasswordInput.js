const regexvalidatePassword = new RegExp(
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
);
const PasswordInput = (PasswordInputValue) => {
  console.log('test');
  if (regexvalidatePassword.test(PasswordInputValue)) {
    console.log(PasswordInputValue);
    return PasswordInputValue;
  } else {
    return false;
  }
};
export default PasswordInput;

const SubmitForm = (emailInput, PasswordInput) => {
  console.log('entry', emailInput, PasswordInput);
  if (
    emailInput === '' &&
    PasswordInput === '' &&
    emailInput === undefined &&
    PasswordInput === undefined
  ) {
    console.log('value');
    return true;
  } else {
    return false;
  }
};
export default SubmitForm;

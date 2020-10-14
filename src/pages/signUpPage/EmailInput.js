const regexValidateEmail = new RegExp(
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  );
  const EmailInput = (emailInputValue) => {
    if (regexValidateEmail.test(emailInputValue)) {
      return emailInputValue;
    } else {
      return false;
    }
  };
  export default EmailInput;
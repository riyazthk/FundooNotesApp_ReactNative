const regexValidateEmail = new RegExp(
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  );
  const FirstNameInput = (firstNameInputValue) => {
    if (regexValidateEmail.test(firstNameInputValue)) {
      return firstNameInputValue;
    } else {
      return false;
    }
  };
  export default FirstNameInput;
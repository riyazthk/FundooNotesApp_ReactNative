const regexValidateEmail = new RegExp(
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  );
  const LastNameInput = (lastNameInputValue) => {
    if (regexValidateEmail.test(lastNameInputValue)) {
      return lastNameInputValue;
    } else {
      return false;
    }
  };
  export default LastNameInput;
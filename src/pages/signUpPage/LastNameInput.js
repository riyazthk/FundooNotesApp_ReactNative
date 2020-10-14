const regexvalidateName = new RegExp(/^[A-Z]{1}[a-z]{3,}$/);
  const LastNameInput = (lastNameInputValue) => {
    if (regexvalidateName.test(lastNameInputValue)) {
      return lastNameInputValue;
    } else {
      return false;
    }
  };
  export default LastNameInput;
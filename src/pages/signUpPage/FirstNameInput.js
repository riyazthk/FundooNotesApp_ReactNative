const regexvalidateName = new RegExp(/^[A-Z]{1}[a-z]{3,}$/);
  const FirstNameInput = (firstNameInputValue) => {
    if (regexvalidateName.test(firstNameInputValue)) {
      return firstNameInputValue;
    } else {
      return false;
    }
  };
  export default FirstNameInput;
export const uuid = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
    .replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0,
        v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    })
    .replace(/-/g, "");
};

export const validateEmail = (content) => {
  const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;
  return (
    content && regex.test(String(content).replace(/\s+/g, "").toLowerCase())
  );
};

export const validatePhone = (content) => {
  const regex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$/;
  const isValid = content && content.length > 8 && content.length <= 16;
  return (
    isValid && regex.test(String(content).replace(/\s+/g, "").toLowerCase())
  );
};

export const validatePassword = (content) => {
  return content && content.length >= 8;
};

export const getError = (response) => {
  let errorContent = "";
  if (response) {
    const { errors, error, message } = response;
    if (errors) {
      errors.forEach(
        (item) => (errorContent += item.details ? item.details : item.errKey)
      );
    } else if (error) {
      errorContent = JSON.stringify(error);
    } else if (message) {
      errorContent = JSON.stringify(message);
    } else {
      errorContent = "bug";
    }
  }
  return errorContent;
};

export const validatePriceValue = (option) => {
  if (/^[0-9]+$/.test(option) && option.length < 6) {
    return true;
  } else {
    return false;
  }
};

export const validateComment = (option) => {
  const invalidCharsRegex = /<[^>]*>|[^a-zA-Z0-9åäöÅÄÖ\s.,!?'"-]/g;

  if (!invalidCharsRegex.test(option) && option.length <= 250) {
    return true;
  } else {
    return false;
  }
};

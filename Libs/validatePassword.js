const bcrypt = require("bcrypt");

const validatePassword = async (storedPassword, passwordEntered) => {
  try {
    const answer = await bcrypt.compare(passwordEntered, storedPassword);
    return answer;
  } catch (error) {
    throw new Error(`Error verifying password: ${error}`);
  }
}

module.exports = validatePassword;
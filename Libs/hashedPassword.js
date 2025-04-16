const bcrypt = require("bcrypt");

const hashedPassword = async pass => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(pass, salt);

    return hash;

  } catch (error) {
    console.error(`An error has ocurred while hashing the password: ${error}`);
    throw error;
  }
};

module.exports = hashedPassword;
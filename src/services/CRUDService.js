import db from '../models/index.js';
import bcrypt from 'bcrypt';


let salt = bcrypt.genSaltSync(10);

let createNewUser = async (data) => {
  return new Promise(async (resole, reject) => {
    try {
      let hashPasswordFromBcrypt = await hashUserPassword(data.password);
      await db.User.create({
        email: data.email,
        password: hashPasswordFromBcrypt,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        phoneNumber: data.phoneNumber,
        gender: data.gender === '1' ? true : false,
        roleId: data.roleId,
      })
      resole('Create a new user succeed!');
    } catch (error) {
      reject(error);
    }
  })
}

let hashUserPassword = (password) => {
  return new Promise(async (resole, reject) => {
    try {
      let hashPassword = await bcrypt.hashSync(password, salt);
      resole(hashPassword);
    } catch (error) {
      reject(error);
    }
  })
}

module.exports = {
  createNewUser: createNewUser
}
import db from '../models/index.js';
import CRUDService from '../services/CRUDService.js';
let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    console.log('Data from users: ', data);
    return res.render("homepage.ejs", { data: JSON.stringify(data) });
  } catch (error) {
    console.log(error);
  }

}
let getAboutPage = (req, res) => {
  return res.render("test/about.ejs");
}
let getCRUD = (req, res) => {
  return res.render("test/crud.ejs");
}

let postCRUD = async (req, res) => {
  let messages = await CRUDService.createNewUser(req.body);
  console.log(messages);
  return res.send('Post crud from server');
}
  
module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
  getCRUD: getCRUD,
  postCRUD: postCRUD
}
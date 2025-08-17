import db from '../models/index.js';
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

module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage
}
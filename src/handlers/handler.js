const {
  handleHomePage, handlePageNotFound, signupPage, loginPage,
} = require('./homePage.js');
const handleStaticFiles = require('./handleStaticFiles.js');
const { isAuth, error401 } = require('./isAuth.js');

module.exports = {

  handleHomePage,
  handlePageNotFound,
  handleStaticFiles,
  signupPage,
  loginPage,
  isAuth,
  error401,
};

/*
  handleDeletePost,
  handleStaticFiles,
  handleQuery,
  handleAddPost,
  signup,
  login,
  logout,
  checkAuth,
*/

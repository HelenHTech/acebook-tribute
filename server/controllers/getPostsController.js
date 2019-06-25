const Posts = require('./../models/posts');

const getPost = async (req, res, next) => {

  try {
    // await Posts.find({}).toArray();
    // data = req.body;
    // res.redirect('listposts');
    const requestData = await Posts.find({});
    // res.render('posts', { results: requestData });
    // next();
  } catch (error) {
    console.log('Error with catch', error);
  } finally {
    console.log('finding worked')
  }
};


module.exports = getPost
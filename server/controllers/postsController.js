const Posts = require('./../models/posts');
const Users = require('./../models/users');

const submitPost = async (req, res, next) => {
  const { title, message } = req.body;
  const newPost = new Posts({ 
    title, 
    message
   });
  

  try {
    await newPost.save();
    // data = req.body;
    console.log(req.body, 'anybody out there?');
    res.redirect('posts');
    next();
  } catch (error) {
    console.log('Error with catch', error);
  } finally {
    console.log('It worked', req.body)
  }
};


module.exports = submitPost;

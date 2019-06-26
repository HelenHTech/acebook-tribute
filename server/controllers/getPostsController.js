const Posts = require('./../models/posts');

const getPost = async (req, res) => {

  try {
    const requestData = await Posts.find({}).sort({time_posted: 'descending'})
    res.render('posts', { results: requestData });
  } catch (error) {
    console.log('Error with catch', error);
  } 
};

const deletePost = async (req, res) => {

  try {
    const deletePost = await Posts.find({postId});
    res.render('posts', { results: deletePost });
  } catch (error) {
    console.log('Error with catch', error);
    
  } 
};

module.exports = getPost, deletePost;

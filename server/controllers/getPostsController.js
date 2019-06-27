const Posts = require('./../models/posts');

// const getPost = async (req, res) => {

//   try {
//     const requestData = await Posts.find({}).sort({time_posted: 'descending'})
//     res.render('posts', { results: requestData });
//   } catch (error) {
//     console.log('Error with catch', error);
//   } 
// };


const getPost = async (req, res) => {

  try {
    const requestData = await Posts.find({}).sort({time_posted: 'descending'})
    res.locals.data = requestData
    res.render('posts', { results: requestData });
    console.log(res.locals.id);
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

const editPost = (req, res) => {

  Posts.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
  if (err) return next(err);
  res.locals.id = postID;
  });
}

module.exports = getPost, deletePost, editPost;

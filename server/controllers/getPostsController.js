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
    const requestData = await Posts.find({}).sort({time_posted: 'descending'}).populate('name')
    res.locals.data = requestData
    res.render('posts', { results: requestData });
    console.log(requestData);
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

const editPost = async (req, res) => {
  const edit = await Posts.update({_id: req.params.id}, {$set: {message: req.params.message}})
  return edit
}


module.exports = getPost, deletePost, editPost

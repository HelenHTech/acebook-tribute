const Posts = require('./../models/posts');

const getPost = async (req, res) => {

  try {
    const requestData = await Posts.find({});
    res.render('posts', { results: requestData });
    // next();
  } catch (error) {
    console.log('Error with catch', error);
    
  } 
  // finally {
  //   console.log ("lllllll")
  //   console.log('finding worked', requestData)
  //   console.log ("pppppppppp")
  // }
};

module.exports = getPost
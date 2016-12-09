const express = require('express');
const router = express.Router();

const postsRendered = [];

// TODO: Add your routes to the route here.
// var PostsController = require('../controllers/PostsController')

/* GET list of posts via posts.ejs view */
router.get('/', function(req, res, next) {
  res.render('posts.ejs', { postsRendered: postsRendered
  });
});

router.post('/', function(req, res, next) {
 req.body.name;
}
res.redirect('/posts');
});

//add the post route to receive this request
// router.post('/', function(req, res, next) {
//   console.log(req.body);
//   res.redirect('/posts');
// });

//post_form
/* GET post_form view to create a new post */
// router.get ('/', function(req, res, next) {
//   res.render('post_form.ejs')
// })
//
// router.post('/', function(req, res, next) {
//
// })

module.exports = router;

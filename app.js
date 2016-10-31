var app = angular.module( 'reddit', [] )

app.controller( 'frontPage', [ '$scope', ( $scope ) => {
    $scope.view = {};
    $scope.view.welcome = 'Welcome to the Front Page';
    $scope.view.maxWidth = '400';
    $scope.view.maxHeight = '400';
    $scope.view.addingComment = false;


    $scope.view.posts = [ {
        title: 'Check this out!',
        author: 'Gargoyle',
        description: 'I made this place in Angular!! Isn\'t it cool??',
        imageURL: 'https://media-cdn.tripadvisor.com/media/photo-s/03/9b/30/26/seattle.jpg',
        votes: 6,
        date: new Date( 'October 30, 2016 02:53:00' ),
        showComment: false,
        makeComment: false,
        comments: [ {
            author: 'Richard',
            text: 'Yea, so what? I used React and it was way easier.'
        }, {
            author: 'Linus',
            text: 'Vue is better....'
        }, {
            author: 'Peter',
            text: 'Yea, but did you write tests for it?'
        } ]
    }, {
      title: 'This place has all the cool stuff.',
      author: 'Linus',
      description: 'Really though, I enjoy the weather and architecture.',
      imageURL: 'http://i.huffpost.com/gen/1470163/images/o-ALBUQUERQUE-SKYLINE-facebook.jpg',
      votes: 2,
      date: new Date( 'October 13, 2016 23:12:00' ),
      showComment: false,
      makeComment: false,
      comments: [ {
          author: 'Gargoyle',
          text: 'It\'s too hot for me there....'
      }, {
          author: 'Linus',
          text: 'Get over it!'
      } ]
    }, {
      title: 'They say home is where the heart is.',
      author: 'Peter',
      description: 'And this place is lovely.',
      imageURL: 'https://cache-graphicslib.viator.com/graphicslib/thumbs360x240/2540/SITours/san-diego-champagne-brunch-cruise-in-san-diego-101219.jpg',
      votes: -5,
      date: new Date( 'October 24, 2016 10:23:00' ),
      showComment: false,
      makeComment: false,
      comments: [ {
          author: 'Gargoyle',
          text: 'San Diego is for losers dude.'
      }, {
          author: 'Linus',
          text: 'Yeah, only hipsters and nerds go there.'
      } ]
    } ]

    $scope.showPostForm = function(){
      $scope.view.addingComment = !$scope.view.addingComment
    }

    $scope.createPost = function (){
      var newPost = {};
      newPost.author = this.view.author;
      newPost.title = this.view.title;
      newPost.description = this.view.description;
      newPost.imageURL = this.view.imageURL;
      newPost.date = new Date();
      newPost.votes = 0;
      newPost.showComment = false;
      newPost.makeComment = false;
      newPost.comments = [];

      $scope.view.posts.push(newPost)

      this.view.author = '';
      this.view.title = '';
      this.view.description = '';
      this.view.imageURL = '';

      $scope.view.addingComment = false;
    }

    $scope.upvote = function(post){
       post.votes++;
    }

    $scope.downvote = function(post){
      post.votes--;
    }

    $scope.showComments = function(post){
      post.showComment = !post.showComment
    }

    $scope.makeComments = function (post){
      post.makeComment = !post.makeComment
    }

    $scope.addComment = function(post){
      var newComment = {}
      newComment.author = this.view.author;
      newComment.text = this.view.text;

      post.comments.push(newComment);

      this.view.author = '';
      this.view.text = '';
      post.makeComment = false;
      post.showComment = false;
    }
} ] )

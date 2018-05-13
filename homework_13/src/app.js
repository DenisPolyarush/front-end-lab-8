angular.module('blogApp', []).controller('BlogController', ['$scope', function($scope){
    $scope.appTitle = "my blog";
    $scope.isActive = false;
    $scope.edit = false;
    $scope.showEditButton = false;
    

    $scope.categoriesList = () => {
      let categoriesStore = ['All']
      $scope.allPosts.map(elem => {
        elem.categories.map(item => {
          if(categoriesStore.indexOf(item) === -1){
            categoriesStore.push(item)
          }
        })
      })
      return categoriesStore
    }

    $scope.filter = categorie => {
      if(categorie === 'All'){
        $scope.onShow = $scope.allPosts
      }else{
        $scope.onShow =[];
        $scope.allPosts.map(post =>{
          if(post.categories.indexOf(categorie) !== -1){
            $scope.onShow.push(post)
          }
        })
      }
    }
    
    $scope.addPost = (title, categories, description, photo = 'assets/default-photo.jpg') =>{
      let newPostCategoriesStore = categories.split(',');
      let newPost = {
        title: title,
        description: description,
        categories: newPostCategoriesStore,
        url : `assets/${photo}.jpg`
      }
      $scope.allPosts.push(newPost);
      $scope.categoriesStore = $scope.categoriesList();
      $scope.isActive = false;
    }

    $scope.editPost = (post, title, description, categories) =>{
      let currentPost = $scope.allPosts.indexOf(post);
      if(!title){
        $scope.allPosts[currentPost].title = post.title;
      }else{
        $scope.allPosts[currentPost].title = title;
      }

      if(!description){
        $scope.allPosts[currentPost].description = post.description;
      }else{
        $scope.allPosts[currentPost].description = description;
      }

      if(!categories){
        $scope.allPosts[currentPost].categories = post.categories
      }else{
        $scope.allPosts[currentPost].categories = categories.split(',');
        $scope.categoriesStore = $scope.categoriesList();
      }
    }

    $scope.allPosts = defaultPost;
    $scope.onShow = $scope.allPosts;
    $scope.categoriesStore = $scope.categoriesList();
  }])
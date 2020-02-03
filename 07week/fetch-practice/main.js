let arrayOfPosts;
let fiveArray;
let commentsArray;
let usersArray;

// this function waits for the web page to be loaded, when it does it will run the code inside of it which happen to be getPosts()
window.onload = function() {
  getPosts();
  getFive();
  getComments();
  getUsers();
};

// this function is going to make a fetch request to the url inside it's parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfPosts
const getPosts = () => {
  fetch("http://jsonplaceholder.typicode.com/posts")
    .then(res => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      return res.json();
    })
    .then(posts => (arrayOfPosts = posts))
    .catch(err => console.log(`Error,  ${err}`));
};

// this function logs the results in your browsers console
const consolePosts = () => {
  console.log(arrayOfPosts);
  console.log(fiveArray);
  console.log(commentsArray);
  console.log(usersArray);
};

// this function creates elements inside the all-posts ul, then appends text inside it with the posts that were returned in the request.
const displayPost = () => {
  const allPosts = document.getElementById("all-posts");
  arrayOfPosts.map((post, index) => {
    const li = document.createElement("li");
    const text = document.createTextNode(
      `#${index}, Title: ${post.title}:  ${post.body}, by user: ${post.userId}`
    );
    li.appendChild(text);
    allPosts.append(li);
  });
};

// Your job now is to follow the functions above and use them as templates to build the functionality the buttons in the index.html file already have laid out in it. This way you can learn how to build fetch requests and work with other apis and become a real developer!!
const getFive = () => {
  fetch("http://jsonplaceholder.typicode.com/posts/?results=5")
    .then(res => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      return res.json();
    })
    .then(posts => (fiveArray = posts.slice(0, 5)))
    .catch(err => console.log(`Error,  ${err}`));
};

const displayFive = () => {
  const fivePosts = document.getElementById("five-posts");
  fiveArray.map((post, index) => {
    const li = document.createElement("li");
    const text = document.createTextNode(
      `#${index}, Title: ${post.title}:  ${post.body}, by user: ${post.userId}`
    );
    li.appendChild(text);
    fivePosts.append(li);
  });
};

const getComments = () => {
  fetch("http://jsonplaceholder.typicode.com/comments")
    .then(res => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      return res.json();
    })
    .then(comments => (commentsArray = comments))
    .catch(err => console.log(`Error,  ${err}`));
};

const displayComments = () => {
  const comments = document.getElementById("comment-list");
  commentsArray.map((post, index) => {
    const li = document.createElement("li");
    const text = document.createTextNode(
      `#${index}, Title: ${post.title}:  ${post.body}, by user: ${post.userId}`
    );
    li.appendChild(text);
    comments.append(li);
  });
};

const getUsers = () => {
  fetch("http://jsonplaceholder.typicode.com/users")
    .then(res => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      return res.json();
    })
    .then(users => (usersArray = users))
    .catch(err => console.log(`Error,  ${err}`));
};

const displayUsers = () => {
  const users = document.getElementById("user-list");
  usersArray.map((post, index) => {
    const li = document.createElement("li");
    const text = document.createTextNode(
      `#${index}, Title: ${post.title}:  ${post.body}, by user: ${post.userId}`
    );
    li.appendChild(text);
    users.append(li);
  });
};

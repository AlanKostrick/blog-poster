import Header from './components/Header';
import Home from './components/Home';
import Posts from './components/Posts';
import Post from './components/Post';
import Footer from './components/Footer';
import PostUpdate from './components/PostUpdate';
import apiActions from './api/api-actions';
import '../css/style.css';

pageBuild();

function pageBuild() {
    header();
    navHome();
    navPosts();
    footer();
}

function header() {
    const header = document.querySelector('#header');
    header.innerHTML = Header(); //send component into our html
}

function footer() {
    const footer = document.querySelector('#footer');
    footer.innerHTML = Footer();
}

function navHome() {
    const homeButton = document.querySelector('.nav-list__home');
    homeButton.addEventListener('click', function () {
        document.querySelector('#app').innerHTML = Home();
    })
}


function navPosts() {

    //get request
    const postsButton = document.querySelector('.nav-list__posts');
    postsButton.addEventListener('click', function () {
        apiActions.getRequest('http://localhost:3000/posts', posts => {
            document.querySelector('#app').innerHTML = Posts(posts);
        });

        editPost();
    });

    //post request
    const app = document.querySelector('#app');
    app.addEventListener('click', function () {
        if (event.target.classList.contains('add-post__submit')) {
            const postTitle = event.target.parentElement.querySelector('.add-post__postTitle').value;
            const postContent = event.target.parentElement.querySelector('.add-post__postBody').value;

            const postData = {
                title: postTitle,
                content: postContent
            }

            apiActions.postRequest('http://localhost:3000/posts', postData,
                (post) => {
                    console.log(post);
                    document.querySelector('#app').innerHTML = PostUpdate();
                    setTimeout(function () {
                        document.querySelector('#app').innerHTML = Post(post);
                    }, 3000);
                })
        }

    });


    //delete request
    app.addEventListener('click', function () {
        if (event.target.classList.contains('delete-post__submit')) {
            const postId = event.target.parentElement.querySelector('.delete-post__id').value;
            console.log(postId);
            apiActions.deleteRequest(`http://localhost:3000/posts/${postId}`,
                (posts) => {
                    document.querySelector('#app').innerHTML = Posts(posts);
                })
        }
    });

    //update request
    app.addEventListener('click', function () {
        if (event.target.classList.contains('update-post__submit')) {

            const postId = event.target.parentElement.querySelector('.update-post__id').value;

            const postTitle = event.target.parentElement.querySelector('.update-post__postTitle').value;
            const postContent = event.target.parentElement.querySelector('.update-post__postBody').value;

            const postData = {
                title: postTitle,
                content: postContent
            }
            console.log(postData);

            apiActions.updateRequest(`http://localhost:3000/posts/${postId}`, postData,
                (post) => {
                    document.querySelector('#app').innerHTML = Post(post);
                })
        }
    });
}

function editPost() {
    const app = document.querySelector('#app');
    app.addEventListener('click', function () {
        if (event.target.classList.contains('edit-post__submit')) {
            const postId = event.target.parentElement.querySelector('.delete-post__id').value;
            console.log(postId);
            apiActions.getRequest(`http://localhost:3000/posts/${postId}`,
                (post) => {
                    document.querySelector('#app').innerHTML = Post(post);
                })
        }
    });
}
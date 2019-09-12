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
    const postsButton = document.querySelector('.nav-list__posts');
    postsButton.addEventListener('click', function () {
        apiActions.getRequest('http://localhost:3000/posts', posts => {
            document.querySelector('#app').innerHTML = Posts(posts);
        });
    })

    const app = document.querySelector('#app');
    app.addEventListener('click', function () {
        if (event.target.classList.contains('add-post__submit')) {
            const postTitle = event.target.parentElement.querySelector('.add-post__postTitle').value;
            const postBody = event.target.parentElement.querySelector('.add-post__postBody').value;

            const postData = {
                title: postTitle,
                content: postBody
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


}
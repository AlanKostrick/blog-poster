export default function Posts(posts) {
    return `
    <div>
    ${posts.map(post => {
        return `
            <section class='main-content__posts'>
                <h3>${post.title}</h3>
                <p>${post.content}</p>
                <input class='delete-post__id' type='hidden' value="${post._id}">
                <button class='delete-post__submit'>&times</button>
                <button class='edit-post__submit'>...</button>
            </section>
        `;

    }).join('')}
    </div>
    
    <section class='add-post'>
        <input class='add-post__postTitle' type='text' placeholder='post title'>
        <input class='add-post__postBody type='text' placeholder='post content'>
        <button class='add-post__submit'>Submit</button>
    </section>

    `
}
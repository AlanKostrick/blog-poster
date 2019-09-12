export default function Post(post) {
    return `
    <section>
        <h3>${post.title}</h3>
        <p>${post.body}</p>
    </section>
    `
}
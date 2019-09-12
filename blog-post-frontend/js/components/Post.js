export default function Post(post) {
    return `
    <section>
        <h3>${post.title}</h3>
        <p>${post.content}</p>
    </section>
    `
}
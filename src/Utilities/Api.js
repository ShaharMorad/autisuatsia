const clientPort = 3000;
const serverPort = 4000;
const mailServicePort = 5000;

export const getPosts = async () => {
    const response = await fetch(`http://localhost:${serverPort}/posts`);
    return await response.json();
}

export const getPostById = async (id) => {
    const response = await fetch(`http://localhost:${serverPort}/posts/${id}`);
    return await response.json();
}

export const getTags = async () => {
    const response = await fetch(`http://localhost:${serverPort}/tags`);
    return await response.json();
}

export const getTagById = async (id) => {
    const response = await fetch(`http://localhost:${serverPort}/tags/${id}`);
    return await response.json();
}

export const addPost = async (post) => {
    try {
        const response = await fetch(`http://localhost:${serverPort}/posts`, {
            method: 'POST', headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(post),
        });
        const data = await response.json();
        console.log(`Object was addead: ${data}`)
    } catch (error) {
        console.log(`Faild to add post: ${error}`);
    }
}

export const sendQrCode = async (post) => {
    debugger;
    await fetch(`http://127.0.0.1:${mailServicePort}/run?url=http://localhost:${clientPort}/posts/${post.id}&&mail=oomri.ein.bar@gmail.com`);
}

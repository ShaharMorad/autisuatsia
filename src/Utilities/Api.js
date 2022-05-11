export const getPosts = async () => {
    const response = await fetch('localhost:3000/posts');
    return await response.json();
}

export const getPostById = async (id) => {
    const response = await fetch(`localhost:3000/posts/${id}`);
    return await response.json();
}

export const getTags = async () => {
    const response = await fetch('localhost:3000/tags');
    return await response.json();
}

export const getTagById = async (id) => {
    const response = await fetch(`localhost:3000/tags/${id}`);
    return await response.json();
}

export const addPost = async (post) => {
    try {
        const response = await fetch('localhost:3000/posts', {
            method: 'POST', headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const data = await response.json();
        console.log(`Object was addead: ${data}`)
    } catch(error) {
        console.log(`Faild to add post: ${error}`);
    }
}
import fetch from 'isomorphic-fetch';

export const createBlog = (blog, token) => {
    return fetch(`http://localhost:8000/api/blog`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: blog
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}
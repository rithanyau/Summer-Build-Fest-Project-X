function addPost() {
    const postContent = document.getElementById('postContent').value;
    const feedList = document.getElementById('feedList');

    if (postContent.trim() === "") {
        alert("Please write something!");
        return;
    }

    const newPost = document.createElement('div');
    newPost.className = 'card';
    newPost.innerHTML = `
        <p style="font-size: 1.1rem;">${postContent}</p>
        <small style="color: #64748b;">Just now</small>
    `;

    feedList.prepend(newPost);
    document.getElementById('postContent').value = "";
}

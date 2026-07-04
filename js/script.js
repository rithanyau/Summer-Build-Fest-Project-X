document.addEventListener('DOMContentLoaded', loadPosts);

function addPost() {
    const postContent = document.getElementById('postContent').value;
    if (postContent.trim() === "") return;

    const posts = JSON.parse(localStorage.getItem('posts') || '[]');
    posts.unshift(postContent);
    localStorage.setItem('posts', JSON.stringify(posts));
    
    document.getElementById('postContent').value = "";
    loadPosts();
}

function loadPosts() {
    const feedList = document.getElementById('feedList');
    const posts = JSON.parse(localStorage.getItem('posts') || '[]');
    
    feedList.innerHTML = posts.map((post, index) => `
        <div class="card" style="margin-bottom: 1rem;">
            <p style="font-size: 1.1rem; margin-bottom: 10px;">${post}</p>
            <button onclick="deletePost(${index})" style="background: #ef4444; padding: 5px 10px; font-size: 0.8rem;">Delete</button>
        </div>
    `).join('');
}

function deletePost(index) {
    let posts = JSON.parse(localStorage.getItem('posts'));
    posts.splice(index, 1);
    localStorage.setItem('posts', JSON.stringify(posts));
    loadPosts();
}

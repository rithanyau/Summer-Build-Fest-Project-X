document.addEventListener('DOMContentLoaded', loadPosts);

function addPost() {
    const postContent = document.getElementById('postContent').value;
    if (postContent.trim() === "") return;

    // Defaulting to 'General' for now
    const newPost = { text: postContent, category: 'General' };
    
    const posts = JSON.parse(localStorage.getItem('posts') || '[]');
    posts.unshift(newPost);
    localStorage.setItem('posts', JSON.stringify(posts));
    
    document.getElementById('postContent').value = "";
    loadPosts();
}

function loadPosts(filter = 'All') {
    const feedList = document.getElementById('feedList');
    const posts = JSON.parse(localStorage.getItem('posts') || '[]');
    
    const filteredPosts = filter === 'All' 
        ? posts 
        : posts.filter(p => p.category === filter);

    feedList.innerHTML = filteredPosts.map((post, index) => `
        <div class="card" style="margin-bottom: 1rem;">
            <p style="font-size: 1.1rem; margin-bottom: 10px;">${post.text}</p>
            <button onclick="deletePost(${index})" style="background: #ef4444; padding: 5px 10px; font-size: 0.8rem; color: white; border: none; border-radius: 4px;">Delete</button>
        </div>
    `).join('');
}

function filterPosts(category) {
    loadPosts(category);
}

function deletePost(index) {
    let posts = JSON.parse(localStorage.getItem('posts'));
    posts.splice(index, 1);
    localStorage.setItem('posts', JSON.stringify(posts));
    loadPosts();
}

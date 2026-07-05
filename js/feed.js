const searchInput = document.getElementById("searchInput");
const postsContainer = document.getElementById("posts");
const filterButtons = document.querySelectorAll(".filter-btn");

let posts = JSON.parse(localStorage.getItem("posts")) || [];

if (posts.length === 0) {
    posts = [
        {
            title: "Weekend Community Meetup",
            category: "Events",
            content: "Join us this Saturday evening for networking and activities.",
            likes: 0
        },
        {
            title: "Looking for Study Partners",
            category: "Questions",
            content: "Anyone interested in joining a weekly study group?",
            likes: 0
        },
        {
            title: "Library Timing Update",
            category: "Announcements",
            content: "The library will remain open until 9 PM during exams.",
            likes: 0
        }
    ];

    localStorage.setItem("posts", JSON.stringify(posts));
}

function displayPosts(postList) {
    postsContainer.innerHTML = "";

    postList.forEach((post, index) => {
        postsContainer.innerHTML += `
        <div class="post-card">
            <div class="post-header">
                <h3>${post.title}</h3>
                <span>${post.category}</span>
            </div>

            <p>${post.content}</p>

            <div class="post-actions">
                <button onclick="likePost(${index})">
                    Like <span>${post.likes}</span>
                </button>
            </div>
        </div>
        `;
    });
}

function likePost(index) {
    posts[index].likes++;
    localStorage.setItem("posts", JSON.stringify(posts));
    displayPosts(posts);
}

displayPosts(posts);

searchInput.addEventListener("keyup", () => {
    const value = searchInput.value.toLowerCase();

    const filtered = posts.filter(post =>
        post.title.toLowerCase().includes(value) ||
        post.content.toLowerCase().includes(value)
    );

    displayPosts(filtered);
});

filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const category = button.dataset.category;

        if (category === "all") {
            displayPosts(posts);
            return;
        }

        const filtered = posts.filter(post => post.category === category);
        displayPosts(filtered);
    });
});
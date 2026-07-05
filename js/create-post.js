const form = document.getElementById("postForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const title = document.getElementById("title").value.trim();
    const category = document.getElementById("category").value;
    const content = document.getElementById("content").value.trim();

    const posts = JSON.parse(localStorage.getItem("posts")) || [];

    posts.unshift({
        title,
        category,
        content,
        likes: 0,
        date: new Date().toLocaleDateString()
    });

    localStorage.setItem("posts", JSON.stringify(posts));

    alert("Post published successfully");

    form.reset();

    window.location.href = "feed.html";
});
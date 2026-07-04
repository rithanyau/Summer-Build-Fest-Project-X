const searchInput = document.getElementById("searchInput");
const posts = document.querySelectorAll(".post-card");
const filterButtons = document.querySelectorAll(".filter-btn");
const likeButtons = document.querySelectorAll(".like-btn");

searchInput.addEventListener("keyup", () => {
    const value = searchInput.value.toLowerCase();

    posts.forEach(post => {
        const text = post.textContent.toLowerCase();

        if (text.includes(value)) {
            post.style.display = "block";
        } else {
            post.style.display = "none";
        }
    });
});

filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const category = button.dataset.category;

        posts.forEach(post => {

            if (
                category === "all" ||
                post.dataset.category === category
            ) {
                post.style.display = "block";
            } else {
                post.style.display = "none";
            }

        });

    });
});

likeButtons.forEach(button => {

    let count = button.querySelector("span");

    button.addEventListener("click", () => {
        count.textContent = Number(count.textContent) + 1;
    });

});
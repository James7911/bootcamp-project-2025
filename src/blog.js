var blogs = [
    {
        title: "Green Computing",
        date: "October 15, 2025",
        description: "What is green computing and why it matters for a sustainable future.",
        image: "./images/green_computing.jpg",
        imageAlt: "Green Computing image",
        slug: "green-computing"
    },
    {
        title: "The Importance of a Good Password",
        date: "October 15, 2025",
        description: "Why strong passwords protect you from security breaches and data loss.",
        image: "./images/password.png",
        imageAlt: "Password image",
        slug: "importance-of-a-good-password"
    }
];
// DOM manipulation
var blogContainer = document.getElementById("blog-container");
if (blogContainer) {
    blogs.forEach(function (blog) {
        var blogDiv = document.createElement("div");
        blogDiv.className = "blog-post";
        var title = document.createElement("h2");
        var link = document.createElement("a");
        link.href = "blogs/".concat(blog.slug, ".html");
        link.textContent = blog.title;
        title.appendChild(link);
        var date = document.createElement("p");
        date.className = "blog-date";
        date.textContent = blog.date;
        var image = document.createElement("img");
        image.className = "blog-image";
        image.src = blog.image;
        image.alt = blog.imageAlt;
        var desc = document.createElement("p");
        desc.textContent = blog.description;
        blogDiv.appendChild(title);
        blogDiv.appendChild(date);
        blogDiv.appendChild(image);
        blogDiv.appendChild(desc);
        blogContainer.appendChild(blogDiv);
    });
}

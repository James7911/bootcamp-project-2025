type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

const blogs: Blog[] = [
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
const blogContainer = document.getElementById("blog-container");

if (blogContainer) {
  blogs.forEach((blog) => {
    const blogDiv = document.createElement("div");
    blogDiv.className = "blog-post";

    const title = document.createElement("h2");
    const link = document.createElement("a");
    link.href = `blogs/${blog.slug}.html`;
    link.textContent = blog.title;
    title.appendChild(link);

    const date = document.createElement("p");
    date.className = "blog-date";
    date.textContent = blog.date;

    const image = document.createElement("img");
    image.src = blog.image;
    image.alt = blog.imageAlt;
    image.className = "blog-image"; 


    const desc = document.createElement("p");
    desc.textContent = blog.description;

    blogDiv.appendChild(title);
    blogDiv.appendChild(date);
    blogDiv.appendChild(image);
    blogDiv.appendChild(desc);

    blogContainer.appendChild(blogDiv);
  });
}

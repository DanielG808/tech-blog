const createPost = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#post-title").value.trim();
  const contents = document.querySelector("#post").value;

  if (title && contents) {
    const response = await fetch("/api/blogposts", {
      method: "POST",
      body: JSON.stringify({ title, contents }),
      headers: { "Content-Type": "application/json" },
    });

    console.log(response);

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

const postForm = document.querySelector(".create-form");

postForm.addEventListener("submit", createPost);

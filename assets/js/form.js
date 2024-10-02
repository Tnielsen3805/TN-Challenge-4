// form.js 
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector("form"); // Select the form using querySelector
  const errorElement = document.getElementById('error')

  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission

      const username = document.getElementById('username').value.trim();
      const title = document.getElementById('title').value.trim();
      const content = document.getElementById('content').value.trim();

      // Validation
      if (!username || !title || !content) {
          errorElement.textContent = "Please complete the form.";
          return;
      } else {
          errorElement.textContent = ""; // Clear error message
      }

      // Create blog post object
      const blogPost = {
          username,
          title,
          content
      };

      // Store to local storage
      storeLocalStorage(blogPost);

      // Redirect to blog page
      redirectPage('./blog.html');
  });
});

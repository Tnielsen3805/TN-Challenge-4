// blog.js 
document.addEventListener('DOMContentLoaded', function() {
  const main = document.getElementById('blogPosts');
  const backButton = document.getElementById('back');

  function renderBlogList() {
      const posts = readLocalStorage();
      if (posts.length === 0) {
          main.innerHTML = '<p>No Blog posts yet...</p>';
      } else {
          posts.forEach(post => {
              const article = document.createElement('article');
              article.innerHTML = `
                  <h2>${post.title}</h2>
                  <p>By: ${post.username}</p>
                  <blockquote>${post.content}</blockquote>
              `;
              main.appendChild(article);
          });
      }
  }

  backButton.addEventListener('click', function() {
      redirectPage('./index.html');
  });

  // Call render function
  renderBlogList();
});

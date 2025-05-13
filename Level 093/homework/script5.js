async function fetchGitHubUser() {
    const userName = document.getElementById('username').value.trim();
    const result = document.getElementById('result');

    if (!userName) {
      result.innerHTML = '<p style="color:red;">Please enter a username.</p>';
      return;
    }

    result.innerHTML = '<p>Loading...</p>';

    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);
      if (!response.ok) throw new Error("User not found");

      const data = await response.json();

      result.innerHTML = `
        <img src="${data.avatar_url}" alt="Avatar">
        <h2>${data.name || data.login}</h2>
        <p><strong>Bio:</strong> ${data.bio || 'No bio available'}</p>
        <p><strong>Public Repos:</strong> ${data.public_repos}</p>
        <p><strong>Followers:</strong> ${data.followers}</p>
        <p><a href="${data.html_url}" target="_blank">View Profile on GitHub</a></p>
      `;
    } catch (error) {
      result.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    }
  }
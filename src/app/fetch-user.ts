const API_URL = "https://api.github.com/users/";

export async function getUserInfo(username: string) {
  let res;
  try {
    res = await fetch(`${API_URL}${username}`);
  } catch (err) {
    throw new Error("Failed to fetch user");
  }
  if (!res.ok) throw new Error("User not found");

  const user = await res.json();
  if (user.message) {
    throw new Error(user.message);
  }
  return user;
}

export async function getRepos(username: string) {
  let res;
  try {
    res = await fetch(`${API_URL}${username}/repos`);
  } catch (err) {
    throw new Error("Failed to fetch repos");
  }
  if (!res.ok) throw new Error("User repos not found");

  const repos = await res.json();
  if (repos.message) {
    throw new Error(repos.message);
  }
  return repos;
}

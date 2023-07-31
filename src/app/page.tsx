"use client";

import { useEffect, useState } from "react";

import { getUserInfo, getRepos } from "./fetch-user";
import UserCard, { User } from "@/components/UserCard";
import RepoCard, { Repo } from "@/components/RepoCard";

export default function Home() {
  useEffect(() => {
    document.getElementById("usernameInput")?.focus();
  });

  const [usernameQuery, setUsernameQuery] = useState<string>("");
  const [userInfo, setUserInfo] = useState<User>();
  const [repos, setRepos] = useState<Repo[]>();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (
      document.getElementById("usernameInput")?.getAttribute("value") === ""
    ) {
      alert("Please enter a username!");
      return;
    }

    let res;
    try {
      res = await getUserInfo(usernameQuery);
    } catch (e) {
      console.error(e);
      alert("Username not found!");
      return;
    }
    const repos = await getRepos(usernameQuery);

    setUserInfo(res);
    setRepos(repos);
  }

  return (
    <>
      <div>
        <h1 className="text-center bold text-4xl mt-4">
          Search Users on Github
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col m-4 items-center"
        >
          <input
            id="usernameInput"
            value={usernameQuery}
            onChange={(e) => {
              setUsernameQuery(e.target.value);
            }}
            type="text"
            placeholder="Type username (i.e. mtcnbzks)"
            className="input input-bordered w-full max-w-xs"
          />
          <button className="btn btn-info w-32 mt-3">Search</button>
        </form>
      </div>

      {userInfo && repos && (
        <div className="bold text-2xl">
          {userInfo && <UserCard key={userInfo.id} userInfo={userInfo} />}
          <h1 className="ml-8">Repositories:</h1>
          {repos
            .sort((a, b) => {
              return b.stargazers_count - a.stargazers_count;
            })
            .map((repo) => (
              <RepoCard key={repo.id} repoInfo={repo} />
            ))}
        </div>
      )}
    </>
  );
}

import { useState, useEffect } from "react";
import axios from "axios";
import { Api, User } from "./types";

const api: Api = {
  key: "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",
  base: "https://api.github.com/users/",
};

export const useGetGithub = (username: string) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${api.base}${username}`, {
          headers: {
            Authorization: `Bearer ${api.key}`,
          },
        });
        const repos = await axios.get(response.data.repos_url, {
          headers: {
            Authorization: `Bearer ${api.key}`,
          },
        });

        const userData = {
          infos: {
            name: response.data.name,
            id: response.data.id,
            avatarUrl: response.data.avatar_url,
            htmlUrl: response.data.html_url,
            bio: response.data.bio,
            location: response.data.location,
            reposUrl: response.data.repos_url,
            followers: response.data.followers,
            following: response.data.following,
          },
          repos: repos.data.map((repo: any) => ({
            id: repo.id,
            name: repo.name,
            htmlUrl: repo.html_url,
            descrition: repo.description,
            language: repo.language,
          })),
        };
        setUser(userData);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    };
    fetchUser();
  }, [username]);
  return { user, loading, error };
};

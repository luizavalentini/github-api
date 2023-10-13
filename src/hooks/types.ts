export type Api = {
  key: string;
  base: string;
};

export type User = {
  infos: {
    name: string;
    id: number;
    avatarUrl: string;
    htmlUrl: string;
    bio: string;
    location: string;
    reposUrl: string;
    followers: number;
    following: number;
  };
  repos: [
    {
      id: string;
      name: string;
      htmlUrl: string;
      descrition: string;
      language: string;
    }
  ];
};

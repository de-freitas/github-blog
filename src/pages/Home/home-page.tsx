import { ProfileProps, IssuesProps } from "../../@types/types";
import { Profile } from "../../components/Profile";
import { api } from "../../lib/api";
import { PostCard } from "./components/PostCard";
import { SearchForm } from "./components/SearchForm";
import { useEffect, useState } from "react";

export default function Home() {
  const user = "/users/rocketseat-education";
  const repo =
    "/search/issues?q=repo:rocketseat-education/reactjs-github-blog-challenge";
  const [profile, setProfile] = useState<ProfileProps>();
  const [issues, setIssues] = useState<IssuesProps[]>();
  const numberOfPublications = issues?.length || 0;

  async function fetchProfileData() {
    try {
      const response = await api.get(user);
      const data = await response.data;

      setProfile(data);
    } catch (error) {
      console.error("Erro ao buscar perfil:", error);
    }
  }

  async function fetchRepos() {
    try {
      const response = await api.get(repo);
      const data = await response.data;

      setIssues(data.items);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    async function fetchData() {
      await fetchProfileData();
      await fetchRepos();
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="h-screen">
        <main className="bg-base-background h-full px-4 md:w-[90%] md:mx-auto max-w-864 ">
          {profile ? <Profile {...profile} /> : <p>Carregando...</p>}

          <div className="flex flex-col pt-6 gap-3 lg:pt-16">
            <div className="flex justify-between items-center">
              <p className="text-sm text-base-subtitle">Publicações</p>
              <span className="text-base-span text-xs">
                {numberOfPublications}{" "}
                {numberOfPublications > 1 ? "publicações" : "publicação"}
              </span>
            </div>

            <SearchForm />

            <div className="grid grid-cols-1 pt-3 gap-2 pb-50 lg:grid-cols-2 md:pb-50 md:gap-8 md:pt-8">
              {issues
                ? issues.map((issue) => {
                    return <PostCard key={issue.number} {...issue} />;
                  })
                : "no issues in this repo"}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

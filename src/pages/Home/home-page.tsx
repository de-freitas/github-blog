import { ProfileProps } from "../../@types/types";
import { Profile } from "../../components/Profile";
import { api } from "../../lib/api";
import { PostCard } from "./components/PostCard";
import { SearchForm } from "./components/SearchForm";
import { useEffect, useState } from "react";

export default function Home() {
  const user = "/rocketseat-education";
  const [profile, setProfile] = useState<ProfileProps>();

  async function fetchProfileData() {
    try {
      const response = await api.get(user);
      const data = await response.data;

      setProfile(data);
      console.log(data);
    } catch (error) {
      console.error("Erro ao buscar perfil:", error);
    }
  }

  useEffect(() => {
    fetchProfileData();
  }, []);

  return (
    <>
      <div className="h-screen">
        <main className="bg-base-background h-full px-4 md:w-[90%] md:mx-auto max-w-864 ">
          {profile ? ( // Exibir Profile apenas quando os dados existirem
            <Profile {...profile} />
          ) : (
            <p>Carregando...</p> // Mensagem de loading enquanto a requisição acontece
          )}

          <div className="flex flex-col pt-6 gap-3 lg:pt-16">
            <div className="flex justify-between items-center">
              <p className="text-sm text-base-subtitle">Publicações</p>
              <span className="text-base-span text-xs">6 publicações</span>
            </div>

            <SearchForm />

            <div className="grid grid-cols-1 pt-3 gap-2 pb-50 lg:grid-cols-2 md:pb-50 md:gap-8 md:pt-8">
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

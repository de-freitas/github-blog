import { Profile } from "../../components/Profile";
import { PostCard } from "./components/PostCard";
import { SearchForm } from "./components/SearchForm";

export default function Home() {
  return (
    <>
      <div className="h-screen">
        <main className="bg-base-background h-full px-4 md:w-[90%] md:mx-auto max-w-864 ">
          <Profile />

          <div className="flex flex-col pt-6 gap-3 lg:pt-16">
            <div className="flex justify-between items-center">
              <p className="text-sm text-base-subtitle">Publicações</p>
              <span className="text-base-span text-xs">6 publicações</span>
            </div>

            <SearchForm />

            <div className="grid grid-cols-1 pt-3 gap-2 lg:grid-cols-2 md:pb-20 md:gap-8 md:pt-8">
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

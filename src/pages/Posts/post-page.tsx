import { PostContent } from "./components/PostContent";
import { PostInfo } from "./components/PostInfo";

export default function Post() {
  return (
    <>
      <div className="bg-base-background h-full px-4 md:w-[90%] md:mx-auto max-w-864 ">
        <PostInfo />
        <PostContent />
      </div>
    </>
  );
}

import { IssuesProps } from "../../../@types/types";
import { formatCreatedAtDate } from "../../../utils/utils";
import { Link } from "react-router-dom";

export function PostCard({ title, body, created_at, number }: IssuesProps) {
  return (
    body && (
      <div className=" bg-base-post p-6 md:px-8 max-h-44 lg:max-h-56 gap-10 rounded-lg">
        <div className="flex justify-around items-baseline">
          <p className="text-base-title lg:text-lg flex-1 ">
            <Link to={`/issue/${number}`}>{title}</Link>
          </p>
          <span className="text-base-span text-xs">
            {formatCreatedAtDate(created_at)}
          </span>
        </div>
        <div className="flex">
          <p className="  text-base-text text-sm line-clamp-3 md:line-clamp-5 lg:line-clamp-6">
            {body}
          </p>
        </div>
      </div>
    )
  );
}

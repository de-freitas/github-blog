import imgGithub from "../../../../public/github-brands.svg";
import imgComment from "../../../../public/comment-solid.svg";
import imgCalendarDay from "../../../../public/calendar-day-solid.svg";
import imgArrowLeft from "../../../../public/chevron-left-solid.svg";
import imgArrowUpRight from "../../../../public/arrow-up-right-from-square-solid.svg";

import { Link } from "react-router-dom";
import { IssuesProps } from "../../../@types/types";
import { formatCreatedAtDate } from "../../../utils/utils";

type IssueInfoProps = Pick<
  IssuesProps,
  "title" | "created_at" | "html_url" | "comments"
>;

export function IssueInfo({
  title,
  created_at,
  html_url,
  comments,
}: IssueInfoProps) {
  console.log(created_at);
  return (
    <section className="bg-base-profile md:w-[90%] md:px-8 max-w-864 rounded-lg  mx-auto mt-[-8%] relative lg:mt-[-8%] text-base-text px-2 pb-6 ">
      <div className="lg:flex-row gap-3 lg:gap-6">
        <div className="flex flex-col lg:gap-2 lg:items-start">
          <div className="flex flex-col pt-5 pb-2 gap-4 md:w-full">
            <div className="flex justify-between items-center text-sm">
              <span className="text-blue">
                <Link to="/">
                  <img
                    src={imgArrowLeft}
                    alt=""
                    width="12"
                    className="inline mr-1"
                  />
                  voltar
                </Link>
              </span>
              <span className="text-blue ">
                <Link to={html_url} target="_blank">
                  github link
                  <img
                    src={imgArrowUpRight}
                    alt=""
                    width="12"
                    className="inline ml-2 "
                  />
                </Link>
              </span>
            </div>
            <div className="">
              <p className="text-center md:text-left text-base-title text-xl lg:text-2xl ">
                {title}{" "}
              </p>
            </div>
          </div>

          <div className="flex h-4 text-xs w-full justify-between md:justify-start md:gap-5 lg:justify-start">
            <div className="flex gap-1 w-[33%] md:w-fit    overflow-hidden ">
              <img src={imgGithub} />
              <span>cameronwll</span>
            </div>

            <div className="flex gap-1 w-[33%] md:w-fit   overflow-hidden justify-center">
              <img src={imgCalendarDay} />
              <span> {formatCreatedAtDate(created_at)}</span>
            </div>

            <div className="flex gap-1 w-[33%] md:w-fit   overflow-hidden justify-end">
              <img src={imgComment} />
              <span>
                {comments} {comments.length > 1 ? `comentários` : `comentário`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

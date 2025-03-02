import imgGithub from "../../../public/github-brands.svg";
import imgRocketseat from "../../../public/building-solid.svg";
import imgFollowers from "../../../public/user-group-solid.svg";
import { Link } from "react-router-dom";
import { ProfileProps } from "../../@types/types";

export function Profile({
  avatar_url,
  name,
  bio,
  login,
  followers,
  html_url,
  type,
}: ProfileProps) {
  return (
    <>
      <section className="bg-base-profile md:w-[90%] md:px-8 max-w-864 rounded-lg  mx-auto mt-[-8%] relative lg:mt-[-12%] text-base-text px-2 pb-8 lg:p-12 pt-6">
        <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-6">
          <div>
            <img src={avatar_url} className="h-28 rounded-md" />
          </div>

          <div className="flex flex-col items-center gap-6 lg:gap-2 lg:items-start">
            <div className="text-center lg:w-full lg:flex lg:justify-between">
              <p className="text-base-title text-xl lg:text-2xl ">{name}</p>
              <span className="text-blue">
                <Link to={html_url} target="_blank">
                  github link
                </Link>
              </span>
            </div>

            <div className="text-sm text-justify lg:max-w-[90%] lg:pb-4">
              {bio}
            </div>

            <div className="flex h-4 text-xs w-full justify-between md:justify-center md:gap-5 lg:justify-start">
              <div className="flex gap-1 w-[33%] md:w-fit    overflow-hidden ">
                <img src={imgGithub} />
                <span>{login}</span>
              </div>

              <div className="flex gap-1 w-[33%] md:w-fit   overflow-hidden justify-center">
                <img src={imgRocketseat} />
                <span>{type}</span>
              </div>

              <div className="flex gap-1 w-[33%] md:w-fit   overflow-hidden justify-end">
                <img src={imgFollowers} />
                <span> {followers} seguidores</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

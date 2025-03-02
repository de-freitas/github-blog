import { IssuesProps } from "../../../@types/types";

type IssueContentProps = Pick<IssuesProps, "body">;

export function IssueContent({ body }: IssueContentProps) {
  return (
    <>
      <section className="pt-8 px-4 text-sm text-base-text md:w-[90%] md:px-8 mx-auto pb-18">
        {body}
      </section>
    </>
  );
}

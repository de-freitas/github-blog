import { IssueContent } from "./components/IssueContent";
import { IssueInfo } from "./components/IssueInfo";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { api } from "../../lib/api";
import { IssuesProps } from "../../@types/types";

export default function Issue() {
  const { issueId } = useParams();
  const issueURL =
    "/repos/rocketseat-education/reactjs-github-blog-challenge/issues";
  const [issue, setIssue] = useState<IssuesProps | null>(null);

  async function fetchIssue() {
    const response = await api.get(`${issueURL}/${issueId}`);
    const data = await response.data;

    setIssue(data);
  }

  useEffect(() => {
    async function fetchData() {
      await fetchIssue();
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="bg-base-background h-full px-4 md:w-[90%] md:mx-auto max-w-864 ">
        {issue ? <IssueInfo {...issue} /> : `carregando...`}

        {issue ? <IssueContent {...issue} /> : `carregando...`}
      </div>
    </>
  );
}

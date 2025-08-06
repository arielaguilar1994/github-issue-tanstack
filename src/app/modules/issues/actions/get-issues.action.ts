import { sleep } from "@/helpers";
import { environment } from "src/environments/environment.development";
import { IGitHubIssue } from "../interfaces/github-issues.interface";

const BASE_URL = environment.baseUrl;
const TOKEN = environment.gitHubToken;

export const getIssues = async (): Promise<IGitHubIssue[]> => {
  await sleep(1500);

  try {
    const resp = await fetch(`${BASE_URL}/issues`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    if (!resp.ok) throw "Can't load issues";

    const issues = await resp.json();

    return issues as IGitHubIssue[];
  } catch (error) {
    throw "Can't load issues";
  }
};
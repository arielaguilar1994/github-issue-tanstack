import { sleep } from '@/helpers';
import { environment } from 'src/environments/environment.development';
import {
  IGitHubIssue,
  StateIssue,
} from '../interfaces/github-issues.interface';

const BASE_URL = environment.baseUrl;
const TOKEN = environment.gitHubToken;

export const getIssues = async (
  state: StateIssue = StateIssue.All,
  selectedLabels: Array<string>
): Promise<IGitHubIssue[]> => {
  await sleep(1500);

  const params = new URLSearchParams();
  params.append('state', state);

  if(selectedLabels.length) {
    params.append('labels', selectedLabels.join(','));
  }

  try {
    const resp = await fetch(`${BASE_URL}/issues?${params}`, {
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

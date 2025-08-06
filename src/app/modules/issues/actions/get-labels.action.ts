import { sleep } from '@/helpers';
import { IGitHubLabel } from '../interfaces';
import { environment } from 'src/environments/environment.development';

const BASE_URL = environment.baseUrl;
const TOKEN = environment.gitHubToken;

export const getLabels = async (): Promise<IGitHubLabel[]> => {
  await sleep(1500);

  try {
    const resp = await fetch(`${BASE_URL}/labels`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    if (!resp.ok) throw "Can't load labels";

    const labels = await resp.json();

    return labels as IGitHubLabel[];
  } catch (error) {
    throw "Can't load labels";
  }
};

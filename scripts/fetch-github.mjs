#!/usr/bin/env node
/**
 * Snapshot GitHub contribution data for the portfolio owner into src/data/github-contributions.json.
 *
 * Uses the GitHub GraphQL API through the local `gh` CLI (already authenticated), so no token
 * is stored in the repo and no token is needed at build time. Re-run to refresh the snapshot:
 *   npm run fetch:github
 *
 * If the fetch fails, the existing snapshot is left untouched and the script exits non-zero.
 */
import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const login = process.env.GITHUB_LOGIN ?? 'slading';
const out = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'data', 'github-contributions.json');

const query = `query($login:String!){
  user(login:$login){
    login
    contributionsCollection{
      contributionCalendar{
        totalContributions
        weeks{ contributionDays{ date contributionCount contributionLevel } }
      }
    }
  }
}`;

const LEVEL = { NONE: 0, FIRST_QUARTILE: 1, SECOND_QUARTILE: 2, THIRD_QUARTILE: 3, FOURTH_QUARTILE: 4 };

let raw;
try {
  raw = execFileSync('gh', ['api', 'graphql', '-f', `query=${query}`, '-F', `login=${login}`], {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  });
} catch (err) {
  console.error('GitHub fetch failed; snapshot left unchanged.', err.stderr?.toString() ?? err.message);
  process.exit(1);
}

const parsed = JSON.parse(raw);
const user = parsed?.data?.user;
if (!user) {
  console.error('No user in response:', raw.slice(0, 300));
  process.exit(1);
}

const cal = user.contributionsCollection.contributionCalendar;
const snapshot = {
  login: user.login,
  fetchedAt: new Date().toISOString(),
  window: 'last 12 months (GitHub contributions calendar)',
  total: cal.totalContributions,
  weeks: cal.weeks.map((w) => ({
    days: w.contributionDays.map((d) => ({
      date: d.date,
      count: d.contributionCount,
      level: LEVEL[d.contributionLevel] ?? 0,
    })),
  })),
};

writeFileSync(out, JSON.stringify(snapshot, null, 2) + '\n');
console.log(`Wrote ${out}: ${snapshot.total} contributions, ${snapshot.weeks.length} weeks, login=${snapshot.login}`);

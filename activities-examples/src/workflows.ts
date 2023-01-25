import { proxyActivities } from '@temporalio/workflow';
import type * as activities from './activities';

const {
  completeSomethingAsync,
  // cancellableFetch  // todo: demo usage
} = proxyActivities<typeof activities>({
  retry: {
    initialInterval: '50 milliseconds',
    maximumAttempts: 2,
  },
  startToCloseTimeout: '30 seconds',
});

export { httpWorkflow } from './httpWorkflow';

export async function asyncActivityWorkflow(): Promise<string> {
  const answer = await completeSomethingAsync();
  return `The Peon says: ${answer}`;
}

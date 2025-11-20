import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';
import { getVersion } from './version.ts';

describe('version', () => {
  it('should return current node version', () => {
    strictEqual(getVersion(), process.version);
  });
});

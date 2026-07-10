import * as migration_20260709_192707_initial from './20260709_192707_initial';

export const migrations = [
  {
    up: migration_20260709_192707_initial.up,
    down: migration_20260709_192707_initial.down,
    name: '20260709_192707_initial'
  },
];

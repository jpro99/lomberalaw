import * as migration_20260709_192707_initial from './20260709_192707_initial';
import * as migration_20260709_215633_initial from './20260709_215633_initial';
import * as migration_20260709_224416_initial from './20260709_224416_initial';
import * as migration_20260710_175520_initial from './20260710_175520_initial';
import * as migration_20260710_181714_initial from './20260710_181714_initial';

export const migrations = [
  {
    up: migration_20260709_192707_initial.up,
    down: migration_20260709_192707_initial.down,
    name: '20260709_192707_initial',
  },
  {
    up: migration_20260709_215633_initial.up,
    down: migration_20260709_215633_initial.down,
    name: '20260709_215633_initial',
  },
  {
    up: migration_20260709_224416_initial.up,
    down: migration_20260709_224416_initial.down,
    name: '20260709_224416_initial',
  },
  {
    up: migration_20260710_175520_initial.up,
    down: migration_20260710_175520_initial.down,
    name: '20260710_175520_initial',
  },
  {
    up: migration_20260710_181714_initial.up,
    down: migration_20260710_181714_initial.down,
    name: '20260710_181714_initial'
  },
];

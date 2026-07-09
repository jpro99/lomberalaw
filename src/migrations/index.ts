import * as migration_20260709_215633_initial from './20260709_215633_initial';
import * as migration_20260709_224416_initial from './20260709_224416_initial';

export const migrations = [
  {
    up: migration_20260709_215633_initial.up,
    down: migration_20260709_215633_initial.down,
    name: '20260709_215633_initial',
  },
  {
    up: migration_20260709_224416_initial.up,
    down: migration_20260709_224416_initial.down,
    name: '20260709_224416_initial'
  },
];

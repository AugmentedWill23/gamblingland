import {config} from '@bedrock/core';
import {fileURLToPath} from 'node:url';
import os from 'node:os';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// core
// 0 means use # of cpus
config.core.workers = 1;
config.core.primary.title = 'gamblingland1d';
config.core.worker.title = 'gamblingland-worker';
config.core.worker.restart = false;

// common paths
config.paths.cache = path.join(__dirname, '..', '.cache');
config.paths.log = path.join(os.tmpdir(), 'gamblingland');

// server info
config.server.port = 17443;
config.server.httpPort = 17080;
//config.server.domain = 'gambleland.localhost';

// special static paths
config.express.static.push({
  route: '/favicon.ico',
  path: path.join(__dirname, '..', 'web', 'images', 'favicon.ico')
});

// main app pseudo package
const rootPath = path.join(__dirname, '..');
config.views.bundle.packages.push({
  path: path.join(rootPath, 'web'),
  manifest: path.join(rootPath, 'package.json')
});

// main app config
config.gamblingland = {};

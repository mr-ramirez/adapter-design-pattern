
import { createLogAgent } from './lib/logAgent';
import { createSimpleClient } from './lib/simpleClient';

const logAgent = createLogAgent();
const node = createSimpleClient({ logAgent });

node.startLogging();

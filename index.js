
import { createLogAgentAdapter } from './lib/logAgentAdapter';
import { createAdvancedClient } from './lib/advancedClient';

const logAgent = createLogAgentAdapter();
const client = createAdvancedClient({ logAgent });

client.startLogging();

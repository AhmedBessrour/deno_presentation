import { info } from 'https://deno.land/std@0.90.0/log/mod.ts';
import { serve } from 'https://deno.land/std@0.90.0/http/server.ts';
import { config } from './config/index.ts';

const s = serve({port: config.port});

info(`server is running on port: ${config.port}`);

for await (const req of s) {
  req.respond({body: config.response})
};
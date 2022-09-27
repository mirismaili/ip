/**
 * Created on 1401/7/6 (2022/9/28).
 * @author {@link https://mirismaili.github.io S. Mahdi Mir-Ismaili}
 */

import http from 'node:http'

const PORT = process.env.PORT ?? 50505

http.createServer((req, res) => res.end(req.headers['x-real-ip'] ?? req.headers['x-forwarded-for'] ?? req.socket.remoteAddress)).listen(PORT)

console.info('Listening on', PORT)

// Sample nginx configuration:
//   proxy_set_header   X-Real-IP          $remote_addr;
//   proxy_set_header   X-Forwarded-Proto  $scheme;
//   proxy_set_header   X-Forwarded-For    $proxy_add_x_forwarded_for;

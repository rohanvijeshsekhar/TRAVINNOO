const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = false;
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT || 3000;
const socket = process.env.LSNODE_SOCKET;

app.prepare().then(() => {
  const server = createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('internal server error');
    }
  });

  if (socket) {
    server.listen(socket, () => {
      console.log(`> Ready on UNIX socket ${socket}`);
    });
  } else {
    server.listen(port, () => {
      console.log(`> Ready on http://localhost:${port}`);
    });
  }
});


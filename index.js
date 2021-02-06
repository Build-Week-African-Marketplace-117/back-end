const server = require("./server");

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Running at http://localhost:${PORT}`);
});

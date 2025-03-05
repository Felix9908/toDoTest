const server = jsonServer.create();
const router = jsonServer.router("../db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(router.db.getState().tasks),
  };
};
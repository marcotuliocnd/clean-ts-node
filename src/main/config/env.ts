export default {
  mongUrl: process.env.MONGO_URL ?? 'mongodb://root:root@localhost:27017/clean-node-api?authSource=admin',
  port: process.env.PORT ?? 1337
}

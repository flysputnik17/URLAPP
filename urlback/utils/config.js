const {
  NODE_ENV = "production",
  DB_CONNECTION_STRING = "mongodb://127.0.0.1:27017/urlSearcher",
  PORT = 3001,
  APIkey,
} = process.env;

export { NODE_ENV, DB_CONNECTION_STRING, PORT, APIkey };

require("dotenv").load();

const standard = {
  "CONSUMER_KEY": process.env.CONSUMER_KEY,
  "CONSUMER_SECRET": process.env.CONSUMER_SECRET,
  "SECRET": process.env.SECRET,
  "DB_URL": process.env.DB_URL
};

module.exports = {
  "development": Object.assign(standard, {
    "LOGIN_CALLBACK": "http://localhost:4200"
  }),
  "production": Object.assign(standard, {
    "LOGIN_CALLBACK": "/"
  })
}
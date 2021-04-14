module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "docker",
  database: "crud",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};

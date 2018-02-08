module.exports = {
  development: {
    client: 'pg',
    connection: 'postgresql://localhost/jsonMovies',
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  }
};

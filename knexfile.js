module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/jsonMovies',
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  }
}

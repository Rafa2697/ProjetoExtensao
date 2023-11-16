import postgres from "postgres";

const sql = postgres({
  // host: PGHOST,
  // database: PGDATABASE,
  // username: PGUSER,
  // password: PGPASSWORD,
  // port: 5432,
  // ssl: 'require',
  // connection: {
  //   options: `project=${ENDPOINT_ID}`,
  // },

  user: 'root',
  host: 'localhost',
  database: 'seu_banco_de_dados',
  password: '',
  port: 5432,
})

client.postgres(postgres, (err, res) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Tabela criada com sucesso!');
  client.end();
});
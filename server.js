const app = require('./src/config/custom_config');
const { routes } = require('./src/config/custom_config');

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Servidor rodando no endereço: http://localhost:3000`);
});

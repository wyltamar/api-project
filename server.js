const app = require('./src/config/custom_config');
const { routes } = require('./src/config/custom_config');

app.listen(3000, () => {
  console.log(`Servidor rodando no endereço: http://localhost:3000`);
});

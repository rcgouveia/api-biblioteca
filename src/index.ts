import type { Express } from 'express';

import express from 'express';
import routes from './routes';
import { setupSwagger } from './swagger';

const app: Express = express();

app.use(express.json());
app.use('', routes);
setupSwagger(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server rodando na porta ${PORT}`);
});

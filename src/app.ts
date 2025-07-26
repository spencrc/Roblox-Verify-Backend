import { PORT } from './config.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import express from 'express';
import indexRoutes from './routes/index.js';
import redirectRoutes from './routes/redirect.js';
import termsRoute from './routes/terms.js';
import errorMiddleware from './middleware/error-middleware.js';
import expressLayouts from 'express-ejs-layouts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Start Express.js server!
const app = express();

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/../views`);
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static(`${__dirname}/../public`));

app.use('/', indexRoutes);
app.use('/redirect', redirectRoutes);
app.use('/terms', termsRoute);

app.use(errorMiddleware);

app.listen(PORT, () => {
	console.log(`Ready! Listening on port ${PORT}!`);
});

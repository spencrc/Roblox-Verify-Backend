import { PORT } from './config.js';
import express from 'express';
import indexRoutes from './routes/index.js';
import redirectRoutes from './routes/redirect.js';
import termsRoute from './routes/terms.js';
import errorMiddleware from './middleware/error-middleware.js';

// Start Express.js server!
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/', indexRoutes);
app.use('/redirect', redirectRoutes);
app.use('/terms', termsRoute);

app.use(errorMiddleware);

app.listen(PORT, () => {
	console.log(`Ready! Listening on port ${PORT}!`);
});

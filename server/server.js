import express from 'express';
import path from 'path';
import App from './src/app';

const router = express.Router();
const staticFiles = express.static(path.join(__dirname, '../../client/build'));

App.use(staticFiles);
App.use(router);
App.use('/*', staticFiles);

App.set('port', (process.env.PORT || 3001));
App.listen(App.get('port'), () => {
  console.log(`Listening on ${App.get('port')}`);
});

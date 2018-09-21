import { create } from 'dva-core'
//import { createLogger } from 'redux-logger'
import createLoading from 'dva-loading'

export default (opt) => {
  //opt.onAction = [createLogger()];
  let app = create(opt);
  app.use(createLoading({}));

  if (!global.registered) opt.models.forEach(model => app.model(model));
  global.registered = true;
  app.start();

  const store = app._store;
  app.getStore = () => store;

  return app;
}


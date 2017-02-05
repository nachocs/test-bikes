import AppView from './containers/AppView';
import App from './containers/App';

export default {
  childRoutes: [
    {
      path: '/',
      component: App,
      indexRoute: { component: AppView },
    },
  ],
};

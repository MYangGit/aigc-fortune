import Root from './root';
import ErrorPage from './error-page';

const RouterConfig = [
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
];

export default RouterConfig;

import UserRouter from './UserRouter';

const routes = (app) => {
    app.use('/api/user', UserRouter);
};

export default routes;
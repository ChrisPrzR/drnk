const resolveRoutes = (route) => {
    let validRoute = route === '/' ? route : '/:id';
        return validRoute;
    }

export default resolveRoutes
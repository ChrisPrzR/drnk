import Header from '../templates/Header';
import Home from '../pages/Home';
import Drinks from '../pages/Drinks'
import Error404 from '../pages/Error404'
import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes'

const routes = {
    '/': Home,
    '/:id': Drinks,
}

const router = async () => {
        const header = null || document.getElementById('header');
        const content = null || document.getElementById('content');
    
        header.innerHTML = Header();
        let hash = getHash();
        let route = await resolveRoutes(hash);
        let render = routes[route] ? routes[route] : Error404;
        content.innerHTML = await render();
        if (render.OnComplete) {
            await render.OnComplete()
        }
}

export default router

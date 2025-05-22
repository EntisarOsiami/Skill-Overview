import { createBrowserRouter } from 'react-router';
import Layout from '../Components/Layout';
import Home from '../Pages/Home';
import AWSPage from '../Pages/AWSPage';
import GoogleCloud from '../Pages/GoogleCloud';
import AzurePage from '../Pages/AzurePage';
import Alibaba from '../Pages/Alibaba';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/aws',
                element: <AWSPage />,
            },
            {
                path: '/azure',
                element: <AzurePage />,
            },
            {
                path: '/gcp',
                element: <GoogleCloud />,
            },
            {
                path: '/alibaba',
                element: <Alibaba />,
            }
        ]
    }
]);

export default router; 
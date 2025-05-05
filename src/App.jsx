import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Error from "./ui/Error";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import AppLayout from "./ui/AppLayout";
import Cart from "./features/cart/Cart";
import CreateOrder, {
    action as createOrderAction,
} from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";
import { action as updateOrderAction } from "./features/order/UpdateOrder";

const router = createBrowserRouter(
    [
        {
            element: <AppLayout />,
            errorElement: <Error />,

            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/menu",
                    element: <Menu />,
                    loader: menuLoader,
                    errorElement: <Error />,
                },
                { path: "/cart", element: <Cart /> },
                {
                    path: "/order/new",
                    element: <CreateOrder />,
                    action: createOrderAction,
                },
                {
                    path: "/order/:orderID",
                    element: <Order />,
                    loader: orderLoader,
                    errorElement: <Error />,
                    action: updateOrderAction,
                },
            ],
        },
    ],
    {
        future: {
            v7_fetcherPersist: true,
            v7_normalizeFormMethod: true,
            v7_relativeSplatPath: true,
            v7_skipActionErrorRevalidation: true,
            v7_startTransition: true,
        },
    }
);

function App() {
    return (
        <RouterProvider router={router} future={{ v7_startTransition: true }} />
    );
}

export default App;

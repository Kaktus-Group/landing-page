import About from "../pages/About";
import BlogPost from "../pages/BlogPost";
import BlogPosts from "../pages/BlogPosts";
import CheckOut from "../pages/Checkout";
import CheckOutComplete from "../pages/CheckoutComplete";
import Components from "../pages/Components";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Tour from "../pages/Tour";
import Tours from "../pages/Tours";
import Documentation from "../pages/Documentation";
import MainPages from "../pages/MainPages";
export const navbar = [
  {
    id: 1,
    title: "Home",
    path: "/home",
    element: <Home />,
  },
  {
    id: 2,
    title: "Components",
    path: "/components",
    element: <Components />,
  },
  {
    id: 3,
    title: "Documentation",
    path: "/documentation",
    element: <Documentation />,
  },
  {
    id: 4,
    title: "Pages",
    path: "/",
    element: <MainPages />,
    drop: [
      {
        id: 1,
        title: "About",
        path: "/about",
        element: <About />,
      },
      {
        id: 2,
        title: "BlogPost",
        path: "/blogpost",
        element: <BlogPost />,
      },
      {
        id: 3,
        title: "BlogPosts",
        path: "/blogposts",
        element: <BlogPosts />,
      },
      {
        id: 4,
        title: "Checkout",
        path: "/checkout",
        element: <CheckOut />,
      },
      {
        id: 5,
        title: "CheckOutComplete",
        path: "/checkoutcomplete",
        element: <CheckOutComplete />,
      },
      {
        id: 6,
        title: "Contact",
        path: "/contact",
        element: <Contact />,
      },
      {
        id: 7,
        title: "Tour",
        path: "/tour",
        element: <Tour />,
      },
      {
        id: 8,
        title: "Tours",
        path: "/tours",
        element: <Tours />,
      },
    ],
  },
];

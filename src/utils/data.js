import About from "../pages/About";
import BlogPost from "../pages/BlogPost";
import BlogPosts from "../pages/BlogPosts";
import CheckOut from "../pages/Checkout";
import CheckOutComplete from "../pages/CheckoutComplete";
import Contact from "../pages/Contact";
import Tour from "../pages/Tour";
import Tours from "../pages/Tours";
export const navbar = [
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
];

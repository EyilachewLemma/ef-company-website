import { createBrowserRouter } from "react-router-dom";
import PageContainer from "../pages/PageContainer";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Client from "../pages/client/Client";
import Contact from "../pages/contact/Contact";
import Gallery from "../pages/gallery/Gallery";
import News from "../pages/news/News";
import Profile from "../pages/profile/Profile";
import Project from "../pages/project/Project";
import Service from "../pages/service/Service";
import ServiceDetail from "../pages/service/ServiceDetail";
import Partners from "../pages/client/Partners";
import ErrorPage from "../pages/ErrorPage";
import NewsDetail from "../pages/news/NewsDetail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <PageContainer />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "client", element: <Client /> },
      { path: "partner", element: <Partners /> },
      { path: "contact", element: <Contact /> },
      { path: "service", element: <Service /> },
      { path: "service-detail", element: <ServiceDetail /> },
      { path: "project", element: <Project /> },
      { path: "gallery", element: <Gallery /> },
      { path: "news", element: <News /> },
      { path: "news/:id", element: <NewsDetail /> },
      { path: "profile", element: <Profile /> },
    ],
  },
]);
export default router;

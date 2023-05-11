import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'
import './index.css'
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics';
import AppliedJobs from './Components/AppliedJobs';
import Blog from './Components/Blog';
import Main from './Components/Layout/Main';
import { categoryList,jobs, loadJobDetails } from './Components/loaders/dataLoader';
import JobDetails from './Components/Home/JobDetails/JobDetails';
import NotFound from './Components/Layout/NotFound';
import ErrorElement from './Components/Layout/ErrorElement/ErrorElement';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorElement></ErrorElement>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader: categoryList
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>
      },
      {
        path:'jobs/:jobId',
        element: <JobDetails></JobDetails>,
        loader: ({params}) => loadJobDetails(params.jobId) 
      },
      {
        path: "applied-jobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: jobs
      },
      {
        path: "blog",
        element: <Blog></Blog>
      },
      {
        path: "*",
        element: <NotFound></NotFound>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

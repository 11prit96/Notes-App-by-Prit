import { RouterProvider, createBrowserRouter } from "react-router-dom"

import {
  AddNote,
  AllNotes,
  DashboardLayout,
  EditNote,
  Error,
  HomeLayout,
  Landing,
  Login,
  Profile,
  Register
} from "./pages"

import { registerAction, loginAction, dashboardLoader, AddNoteAction, allNotesLoader, editNoteLoader, editNoteAction, deleteNoteAction } from "./utils/actionsAndLoaders"
import Admin from "./pages/Admin";
import { loader as adminLoader } from "./pages/Admin"
import { action as ProfileAction } from "./pages/Profile"

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path: 'register',
        element: <Register />,
        action: registerAction
      },
      {
        path: 'login',
        element: <Login />,
        action: loginAction
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        loader: dashboardLoader,
        children: [
          {
            index: true,
            element: <AddNote />,
            action: AddNoteAction
          },
          {
            path: 'all-notes',
            element: <AllNotes />,
            loader: allNotesLoader
          },
          {
            path: 'profile',
            element: <Profile />,
            action: ProfileAction
          },
          {
            path: 'edit-note/:id',
            element: <EditNote />,
            loader: editNoteLoader,
            action: editNoteAction
          },
          {
            path: 'delete-note/:id',
            action: deleteNoteAction
          },
          {
            path: 'admin',
            element: <Admin />,
            loader: adminLoader,
          },
        ]
      }
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
};
export default App;
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import App from "../../App";
// import SignIn from "../login/SignIn";
import Content from "../content/Content";
import Najottalim from "../najot-ta'lim/najottalim";
import Mygroup from "../pages/group/my-group";
import Payments from "../pages/payment/payments";
import Pointers from "../pages/pointres/pointer";
import Rating from "../pages/rating/rating";
import Profile from "../pages/settings/profile";
import SignInSide from "../login/SignInSide";

const Index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        {/* <Route index element={<SignIn />} /> */}
        <Route index element={<SignInSide />} />
        <Route path="/najottalim/*" element={<Najottalim />}>
          <Route index element={<Content />} />
          <Route path="my-group" element={<Mygroup />} />
          <Route path="payments" element={<Payments />} />
          <Route path="pointers" element={<Pointers />} />
          <Route path="rating" element={<Rating />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Index;

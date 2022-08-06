import { BrowserRouter, Route, withRouter, Switch } from "react-router-dom";
import { HOME_ROUTE } from "./routes";
import Header from "../components/header/Header";
import Home from "../pages/Home/Home.page";
import Footer from "../components/footer/Footer";
// import TicketsPage from "../pages/Tickets/Tickets.page";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path={HOME_ROUTE} exact component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default withRouter(Router);

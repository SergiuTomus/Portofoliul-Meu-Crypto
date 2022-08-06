import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { getTicketsSuccessAction } from '../store/actions/tickets.actions';

const HomePage = () => {
  // const dispatch = useDispatch();

  return (
    <div className="landing">
      <div className="dark-overlay landing-inner text-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="display-3 mb-4">Portofoliul Meu Crypto</h1>
              <p className="lead">
                Aplicatie de urmarit portofoliul personal de crypto monede
              </p>
              <hr />
              <Link to="/login" className="btn btn-lg btn-light">
                Autentificare
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  //   console.error(error);
  const custom_class = {
    backgroundImage:
      "linear-gradient(90deg, rgba(0, 255, 125, 1) 0%, rgba(0, 168, 212, 1) 50%, rgba(233, 47, 255, 1) 100%)",
  };

  return (
    <div
      style={custom_class}
      id="error-page"
      className="h-[100vh] flex justify-center items-center text-center font-bold text-2xl custom_class"
    >
      <div>
        {error.status === 404 || (
          <div className="text-white">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
              <i>{error.statusText || error.message}</i>
            </p>
            <Link to="/">
              <button className="btn btn-primary text-white capitalize mt-4">
                Go Back to Home
              </button>
            </Link>
          </div>
        )}
        {error.status === 404 && (
          <div className="text-white">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <h3>404 page {error.statusText || error.message}</h3>
            <p className="mt-8"></p>
            <Link to="/">
              <button className="btn btn-primary text-white capitalize">
                Go Back to Home
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

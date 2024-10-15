import { Link } from "react-router-dom";

export default function Custom404() {
  return (
    <main className="w-full min-h-screen flex justify-center items-center">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-9xl font-bold">404</h1>
        <p className="text-secondary-500 font-medium">
          Page Not Found |{" "}
          <Link className="text-primary-500" to="/">
            Go home
          </Link>
        </p>
      </div>
    </main>
  );
}

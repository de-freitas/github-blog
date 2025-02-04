import { BrowserRouter, Routes, Route, Link } from "react-router";
import Home from "../pages/Home/home-page";
import Post from "../pages/Posts/post-page";
import DefaultLayout from "../layouts/default-layout";

function Fallback() {
  return (
    <div className="text-base-subtitle flex flex-col items-center">
      <h1>Página não encontrada</h1>
      <p>
        A URL que você digitou não existe. Clique{" "}
        <Link to="/" replace={true} className="underline hover:cursor-pointer">
          aqui{" "}
        </Link>
        e vamos te levar para página inicial.
      </p>
    </div>
  );
}

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<Post />} />
        </Route>
        <Route path="/*" element={<Fallback />} />
      </Routes>
    </BrowserRouter>
  );
}

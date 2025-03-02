import { Link } from "react-router-dom";
import headerImg from "../../../public/Cover.png";

export default function Header() {
  return (
    <>
      <section className="w-full mx-auto">
        <Link to="/">
          <img src={headerImg} width="100%" />
        </Link>
      </section>
    </>
  );
}

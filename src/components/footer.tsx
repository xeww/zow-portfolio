import ContentWrapper from "./contentWrapper.tsx";
import { Link } from "react-router";
import { scrollToTop } from "../utils.ts";

export default function Footer() {
  return (
    <footer
      className={
        "bg-default-dark border-light-dark border-t-3 py-5 text-center"
      }
    >
      <ContentWrapper maxWidth={"1440px"} px={0} py={0}>
        <Title />
        <Links />
        <Credit />
      </ContentWrapper>
    </footer>
  );
}

function Title() {
  return (
    <h3
      className={
        "font-special mb-4 cursor-pointer text-center text-4xl text-white"
      }
      onClick={scrollToTop}
    >
      Zow's Builds
    </h3>
  );
}

function Links() {
  return (
    <div
      className={
        "font-display bg-light-dark border-green-primary inline-flex items-center justify-center gap-6 rounded-3xl border-2 px-12 py-2 text-sm text-white"
      }
    >
      <SingleLink
        text={"BuiltByBit"}
        link={"https://builtbybit.com/creators/ikwoz.445348"}
      />
      <SingleLink text={"Portfolio"} link={"/"} />
      <SingleLink text={"Contact"} link={"/contact"} />
    </div>
  );
}

function SingleLink({ text, link }: { text: string; link: string }) {
  return <Link to={link}>{text}</Link>;
}

function Credit() {
  return (
    <div className={"font-display mt-5 text-center text-white"}>
      <p>Website made with ❤️ by François L.P.</p>
      <p className={"italic"}>
        Want your own website ?{" "}
        <Link to={"https://www.francois-lp.dev"} className={"text-sky-300"}>
          I'm open to opportunities.
        </Link>
      </p>
    </div>
  );
}

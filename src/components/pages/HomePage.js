import Heading from "../sections/headingPages/Heading";
import Specials from "../sections/headingPages/Specials";
import About from "../sections/aboutPages/Heading";
export default function Homepage() {
  return (
    <>
      <Heading />
      <main>
        <Specials />
        <About />
      </main>
    </>
  );
}

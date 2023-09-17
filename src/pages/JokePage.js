import { Header } from "../components/Header";
import { Joke } from "../components/Joke";

export const JokePage = () => {
  return (
    <main>
      <Header
        heading="ChuchNorris Jokes"
        subHeading="Free JSON API for hand curate"
      ></Header>
      <Joke />
    </main>
  );
};

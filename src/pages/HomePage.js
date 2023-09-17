import { Header } from "../components/Header";
import { Counter } from "../components/Counter";

export function HomePage() {
  return (
    <main>
      <Header
        heading="Word Counter"
        subHeading="Free online character and word counter"
      ></Header>
      <Counter />
    </main>
  );
}

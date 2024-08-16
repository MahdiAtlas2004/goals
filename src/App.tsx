import CourseGoal from "./components/CourseGoal.tsx";
import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header.tsx";
import { useState } from "react";

type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<Array<CourseGoal>>([]);

  function handleAddGoal() {
    // setGoals();
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goal</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <CourseGoal title="React + TypeScript">
        <p>Starting from ground up</p>
      </CourseGoal>
    </main>
  );
}

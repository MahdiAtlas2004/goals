// FormEvent is a type that we use for form events objects.
import { useRef, type FormEvent } from "react";

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
};

export default function NewGoal({ onAddGoal }: NewGoalProps) {
  // we have to set the value of this useRef to null because thier value is undefined by default
  // And this cause an type error in typescript.
  // using generic type to tell that this useRef refers to an input element.
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // using ! mark tell the typescript that this value can never be null.
    const eneteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;
    // reseting form after submission.
    event.currentTarget.reset();
    onAddGoal(eneteredGoal, enteredSummary);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        {/* we connect our useRef hooks to the specific element that we want using ref props */}
        <input type="text" id="goal" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        {/* we connect our useRef hooks to the specific element that we want using ref props */}
        <input type="text" id="summary" ref={summary} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}

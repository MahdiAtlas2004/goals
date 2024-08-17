import { type PropsWithChildren } from "react";

// creating custom type for props
type CourseGoalProps = PropsWithChildren<{
  title: string;
  // setting type for onDelete function props
  onDelete: (id: number) => void;
  id: number;
}>;

export default function CourseGoal({
  title,
  id,
  children,
  onDelete,
}: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}

/**
 * ----------
 * デバッグ用
 * ----------
 */
import React from "react";
import { useAppSelector } from "../app/hooks";

const DebugTodos: React.FC = () => {
  const todos = useAppSelector((state) => state.items.items);

  return (
    <div style={{ background: "#f0f0f0", color: "#000", padding: "10px", margin: "20px 0", border: "1px solid #ccc" }}>
      <h3>📝 Debug: Todos State</h3>
      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </div>
  );
};

export default DebugTodos;
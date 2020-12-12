import React from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
const App = () => {
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <>
      <Header />
      <Input
        inputText={inputText}
        setInputText={setInputText}
        setTasks={setTasks}
        tasks={tasks}
      />
      <TodoList setTasks={setTasks} tasks={tasks} />
    </>
  );
};

export default App;

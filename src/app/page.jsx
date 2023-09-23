"use client";
import ThemeToggle from './components/ThemeToggle';
import TodoList from './components/TodoList';
import LegendComp from './components/LegendComp';
import Login from './components/Login';
import Tree from './components/Tree';
import LegendStateModal from './components/ShowModal';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <div>
      <h1>Legend State Example</h1>
      <ThemeToggle />
      <hr />
      <TodoList />
      </div> */}
      {/* Render count example  */}
      {/* <div>
        <LegendComp />
        <Login />
      </div> */}
      {/* <Tree /> */}
      <LegendStateModal />
    </main>
  )
}

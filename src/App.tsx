import { Outlet } from "react-router-dom";

function App() {
  return (
    <main className="h-screen bg-gray-900">
      <Outlet />
    </main>
  );
}

export default App;

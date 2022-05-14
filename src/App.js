import './App.css';
import SideMenu from "./components/SideMenu/SideMenu";
import CalendarPage from "./pages/Calendar/Calendar";
import DashboardPage from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
        <SideMenu />
        <DashboardPage></DashboardPage>
        {/*<CalendarPage/>*/}
    </div>
  );
}

export default App;

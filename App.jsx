import "./App.css";
import EmployeeProfile from "./component/EmployeeProfile";
import CurrentProjects from "./component/CurrentProjects";
import TeamNotices from "./component/TeamNotices";

function App() {
  return (
    <div className="container">
      <h1>
        Good Morning!
        <br />
        Welcome to your
        <br />
        Wipro Dashboard.
      </h1>

      <EmployeeProfile />
      <CurrentProjects />
      <TeamNotices />

      <div className="footer">
        <p>
          Contact: james.wipro@wipro.com | +91-XXXXXXXXXX
        </p>
        <p>WIPRO TECHNOLOGY | Wipro Ltd. Global Operations</p>
      </div>
    </div>
  );
}

export default App;
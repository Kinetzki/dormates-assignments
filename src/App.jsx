import { useEffect, useState } from "react";
import "./App.css";
import { assignment, weekdays, pics } from "./assigns";
import Profile from "./Profile";

function App() {
  const [currentDay, setCurrentDay] = useState("");

  const change = (day) => {
    setCurrentDay(day);
  };

  useEffect(() => {
    const currentDate = new Date();
    const day = weekdays[currentDate.getDay() - 1];
    change(day);
  }, []);

  return (
    <>
      <h1>{currentDay}</h1>
      <br />
      <div className="works-container">
        {currentDay &&
          Object.keys(assignment[currentDay]).map((work, i) => {
            return (
              <div key={i} className="works">
                <Profile
                  pic={pics[assignment[currentDay][work]["name"]]}
                  work={work}
                  name={assignment[currentDay][work]["name"]}
                />
              </div>
            );
          })}
      </div>
      <br />
    </>
  );
}

export default App;

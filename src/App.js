import "./tailwind.css";
import { Routes, Route,Link } from "react-router-dom";
import Home from './views/Home'
import Header from './components/Header'
import StudentList from "./views/StudentList";
import RateEdit from "./views/RateEdit";
import RateCreate from "./views/RateCreate";
import StudentDetail from "./views/StudentDetail";
import RateView from "./views/RateView";

function App() {
  return (
    <>
    <Header/>
    <div className="App">
      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route path="/student-list" element={<StudentList />} />
        <Route path="/rate-edit/:rateId" element={<RateEdit />} />
        <Route path="/rate-create/:studentId/:subjectId" element={<RateCreate />} />
        <Route path="/student-detail/:studentId" element={<StudentDetail />} />
        <Route path="/rate-view/:subjectId/:studentId" element={<RateView />} />


      </Routes>
    </div>
    </>
  );
}

export default App;

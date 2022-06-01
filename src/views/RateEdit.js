import axios from "axios";
import { useEffect, useState } from "react";

import StudentInfo from "../components/StudentInfo";
import NoData from "../components/NoData";
import { useParams } from "react-router-dom";

function RateEdit() {
  const [rates, setRates] = useState();
  const [firstExam, setFirstExam] = useState("");
  const [secondExam, setSecondExam] = useState("");
  const [thirdExam, setThirdExam] = useState("");
  const [firstHomework, setFirstHomework] = useState("");
  const [secondHomework, setSecondHomework] = useState("");
  const [projectHomework, setProjectHomework] = useState("");
  //   const []

  const {rateId} = useParams();
  useEffect(() => {
    const uri = process.env.REACT_APP_API_URL+"/api/get-subject-rates/"+rateId;
    console.log(uri,'test uri')
    axios.get(uri).then((res) => {
      console.log(res.data);

      if (res.data.length > 0) {
        setRates(res.data);
        setFirstExam(res.data[0].first_exam);
        setSecondExam(res.data[0].second_exam);
        setThirdExam(res.data[0].third_exam);
        setFirstHomework(res.data[0].first_homework);
        setSecondHomework(res.data[0].second_homework);
        setProjectHomework(res.data[0].project_homework);
      }
      console.log(rates, "rates test");
    });
  }, []);

  const handleUpdateRate = () => {
    const postData = {
      rate_id: rates[0].rate_id,
      student_id: rates[0].student_id,
      subject_id: rates[0].subject_id,
      first_exam: firstExam,
      second_exam: secondExam,
      third_exam: thirdExam,
      first_homework: firstHomework,
      second_homework: secondHomework,
      project_homework: projectHomework,
    };
    // axios.post("http://127.0.0.1:8000/api/edit-rate",postData)
    // .then(res => {console.log(res,'response')})
    console.log(postData);
  };

  return (
    <>
      <div className="container mx-auto">
        <StudentInfo />
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  1.Yazılı
                </th>
                <th scope="col" className="px-6 py-3">
                  2.Yazılı
                </th>
                <th scope="col" className="px-6 py-3">
                  3.Yazılı
                </th>
                <th scope="col" className="px-6 py-3">
                  1.Performans
                </th>
                <th scope="col" className="px-6 py-3">
                  2.Performans
                </th>
                <th scope="col" className="px-6 py-3">
                  Proje Ödevi
                </th>
                <th scope="col" className="px-6 py-3">
                  Ortalama
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">
                  <input
                    type="text"
                    id="base-input"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={firstExam}
                    onChange={(e) => setFirstExam(e.target.value)}
                  />
                </td>
                <td className="px-6 py-4">
                  <input
                    type="text"
                    id="base-input"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={secondExam}
                    onChange={(e) => setSecondExam(e.target.value)}
                  />
                </td>
                <td className="px-6 py-4">
                  <input
                    type="text"
                    id="base-input"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={thirdExam}
                    onChange={(e) => setThirdExam(e.target.value)}
                  />
                </td>
                <td className="px-6 py-4">
                  <input
                    type="text"
                    id="base-input"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={firstHomework}
                    onChange={(e) => setFirstHomework(e.target.value)}
                  />
                </td>
                <td className="px-6 py-4">
                  <input
                    type="text"
                    id="base-input"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={secondHomework}
                    onChange={(e) => setSecondHomework(e.target.value)}
                  />
                </td>
                <td className="px-6 py-4">
                  <input
                    type="text"
                    id="base-input"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={projectHomework}
                    onChange={(e) => setProjectHomework(e.target.value)}
                  />
                </td>
                <td className="px-6 py-4 text-right">🖥</td>
              </tr>
            </tbody>
          </table>
          <button
            type="button"
            className=" flex justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={handleUpdateRate}
          >
            Güncelle
          </button>
        </div>
      </div>
    </>
  );
}
export default RateEdit;

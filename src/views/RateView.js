import axios from "axios";
import { useEffect, useState } from "react";

import StudentInfo from "../components/StudentInfo";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

function RateView() {
  const [rates, setRates] = useState();
  const [firstExam, setFirstExam] = useState(null);
  const [rateId, setRateId] = useState(null);
  const [secondExam, setSecondExam] = useState(null);
  const [thirdExam, setThirdExam] = useState(null);
  const [firstHomework, setFirstHomework] = useState(null);
  const [secondHomework, setSecondHomework] = useState(null);
  const [projectHomework, setProjectHomework] = useState(null);
  const [studentDetail, setStudentDetail] = useState(null);
  const [finalRate, setFinalRate] = useState(null);
  //   const []

  const { studentId } = useParams();
  const { subjectId } = useParams();

  const rateArray = [
    firstExam,
    secondExam,
    thirdExam,
    firstHomework,
    secondHomework,
    projectHomework,
  ];
  const handleCalculateFinalRate = () => {
    console.log(rateArray);
    const finalRates = [];
    rateArray.forEach((rate) => {
      if (rate) {
        finalRates.push(rate);
        console.log(finalRates, "foreach");
      }
    });
    const toplam = finalRates.reduce(
      (acc, cur) => parseInt(acc) + parseInt(cur)
    );
    setFinalRate(toplam / finalRates.length);
    console.log(finalRates, "finalRates");
  };

  const getStudentDetail = () => {
    axios
      .get(process.env.REACT_APP_API_URL+"/api/student-detail/" + studentId)
      .then((res) => {
        console.log(res.data.student, "studentDetail");
        setStudentDetail(res.data.student);
      });
  };
  useEffect(() => {
    const uri =
    process.env.REACT_APP_API_URL+"/api/get-rates/" + subjectId + "/" + studentId;
    console.log(uri, "test uri");
    axios.get(uri).then((res) => {
      console.log(res.data);

      setRates(res.data);
      setFirstExam(res.data.first_exam);
      setRateId(res.data.rate_id);
      setSecondExam(res.data.second_exam);
      setThirdExam(res.data.third_exam);
      setFirstHomework(res.data.first_homework);
      setSecondHomework(res.data.second_homework);
      setProjectHomework(res.data.project_homework);
    });
    getStudentDetail();
  }, []);

  const handleUpdateRate = () => {
    const postData = {
      rate_id: rateId,
      student_id: studentId,
      subject_id: subjectId,
      first_exam: firstExam,
      second_exam: secondExam,
      third_exam: thirdExam,
      first_homework: firstHomework,
      second_homework: secondHomework,
      project_homework: projectHomework,
    };
    const uri = process.env.REACT_APP_API_URL+"/api/edit-rate";
    axios.post(uri, postData).then((res) => {
      console.log(res, "response");
      if (res.status === 201) {
        Swal.fire({
          title: "Güncellendi",
          icon: "success",
          confirmButtonText: "Tamam",
        });
      } else
        Swal.fire({
          title: "Hata",
          icon: "error",
          confirmButtonText: "Tamam",
        });
    });
    console.log(postData);
  };

  return (
    <>
      <div className="container mx-auto mt-2">
        <StudentInfo student={studentDetail} />
        <div className="mt-2 relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="mt-2 w-full text-sm text-left text-gray-500 dark:text-gray-400">
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
              {console.log()}
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">
                  <input
                    type="text"
                    id="base-input"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={firstExam}
                    onChange={(e) => {
                      setFirstExam(e.target.value);
                      handleCalculateFinalRate();
                    }}
                  />
                </td>
                <td className="px-6 py-4">
                  <input
                    type="text"
                    id="base-input"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={secondExam}
                    onChange={(e) => {
                      setSecondExam(e.target.value);
                      handleCalculateFinalRate();
                    }}
                  />
                </td>
                <td className="px-6 py-4">
                  <input
                    type="text"
                    id="base-input"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={thirdExam}
                    onChange={(e) => {
                      setThirdExam(e.target.value);
                      handleCalculateFinalRate();
                    }}
                  />
                </td>
                <td className="px-6 py-4">
                  <input
                    type="text"
                    id="base-input"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={firstHomework}
                    onChange={(e) => {
                      setFirstHomework(e.target.value);
                      handleCalculateFinalRate();
                    }}
                  />
                </td>
                <td className="px-6 py-4">
                  <input
                    type="text"
                    id="base-input"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={secondHomework}
                    onChange={(e) => {
                      setSecondHomework(e.target.value);
                      handleCalculateFinalRate();
                    }}
                  />
                </td>
                <td className="px-6 py-4">
                  <input
                    type="text"
                    id="base-input"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={projectHomework}
                    onChange={(e) => {
                      setProjectHomework(e.target.value);
                      handleCalculateFinalRate();
                    }}
                  />
                </td>
                <td className="px-6 py-4 text-right">{finalRate}</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-2 p-4 w-full flex text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <button
              type="button"
              className=" flex justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={handleUpdateRate}
            >
              Güncelle
            </button>
            <button
              type="button"
              className=" focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              onClick={handleCalculateFinalRate}
            >
              Ortalama Hesapla
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default RateView;

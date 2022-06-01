import axios from "axios";
import { useEffect, useState } from "react";

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL+"/api/student-index").then((res) => {
      setStudents(res.data);
    });
  }, []);

  // const students.map((item,key)=>{
  //     return(
  //         <tr key={key}>
  //         <td>{item.student_id}</td>
  //         <td>{item.name}</td>
  //         <td>{item.surname}</td>
  //       </tr>
  //         )
  // }

  return (
    <>
      <div className="container mx-auto">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Öğrenci Numarası
                </th>
                <th scope="col" className="px-6 py-3">
                  İsim
                </th>
                <th scope="col" className="px-6 py-3">
                  Soyisim
                </th>
                <th scope="col" className="px-6 py-3">
                  Sınıfı
                </th>
                <th scope="col" className="px-6 py-3">
                  Bölümü
                </th>
                <th scope="col" className="px-6 py-3">
                  Doğum Tarihi
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    {student.student_id}
                  </th>
                  <td className="px-6 py-4">{student.name}</td>
                  <td className="px-6 py-4">{student.surname}</td>
                  <td className="px-6 py-4">{student.class}</td>
                  <td className="px-6 py-4">{student.departmant}</td>
                  <td className="px-6 py-4">{student.birth_date}</td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href={"/student-detail/" + student.student_id}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      İncele
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default StudentList;

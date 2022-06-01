function StudentInfo(props) {
  return (
    <>
      <div className="p-4 w-full text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
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
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                {props.student.student_id}
              </th>
              <td className="px-6 py-4">{props.student.name}</td>
              <td className="px-6 py-4">{props.student.surname}</td>
              <td className="px-6 py-4">{props.student.class}</td>
              <td className="px-6 py-4">{props.student.departmant}</td>
              <td className="px-6 py-4">{props.student.birth_date}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default StudentInfo;

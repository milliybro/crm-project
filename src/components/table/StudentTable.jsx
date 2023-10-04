import { Table } from "react-bootstrap";
import PropTypes from "prop-types";
import StudentCard from "../card/StudentCard";
import { memo } from "react";

import "./Table.css"
const StudentTable = ({
  students,
  editStudent,
  deleteStudent,
  search,
  product,
  sort,
}) => {
  let results = students.filter(
    (student) =>
      student.productName.toLowerCase().includes(search)
  );
  if (sort !== "price") {
   if (sort === "increase") {
     results.sort((a, b) => (+a.price > +b.price ? 1 : -1));
   } else if (sort === "decrease") {
     results.sort((a, b) => (+a.price > +b.price ? -1 : 1));
   }
 }
  if (product !== "all") {
    results = results.filter((student) => student.product === product);
  }
  return (
    <Table striped bordered hover className="table">
      <thead className="thead">
        <tr>
          <th className="text-white">No</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Category</th>
          {/* <th>Decsroption</th> */}
          <th className="text-end">Actions</th>
        </tr>
      </thead>
      <tbody>
        {results.length !== 0 ? (
          results.map((student, i) => (
            <StudentCard
              {...student}
              key={student.id}
              order={i + 1}
              editStudent={editStudent}
              deleteStudent={deleteStudent}
            />
          ))
        ) : (
          <tr>
            <td className="text-center" colSpan={7}>
              No products
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

StudentTable.propTypes = {
  students: PropTypes.array,
  editStudent: PropTypes.func,
  deleteStudent: PropTypes.func,
  search: PropTypes.string,
  sort: PropTypes.string,
  product: PropTypes.string,
};

const MemoStudentTable = memo(StudentTable);

export default MemoStudentTable;

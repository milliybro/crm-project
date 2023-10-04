import PropTypes from "prop-types";

import edit from "../../assets/edit.png";
import deletes from "../../assets/delete.png"; 


const StudentCard = ({
  productName,
  price,
  quantity,
  product,
  order,
  id,
  editStudent,
  deleteStudent,
}) => {
  return (
    <tr>
      <td>{order}</td>
      <td>{productName}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{product}</td>
      {/* <td>{description}</td> */}
      <td className="text-end">
        <button
          className="btn btn-danger me-3"
          onClick={() => deleteStudent(id)}
        >
         <img src={deletes} alt="" /> Delete
        </button>
        <button className="btn btn-primary" onClick={() => editStudent(id)}>
        <img src={edit} alt="" />
          Edit
        </button>
      </td>
    </tr>
  );
};

StudentCard.propTypes = {
  productName: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  quantity: PropTypes.number,
  product: PropTypes.string,
  order: PropTypes.number,
  id: PropTypes.string,
  editStudent: PropTypes.func,
  deleteStudent: PropTypes.func,
};

export default StudentCard;

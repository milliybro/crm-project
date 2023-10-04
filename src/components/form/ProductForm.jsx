import { forwardRef, memo } from "react";
import PropTypes from "prop-types";
import { category } from "../../data/category";
import { Button, Form } from "react-bootstrap";

import "./Form.css"

const StudentForm = forwardRef(
  (
    {
      validated,
      handleSubmit,
      student: { productName, price, quantity, product },
      handleStudent,
      selected,
      resetStudent,
    },
    ref
  ) => {
    return (
      <Form noValidate validated={validated} onSubmit={handleSubmit} className="form">
        <Form.Group className="mb-3" controlId="productName">
          <Form.Label className="text-primary">Product Name</Form.Label>
          <Form.Control
            ref={ref}
            onChange={handleStudent}
            value={productName}
            required
            type="text"
          />
          <Form.Control.Feedback type="invalid">
            Please fill !
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="price">
          <Form.Label className="text-primary">Price</Form.Label>
          <Form.Control
            onChange={handleStudent}
            value={price}
            required
            type="number"
          />
          <Form.Control.Feedback type="invalid">
            Please fill !
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="quantity">
          <Form.Label className="text-primary">Quantity</Form.Label>
          <Form.Control
            onChange={handleStudent}
            value={quantity}
            required
            type="number"
          />
          <Form.Control.Feedback type="invalid">
            Please fill !
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="product">
          <Form.Label className="text-primary">Category</Form.Label>
          <Form.Select onChange={handleStudent} value={product}>
            {category.map((product) => (
              <option key={product} value={product}>
                {product}
              </option>
            ))}
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Please fill !
          </Form.Control.Feedback>
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="description">
          <Form.Label className="text-primary">Description</Form.Label>
          <Form.Control
            onChange={handleStudent}
            value={description}
            required
            type="text"
          />
          <Form.Control.Feedback type="invalid">
            Please fill !
          </Form.Control.Feedback>
        </Form.Group> */}
        <div className="d-flex justify-content-between">
          <Button className="mb-3 btn-danger" onClick={resetStudent}>
            Reset
          </Button>
          <Button className="mb-3" type="submit">
            {selected === null ? "Add" : "Save"} product
          </Button>
        </div>
      </Form>
    );
  }
);

StudentForm.displayName = "StudentForm";

StudentForm.propTypes = {
  validated: PropTypes.bool,
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  handleSubmit: PropTypes.func,
  student: PropTypes.object,
  handleStudent: PropTypes.func,
  resetStudent: PropTypes.func,
};

const MemoStudentForm = memo(StudentForm);

export default MemoStudentForm;

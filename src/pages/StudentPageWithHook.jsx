import { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import StudentForm from "../components/form/StudentForm";
import StudentHeader from "../components/header/StudentHeader";
import StudentTable from "../components/table/StudentTable";
import useCRUD from "../hooks/useCRUD";

const StudentsPageWithHook = () => {
  const firstNameRef = useRef();

  const {
    data: student,
    allData: students,
    selected,
    validated,
    resetForm: resetStudent,
    handleData: handleStudent,
    handleSubmit,
    editData: editStudent,
    deleteData: deleteStudent,
  } = useCRUD({
    localStorageKey: "students",
    initialData: {
      productName: "",
      price: "",
      quantity: "",
      description: "",
      product: "Fruits",
    },
    targetRef: firstNameRef,
  });

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("sort");
  const [product, setProduct] = useState("all");

  const studentFormProps = {
    selected,
    student,
    validated,
    resetStudent,
    handleStudent,
    handleSubmit,
  };

  const studentHeaderProps = {
    product,
    search,
    sort,
    setProduct,
    setSearch,
    setSort,
  };

  const studentTableProps = {
    product,
    search,
    students,
    sort,
    editStudent,
    deleteStudent,
  };

  return (
    <Container className="pt-3">
      <Row>
        <StudentHeader {...studentHeaderProps} />
        <Col md="4">
          <StudentForm ref={firstNameRef} {...studentFormProps} />
        </Col>
        <Col md="8">
          <StudentTable {...studentTableProps} />
        </Col>
      </Row>
    </Container>
  );
};

export default StudentsPageWithHook;

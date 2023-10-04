import { Form, InputGroup } from "react-bootstrap";

import PropTypes from "prop-types";
import { memo } from "react";
import { category } from "../../data/category";

import "./Header.css";
import cart from "../../assets/shopping-cart.png";
import searcha from "../../assets/search.png";
const StudentHeader = ({
  setSearch,
  search,
  product,
  setProduct,
  sort,
  setSort,
}) => {
  return (
    <div className="header">
      <div className="logo">
        <h2>
          <img src={cart} alt="" />
          Milliy Market{" "}
        </h2>
      </div>
      <div>
        <InputGroup className="inputgroup">
          <InputGroup.Text className="sort">
            <Form.Select className="sortin" value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="price">Price</option>
              <option value="increase">Increase</option>
              <option value="decrease">Decrease</option>
            </Form.Select>
          </InputGroup.Text>
          <div className="qidiruv">
          <img className="searcha" src={searcha} alt="" />
          <Form.Control
            className="search"
            value={search}
            onChange={(e) => setSearch(e.target.value.trim().toLowerCase())}
            placeholder="Searching product"
          />
          </div>
          <InputGroup.Text className="sort">
            <Form.Select
            className="sortin"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            >
              <option value="all">All Products</option>
              {category.map((product) => (
                <option key={product} value={product}>
                  {product}
                </option>
              ))}
            </Form.Select>
          </InputGroup.Text>
        </InputGroup>
      </div>
    </div>
  );
};

StudentHeader.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
  product: PropTypes.string,
  setProduct: PropTypes.func,
  sort: PropTypes.string,
  setSort: PropTypes.func,
};

const MemoStudentHeader = memo(StudentHeader);

export default MemoStudentHeader;

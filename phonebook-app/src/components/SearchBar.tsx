import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";

interface SearchBarProps {
  onSearch: (keyword: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = event.target.value;
    setSearchKeyword(keyword);
    onSearch(keyword);
  };

  const onSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <Col sm={12}>
      <Form className="d-flex" onSubmit={onSubmit}>
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          value={searchKeyword}
          onChange={handleInputChange}
        />
      </Form>
    </Col>
  );
};

export default SearchBar;

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Card from "react-bootstrap/Card";
import { Button, InputGroup, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Pagination } from "antd";
import swal from "sweetalert";
import Modal from "react-bootstrap/Modal";
import { useRouter } from "next/router";

export default function Posts(props) {
  const [posts, setposts] = useState([]);
  const [title, settitle] = useState("");
  const [Description, setDescription] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setloading] = useState(true);
  const [paginatedPosts, setPaginatedPosts] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const totalPages = Math.ceil(posts.length / 5);
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  const handleSearch = (event) => {
    const newSearchTerm = event.target.value.toLowerCase();
    if (newSearchTerm !== "") {
      const filteredResults = posts.filter((item) =>
        item.title.toLowerCase().includes(newSearchTerm)
      );
      setSearchResults(filteredResults);
    } else {
      setSearchResults(posts);
      setPaginatedPosts(currentRecords);
    }
    setSearchTerm(newSearchTerm);
  };
  const currentRecords = searchResults.slice(
    (currentPage - 1) * 5,
    currentPage * 5
  );

  async function GetPosts() {
    setloading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    const currentRecords = data.slice((currentPage - 1) * 5, currentPage * 5);
    setSearchResults(data);
    setPaginatedPosts(currentRecords);
    setposts(data);
    setloading(false);
  }

  useEffect(() => {
    GetPosts();
  }, []);

  useEffect(() => {
    setloading(true);
    setPaginatedPosts(currentRecords);
    setloading(false);
  }, [currentPage, searchTerm]);

  return (
    <div>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="form-heading"> Title</Form.Label>
              <Form.Control
                value={title}
                type="title"
                onChange={(e) => settitle(e.target.value)}
                placeholder="Enter Post Title"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="form-heading">Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={Description}
                type="Description"
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter Post Description"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="update-btn" onClick={() => setModalShow(false)}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="post-banner-main-div">
        <div className="d-flex flex-column align-items-center justify-content-center homepage-main-div">
          <div className="banner-div">
            <div className="d-flex flex-column align-items-center">
              <span className="post-heading">Posts</span>
              <span
                onClick={() => router.push(`/`)}
                className="post-breadcrump"
              >
                {"Home >> Posts"}
              </span>
            </div>
          </div>
          <Image
            height="0"
            width="0"
            className="home-bg-image "
            unoptimized
            src="/assets/postbanner.png"
          />
        </div>
      </div>

      <div className="posts-section">
        <Card className="posts-card">
          <Card.Body>
            <h5 className="post-name">David John</h5>
            <h6 className="post-email">john@example.com</h6>
            <hr />
            <Button className="post-button mt-4">
              <Image width={15} height={15} src={"/assets/stack.png"} />
              <span className="ms-2">Posts</span>
            </Button>
          </Card.Body>
        </Card>
        <Card className="posts-table">
          <div className="table-head-bar">
            <h6 className="post-table-title">Posts</h6>
            <InputGroup className="search-input">
              <InputGroup.Text id="basic-addon1">
                {" "}
                <Image
                  width={18}
                  height={15}
                  src={"/assets/search.png"}
                  unoptimized
                />
              </InputGroup.Text>
              <Form.Control
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </div>
          <hr />
          <Table responsive size="lg" hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {!loading ? (
                paginatedPosts.map((d, i) => (
                  <tr key={i}>
                    <td onClick={() => router.push(`/post/${d.id}`)}>
                      <span className="table-id">{d.id}</span>
                    </td>
                    <td onClick={() => router.push(`/post/${d.id}`)}>
                      {d.title}
                    </td>
                    <td onClick={() => router.push(`/post/${d.id}`)}>
                      <span className="">{d.body}</span>
                    </td>
                    <td>
                      <div className="d-flex">
                        <Image
                          className="actions-btns"
                          width={20}
                          height={20}
                          onClick={() => {
                            settitle(d.title);
                            setDescription(d.body);
                            setModalShow(true);
                          }}
                          src={"/assets/edit.png"}
                          unoptimized
                        />
                        <Image
                          onClick={() => {
                            swal({
                              title: "Delete blog post",
                              text: "Are you sure you want to delete this post? This action cannot be undone.",
                              buttons: true,
                              dangerMode: true,
                            }).then(async (willDelete) => {
                              if (willDelete) {
                                const response = await fetch(
                                  `https://jsonplaceholder.typicode.com/posts/${d.id}`,
                                  {
                                    method: "DELETE",
                                  }
                                );
                                let result = await response.json();
                                console.log(result);
                              }
                            });
                          }}
                          className="actions-btns ms-2"
                          width={20}
                          height={20}
                          src={"/assets/trash.png"}
                          unoptimized
                        />
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>
                    <div class="shimmer mt-5"></div>
                  </td>
                  <td>
                    <div class="shimmer mt-5"></div>
                  </td>
                  <td>
                    <div class="shimmer mt-5"></div>
                  </td>
                  <td>
                    <div class="shimmer mt-5"></div>
                  </td>
                </tr>
              )}
            </tbody>
          </Table>

          <Pagination
            pageSize={5}
            current={currentPage}
            onChange={(e) => handlePageChange(e)}
            defaultCurrent={1}
            total={posts.length}
          />
        </Card>
      </div>
    </div>
  );
}

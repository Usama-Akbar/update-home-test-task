import React, { useEffect, useState } from "react";
import Image from "next/image";
import Card from "react-bootstrap/Card";
import { Button, InputGroup, Form } from "react-bootstrap";
import { useRouter } from "next/router";

export default function Posts() {
  const [id, setid] = useState("");
  const [post, setpost] = useState();
  const router = useRouter();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    let ID = window.location.href.split("post/")[1];
    setid(ID);
  }, [null]);

  async function GetSpecificPost() {
    setloading(true);
    if (id !== "") {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const data = await response.json();
      setpost(data);
      setloading(false);
    }
  }

  useEffect(() => {
    GetSpecificPost();
  }, [id]);
  return (
    <div>
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
          <div className="d-flex align-items-center">
            <Image
              onClick={() => router.push("/Posts")}
              width={25}
              height={25}
              className="actions-btns"
              src={"/assets/arrow-left.png"}
              unoptimized
            />{" "}
            <span className="post-table-title ms-3">Posts</span>
          </div>
          <hr />
          <Card.Body>
            {loading ? (
              <div class="shimmer"></div>
            ) : (
              <h4 className="post-title-heading">{post.title}</h4>
            )}
            {loading ? (
              <div class="shimmer mt-5"></div>
            ) : (
              <span className="post-title-description">{post.body}</span>
            )}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

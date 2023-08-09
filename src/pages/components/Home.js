import React from "react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Heading,
} from "@chakra-ui/react";
import Footer from "./Footer";
export default function HomePage() {
  return (
    <div>
      <div className="d-flex justify-content-center homepage-main-div">
        <div className="title-div">
          <div className="d-flex flex-column">
            {" "}
            <span className="first-heading">Free changes for life.</span>
            <span className="sec-heading">
              Hand-Made Website for Your Business.
            </span>
            <button className="book-btn"> {`>> Book Call`}</button>
          </div>
          <div>
            <Image
              width="0"
              height="0"
              className="mobile-holding-image"
              unoptimized
              src={"/assets/mobile.png"}
            />
          </div>
        </div>
        <Image
          height="0"
          width="0"
          className="home-bg-image"
          unoptimized
          src="/assets/car.png"
        />
      </div>
      <div className="card-div p-5">
        <div className="d-flex services-card">
          <Image
            className="card-image"
            width="0"
            height="0"
            unoptimized
            src={"/assets/dollar-sign.png"}
          />
          <div className="d-flex flex-column">
            <span className="card-first-heading">Best Price Guaranteed</span>
            <span className="card-sec-heading mt-1">
              A more recently with desktop softy like aldus page maker.{" "}
            </span>
          </div>
        </div>
        <div className="d-flex services-card">
          <Image
            width="0"
            className="card-image"
            height="0"
            unoptimized
            src={"/assets/headphones.png"}
          />
          <div className="d-flex flex-column">
            <span className="card-first-heading">24/7 Customer Care</span>
            <span className="card-sec-heading mt-1">
              A more recently with desktop softy like aldus page maker.{" "}
            </span>
          </div>
        </div>
        <div className="d-flex services-card">
          <Image
            className="card-image"
            width="0"
            height="0"
            unoptimized
            src={"/assets/home.png"}
          />
          <div className="d-flex flex-column">
            <span className="card-first-heading">Home Pickups</span>
            <span className="card-sec-heading mt-1">
              A more recently with desktop softy like aldus page maker.{" "}
            </span>
          </div>
        </div>
        <div className="d-flex services-card">
          <Image
            width="0"
            height="0"
            className="card-image"
            unoptimized
            src={"/assets/calendar.png"}
          />
          <div className="d-flex flex-column">
            <span className="card-first-heading">Easy Bookings</span>
            <span className="card-sec-heading mt-1">
              A more recently with desktop softy like aldus page maker..{" "}
            </span>
          </div>
        </div>
      </div>
      <hr />
      <div className="d-flex align-items-center justify-content-around mobile-services-div mt-5">
        <div className="mid-desc-div">
          <h5 className="qoute-desc-one">Like always. Like never before.</h5>
          <h3 className="qoute-desc-two">
            Bespoke Software & Digital Transformation.
          </h3>
          <h6 className="qoute-desc-three">
            By automating processes and tasks, businesses can reduce costs and
            improve productivity. Additionally, custom software tailored to the
            specific needs of a business can give them a significant advantage
            over their competitors.
          </h6>
          <h6 className="qoute-desc-three mt-4">
            Our software development agency has a team of experienced and
            skilled professionalswho can create custom software solutions for
            your business. We understand the unique requirements of each
            business and create tailor-made solutions that can help them achieve
            their goals.
          </h6>
          <button className="book-btn"> {`Get a Quote`}</button>
          <Image
            width="0"
            height="0"
            className="quote-item-image mt-3"
            unoptimized
            src={"/assets/List.png"}
          />
        </div>
        <div className="video-image-div">
          <Image
            width="0"
            height="0"
            className="video-image"
            unoptimized
            src={"/assets/video.png"}
          />
        </div>
      </div>
      <div className="d-flex flex-column align-items-center homepage-main-div mt-5">
        <div className="deals-div">
          <div className="d-flex flex-column align-items-center">
            {" "}
            <span className="sec-heading">Deals on Booking</span>
            <span className="book-sec-heading">
              Lorem Ipsum passages, and more recently with desktop publishing
              software and applications like aldus pageMaker which has different
              variations.
            </span>
            <div className="d-flex three-city-images mt-5">
              <Image
                height="0"
                width="0"
                unoptimized
                className="deals-image"
                src={"/assets/Figure.png"}
              />
              <Image
                height="0"
                width="0"
                unoptimized
                className="deals-image"
                src={"/assets/Figure1.png"}
              />
              <Image
                height="0"
                width="0"
                unoptimized
                className="deals-image"
                src={"/assets/Figure2.png"}
              />
            </div>
          </div>
        </div>
        <Image
          height="0"
          width="0"
          className="street-bg-image "
          unoptimized
          src="/assets/street.png"
        />
      </div>

      <div className="main-services-div">
        <div className="services-desc-div">
          <h3 className="qoute-desc-two">Our Services</h3>
          <span className="qoute-desc-three mt-4">
            Lorem Ipsum passages, and more recently with desktop publishing
            software like aldus pageMaker including versions.
          </span>
        </div>
        <div className="services-card-div">
          <Card maxW="sm">
            <CardBody padding={0}>
              <Image
                width={500}
                height={500}
                className="service-card-image"
                src="/assets/drink.png"
                alt="Green double couch with wooden legs"
              />
              <Stack padding={5} textAlign={"center"} mt="6" spacing="3">
                <Heading
                  fontFamily={"Montserrat"}
                  fontWeight={"500"}
                  fontSize={"22"}
                >
                  Restaurants
                </Heading>
                <Text>
                  A more recently with desktop softy like aldus page maker.
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card maxW="sm">
            <CardBody padding={0}>
              <Image
                width={500}
                height={500}
                className="service-card-image"
                src="/assets/plane.png"
                alt="Green double couch with wooden legs"
              />
              <Stack padding={5} textAlign={"center"} mt="6" spacing="3">
                <Heading
                  fontFamily={"Montserrat"}
                  fontWeight={"500"}
                  fontSize={"22"}
                >
                  Airports
                </Heading>
                <Text>
                  A more recently with desktop softy like aldus page maker.
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card maxW="sm">
            <CardBody padding={0}>
              <Image
                width={500}
                height={500}
                className="service-card-image"
                src="/assets/medicine.png"
                alt="Green double couch with wooden legs"
              />
              <Stack padding={5} textAlign={"center"} mt="6" spacing="3">
                <Heading
                  fontFamily={"Montserrat"}
                  fontWeight={"500"}
                  fontSize={"22"}
                >
                  Hospitals
                </Heading>
                <Text>
                  A more recently with desktop softy like aldus page maker.
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card maxW="sm">
            <CardBody padding={0}>
              <Image
                width={500}
                height={500}
                className="service-card-image"
                src="/assets/tree.png"
                alt="Green double couch with wooden legs"
              />
              <Stack padding={5} textAlign={"center"} mt="6" spacing="3">
                <Heading
                  fontFamily={"Montserrat"}
                  fontWeight={"500"}
                  fontSize={"22"}
                >
                  Beaches
                </Heading>
                <Text>
                  A more recently with desktop softy like aldus page maker.
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card maxW="sm">
            <CardBody padding={0}>
              <Image
                width={500}
                height={500}
                className="service-card-image"
                src="/assets/wallet.png"
                alt="Green double couch with wooden legs"
              />
              <Stack padding={5} textAlign={"center"} mt="6" spacing="3">
                <Heading
                  fontFamily={"Montserrat"}
                  fontWeight={"500"}
                  fontSize={"22"}
                >
                  Shopping Malls
                </Heading>
                <Text>
                  A more recently with desktop softy like aldus page maker.
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card maxW="sm">
            <CardBody padding={0}>
              <Image
                width={500}
                height={500}
                className="service-card-image"
                src="/assets/camera.png"
                alt="Green double couch with wooden legs"
              />
              <Stack padding={5} textAlign={"center"} mt="6" spacing="3">
                <Heading
                  fontFamily={"Montserrat"}
                  fontWeight={"500"}
                  fontSize={"22"}
                >
                  Wedding Parties
                </Heading>
                <Text>
                  A more recently with desktop softy like aldus page maker.
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </div>
      </div>

      <div className="d-flex flex-column align-items-center justify-content-center homepage-main-div mt-5">
        <div className="banner-div">
          <div className="d-flex align-items-center">
            <span className="banner-heading">
              Incredible Destinations at Incredible Deals
            </span>
            <button className="book-btn-new"> {`>> Book Call`}</button>
          </div>
        </div>
        <Image
          height="0"
          width="0"
          className="footer-baner-bg-image "
          unoptimized
          src="/assets/banner.png"
        />
      </div>
    </div>
  );
}

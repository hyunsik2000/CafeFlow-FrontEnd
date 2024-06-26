import "../App.css";
import { Card, CardBody, Carousel, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function MainSection() {
  const navigate = useNavigate();

  return (
    <>
      <Carousel interval={3000}>
        <Carousel.Item>
          <Card className="custom-card" style={{ backgroundColor: "#43f770" }}>
            <CardBody className="custom-card-body">
              <div className="text-container">
                <p className="card-title-custom">
                  실시간 카페
                  <br />
                  좌석을 확인!
                </p>
                <p className="card-text-custom">
                  가고싶은 카페의 실시간 남은 자리를 확인
                </p>
                <Button
                  className="card-button"
                  onClick={() => {
                    navigate("/location");
                  }}
                  style={{
                    fontFamily: "'Nanum Gothic', 'sans-serif'",
                    fontSize: "20px",
                    backgroundColor: "white",
                    color: "black",
                    borderColor: "white",
                  }}
                >
                  지금 보러가기 👉
                </Button>
              </div>
              <img
                src="/img/main_pic2.png"
                className="custom-image"
                alt="first pic"
              />
            </CardBody>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card className="custom-card" style={{ backgroundColor: "#43dcf7" }}>
            <CardBody className="custom-card-body">
              <div className="text-container">
                <p className="card-title-custom">
                  언제 어디서든 <br /> 편하게 주문!
                </p>
                <p className="card-text-custom">
                  어디서나 편하게 비대면으로 주문
                </p>
                <Button
                  className="card-button"
                  onClick={() => {
                    navigate("/order/orderlist");
                  }}
                  style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: "20px",
                    fontWeight: 400,
                    backgroundColor: "white",
                    color: "black",
                    borderColor: "white",
                  }}
                >
                  지금 주문하기 👉
                </Button>
              </div>
              <img
                src="/img/main_pic1.png"
                className="custom-image"
                alt="second pic"
              />
            </CardBody>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card className="custom-card" style={{ backgroundColor: "#4D5152" }}>
            <CardBody className="custom-card-body">
              <div className="text-container">
                <p className="card-title-custom" style={{ color: "white" }}>
                  최애 카페를
                  <br /> 함께 공유!
                </p>
                <p className="card-text-custom" style={{ color: "white" }}>
                  사람들에게 알리고 싶은 나만의 최애 카페를 공유
                </p>
                <Button
                  className="card-button"
                  onClick={() => {
                    navigate("/community");
                  }}
                  style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: "20px",
                    fontWeight: 400,
                    backgroundColor: "white",
                    color: "black",
                    borderColor: "white",
                  }}
                >
                  지금 하러가기 👉
                </Button>
              </div>
              <img
                src="/img/main_pic3.png"
                className="custom-image"
                alt="third pic"
              />
            </CardBody>
          </Card>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default MainSection;

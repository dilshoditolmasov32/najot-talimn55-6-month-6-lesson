import axios from "../../../api";
import { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";

const Payments = () => {
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    axios
      .get("/users")
      // .then((res) => console.log(res.data.users[0]))
      .then((res) => setCardData(res.data.users))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Users</h1>
      <div className="container">
        <div className="row">
          {cardData.map((card) => (
            <div className="col-md-4 mb-4" key={card.id}>
              <div className="card">
                <div
                  className="card-img-top d-flex justify-content-center align-items-center"
                  style={{ height: "150px" }}
                >
                  <FaRegUser size="3em" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    FullName: 
                    {card.firstName} {card.lastName}
                  </h5>
                  <p className="card-text"> Phone: {card.phone}</p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Payments;

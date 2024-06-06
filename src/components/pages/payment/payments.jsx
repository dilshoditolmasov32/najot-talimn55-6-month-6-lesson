import axios from "axios";
import { useEffect, useState } from "react";
import user from "../../../assets/images/user.jpg";
import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Payments = () => {
  const [cardData, setCardData] = useState([]);
  const [page, setPage] = useState(1);

  const handlePrev = () => {
    page > 1 ? setPage((page) => page - 1) : <></>;
  };

  const handleNext = () => setPage((page) => page + 1);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/users?limit=3&skip=${(page - 1) * 3}`)
      .then((res) => setCardData(res.data.users))
      .catch((err) => console.log(err));
  }, [page]);

  return (
    <>
      <h1 style={{ color: "#252120", marginLeft: 20 }}>Users</h1>
      <div className="container">
        <div className="row">
          {cardData.map((card) => (
            <div className="col-md-4 mb-4" key={card.id}>
              <div className="card">
                <div>
                  <img
                    src={user}
                    alt="User_photo"
                    style={{
                      width: "100%",
                      outline: "hidden",
                      borderRadius: 6,
                    }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <small>FullName</small>: <br />
                    {card.firstName} {card.lastName}
                  </h5>

                  <p className="card-text"> Phone: {card.phone}</p>
                  <h6> City: {card.address.city}</h6>
                  <a href="#" className="btn btn-primary">
                    More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="d-flex justify-content-end align-items-center gap-2 mr-4">
        <button className="btn btn-outline-dark" onClick={handlePrev}>
          orqaga
        </button>
        <h2>{page}</h2>
        <button className="btn btn-outline-success" onClick={handleNext}>
          keyingisi
        </button>
      </div>
    </>
  );
};

export default Payments;

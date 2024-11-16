import { CURRENTLINE, CYAN, ORANGE, PURPLE, RED } from "../../helpers/colors";
import React, { useEffect } from "react";
import https from "../../utils/https";
// import { toast } from "react-toastify";
const Contact = ({ contact, setCantacts }) => {
  const handleGetContacts = async () => {
    try {
      const { data } = await https.get("/category");
      if (data.success == true) {
        console.log("enter if");
        await setCantacts(data?.categories);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (_id) => {
    const { data } = await https.delete(`/category/${_id}`);
    if (data.success == true) {
      // toast.success(data.message);
      console.log("enter");

      await handleGetContacts();
    } else {
      // toast.error(data.message);
    }
  };

  return (
    <div className="col-md-6">
      <div style={{ backgroundColor: CURRENTLINE }} className="card my-2">
        <div className="card-body">
          <div className="row align-items-center d-flex justify-content-around">
            <div className="col-md-4 col-sm-4">
              <img
                // src={`https://test.api.tiademco.com/api/v1/${contact?.gallery.find(item=>item.show=="thumb").pathFile}`}
                src={contact?.url}
                alt=""
                style={{ border: `1px solid ${PURPLE}` }}
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-7 col-sm-7">
              <ul className="list-group">
                <li className="list-group-item list-group-item-dark">
                  نام و نام خانوداگی :{"  "}
                  <span className="fw-bold">{contact?.name}</span>
                </li>

                <li className="list-group-item list-group-item-dark">
                  شماره موبایل :{"  "}
                  <span className="fw-bold">{contact?.price}</span>
                </li>

                <li className="list-group-item list-group-item-dark">
                  آدرس ایمیل :{"  "}
                  <span className="fw-bold">{}</span>
                </li>
              </ul>
            </div>
            <div className="col-md-1 col-sm-1 d-flex flex-column align-items-center">
              <button className="btn my-1" style={{ backgroundColor: ORANGE }}>
                <i className="fa fa-eye" />
              </button>

              <button className="btn my-1" style={{ backgroundColor: CYAN }}>
                <i className="fa fa-pagelines" />
              </button>
              <button
                onClick={() => handleDelete(contact._id)}
                className="btn my-1"
                style={{ backgroundColor: RED }}
              >
                <i className="fa fa-trash" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

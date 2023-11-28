import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

function OrderHistory() {
  const { data, loading, error } = useQuery(QUERY_USER);
  const [user, setUser] = useState({});

  useEffect(() => {
    if (loading) return;
    setUser(data.user);
  }, [data]);

  return (data) ? (
    <>
    <div className="orderHistory">
      <div className="d-flex justify-content-md-center align-content-between flex-wrap">
        <h2 className="page-header border-bottom border-dark">
            Order History for {user.firstName} {user.lastName}
        </h2>
      </div>
           <div className="d-flex justify-content-md-center align-content-between flex-wrap"> 
        {user.orders ? (
          <>
          
            {user.orders.map((order) => (
              <div key={order._id} className="my-2">
                <h3 className="checkOutInfo">
                  {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                </h3>
                <div
                  className="col d-flex justify-content-center flex-wrap mb-5"
                >
                  {order.meals.map(({ _id, image, name, price }, index) => (
                    <div key={index} className="card">
                      <Link to={`/meals/${_id}`}>
                        <img
                          alt={name}
                          src={`/images/${image}`}
                          className="card-image"
                        />
                        </Link>
                        <div className="cardActions">
                          <h4>{name}
                            <div className="cardActions">
                              <span>${price}</span>
                            </div>
                            </h4>
                        </div>
                      </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : null}
      </div>
      </div>
    </>
  ) : (
    <h1>loading</h1>
  );
}

export default OrderHistory;

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
      <div className="container my-1">
        <Link to="/">← Back to Menu</Link>

        {user.orders ? (
          <>
            <h2>
              Order History for {user.firstName} {user.lastName}
            </h2>
            {user.orders.map((order) => (
              <div key={order._id} className="my-2">
                <h3>
                  {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                </h3>
                <div
                  className="d-flex justify-content-md-center align-content-between flex-wrap"
                  style={{ textAlign: "center" }}
                >
                  {order.meals.map(({ _id, image, name, price }, index) => (
                    <div key={index} className="card p-1">
                      <Link to={`/meals/${_id}`}>
                        <img
                          alt={name}
                          src={`/images/${image}`}
                          className="card-image"
                        />
                        <p>{name}</p>
                      </Link>
                      <div>
                        <span>${price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : null}
      </div>
    </>
  ) : (
    <h1>loading</h1>
  );
}

export default OrderHistory;

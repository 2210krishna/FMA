import React, { useEffect, useState } from "react";
import './AdminOrders.css';

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);

  // Fetch all orders
  const fetchOrders = () => {
    fetch("http://localhost:5001/orders/all")
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // Update status to FINISHED
  const updateStatus = (id) => {
    fetch(`http://localhost:5001/orders/update-status/${id}?status=FINISHED`, {
      method: "PUT",
    })
      .then(() => fetchOrders())
      .catch((err) => console.error(err));
  };

  return (
    <div className="p-4">
      <h2>All Orders</h2>
      {orders.length > 0 ? (
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>Vendor Email</th>
              <th>Spice</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.vendorEmail}</td>
                <td>{order.spiceName}</td>
                <td>{order.quantity}</td>
                <td>{order.status}</td>
                <td>
                  {order.status !== "FINISHED" && (
                    <button onClick={() => updateStatus(order.id)}>
                      Mark as Finished
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No orders available.</p>
      )}
    </div>
  );
}

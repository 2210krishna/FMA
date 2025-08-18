import React, { useEffect, useState } from "react";

export default function VendorOrders() {
  const [spiceName, setSpiceName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [orders, setOrders] = useState([]);
  const email = localStorage.getItem("email"); // vendor email from login

  // Place a new order
  const handleOrder = (e) => {
    e.preventDefault();

    fetch("http://localhost:5001/orders/place", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        vendorEmail: email,
        spiceName,
        quantity,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Order placed successfully!");
        setSpiceName("");
        setQuantity("");
        fetchOrders();
      })
      .catch((err) => console.error(err));
  };

  // Fetch vendor's orders
  const fetchOrders = () => {
    fetch(`http://localhost:5001/orders/my-orders/${email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchOrders();
  }, [email]);

  return (
    <div className="p-4">
      <h2>Place an Order</h2>
      <form onSubmit={handleOrder}>
        <input
          type="text"
          placeholder="Spice Name"
          value={spiceName}
          onChange={(e) => setSpiceName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
        <button type="submit">Place Order</button>
      </form>

      <h2 className="mt-4">My Orders</h2>
      {orders.length > 0 ? (
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>Spice</th>
              <th>Quantity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.spiceName}</td>
                <td>{order.quantity}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No orders yet.</p>
      )}
    </div>
  );
}

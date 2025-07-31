import { useEffect, useState } from "react";

const DashboardMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/contacts")
      .then((res) => res.json())
      .then((data) => setMessages(data.contacts));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">User Messages</h2>
      <div className="space-y-4">
        {messages.map((msg, i) => (
          <div key={i} className="border p-4 rounded shadow bg-white">
            <p><strong>Name:</strong> {msg.name}</p>
            <p><strong>Email:</strong> {msg.email}</p>
            <p><strong>Message:</strong> {msg.message}</p>
            <p className="text-sm text-gray-500">
              {new Date(msg.date).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardMessages;

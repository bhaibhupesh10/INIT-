import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./styles/Contact.css";

const Contact = () => {
  const [senderName, setSenderName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleMessage = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        "https://init-student-backend.onrender.com/api/v1/message/send",
        { senderName, subject, message },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(res.data.message);
      setSenderName("");
      setSubject("");
      setMessage("");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        {/* <h1>Contact Me</h1> */}
        {/* <span className="header-line"></span> */}
      </div>
      <form onSubmit={handleMessage} className="contact-form">
        <div className="form-group">
          <label>Your Name</label>
          <input
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
            placeholder="Your Name"
          />
        </div>
        <div className="form-group">
          <label>Subject</label>
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
          />
        </div>
        <div className="form-group">
          <label>Message</label>
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
          />
        </div>
        <div className="form-actions">
          {!loading ? (
            <button type="submit" className="send-button">Send Message</button>
          ) : (
            <button disabled className="loading-button">
              Sending...
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Contact;

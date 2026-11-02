import { useState } from "react";
import { Link } from "react-router-dom";

function Chatbot() {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! 👋 I'm your NextGen Property Assistant. How can I help you find the right property?",
    },
  ]);

  const sendMessage = () => {
    if (!message.trim()) {
      return;
    }

    const userMessage = {
      sender: "user",
      text: message,
    };

    setMessages((previousMessages) => [
      ...previousMessages,
      userMessage,
    ]);

    const userQuestion = message.toLowerCase();

    let reply =
      "I'm here to help! You can ask me about properties, plots, prices, locations or bookings.";

    if (
      userQuestion.includes("price") ||
      userQuestion.includes("cost")
    ) {
      reply =
        "Property prices depend on the location and plot size. You can check the Projects page to compare available properties and prices.";
    } else if (
      userQuestion.includes("plot")
    ) {
      reply =
        "You can select a property, open its plot layout and choose an available plot that matches your requirements.";
    } else if (
      userQuestion.includes("location")
    ) {
      reply =
        "We currently have properties in locations such as Mysore, Bangalore, Tirupati, Coimbatore and Hubli.";
    } else if (
      userQuestion.includes("book") ||
      userQuestion.includes("booking")
    ) {
      reply =
        "To book a property, select a property, choose an available plot and submit your booking details.";
    } else if (
      userQuestion.includes("hello") ||
      userQuestion.includes("hi")
    ) {
      reply =
        "Hello! 👋 How can I help you with your property search today?";
    }

    setMessage("");

    setTimeout(() => {
      setMessages((previousMessages) => [
        ...previousMessages,
        {
          sender: "bot",
          text: reply,
        },
      ]);
    }, 500);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const askQuestion = (question) => {
    setMessage(question);
  };

  return (
    <div className="chatbot-page">

      {/* HEADER */}
      <section className="chatbot-header">

        <Link
          to="/"
          className="chatbot-back"
        >
          ← Back to Home
        </Link>

        <span className="chatbot-label">
          AI PROPERTY ASSISTANT
        </span>

        <h1>
          How Can We Help You?
        </h1>

        <p>
          Ask our smart property assistant about
          properties, plots, prices and bookings.
        </p>

      </section>


      {/* CHAT CONTAINER */}
      <section className="chatbot-container">

        {/* CHAT HEADER */}
        <div className="chatbot-top">

          <div className="chatbot-avatar">
            🤖
          </div>

          <div>
            <h2>
              NextGen Property Assistant
            </h2>

            <p>
              <span className="online-dot"></span>
              Online
            </p>
          </div>

        </div>


        {/* MESSAGES */}
        <div className="chatbot-messages">

          {messages.map((item, index) => (

            <div
              key={index}
              className={`chat-message ${
                item.sender === "user"
                  ? "user-message"
                  : "bot-message"
              }`}
            >

              {item.sender === "bot" && (
                <div className="message-avatar">
                  🤖
                </div>
              )}

              <div className="message-bubble">
                {item.text}
              </div>

            </div>

          ))}

        </div>


        {/* SUGGESTED QUESTIONS */}
        <div className="chatbot-suggestions">

          <span>
            Try asking:
          </span>

          <button
            onClick={() =>
              askQuestion("What properties are available?")
            }
          >
            🏠 Available properties
          </button>

          <button
            onClick={() =>
              askQuestion("What is the price of the plots?")
            }
          >
            💰 Property prices
          </button>

          <button
            onClick={() =>
              askQuestion("Which locations are available?")
            }
          >
            📍 Locations
          </button>

          <button
            onClick={() =>
              askQuestion("How can I book a plot?")
            }
          >
            📋 How to book
          </button>

        </div>


        {/* INPUT */}
        <div className="chatbot-input-area">

          <input
            type="text"
            placeholder="Ask about properties, plots, prices..."
            value={message}
            onChange={(e) =>
              setMessage(e.target.value)
            }
            onKeyDown={handleKeyDown}
          />

          <button
            onClick={sendMessage}
            className="chatbot-send"
          >
            Send ➤
          </button>

        </div>

      </section>


      {/* BOTTOM INFO */}
      <section className="chatbot-info">

        <div>
          <span>🏠</span>

          <div>
            <h3>
              Property Search
            </h3>

            <p>
              Find properties based on your needs.
            </p>
          </div>
        </div>

        <div>
          <span>💰</span>

          <div>
            <h3>
              Price Information
            </h3>

            <p>
              Get information about property prices.
            </p>
          </div>
        </div>

        <div>
          <span>📋</span>

          <div>
            <h3>
              Booking Help
            </h3>

            <p>
              Get guidance through the booking process.
            </p>
          </div>
        </div>

      </section>

    </div>
  );
}

export default Chatbot;
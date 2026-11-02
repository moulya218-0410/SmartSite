exports.chatbotReply = async (req, res) => {
    const { message } = req.body;

    let reply = "Sorry, I didn't understand your question.";

    if (message.toLowerCase().includes("project")) {
        reply = "We have multiple residential projects available.";
    }
    else if (message.toLowerCase().includes("booking")) {
        reply = "You can book a plot through the booking section.";
    }
    else if (message.toLowerCase().includes("payment")) {
        reply = "We support UPI, Card, Net Banking and Cash payments.";
    }
    else if (message.toLowerCase().includes("document")) {
        reply = "Please upload Aadhaar, PAN and required property documents.";
    }

    res.status(200).json({
        userMessage: message,
        botReply: reply
    });
};
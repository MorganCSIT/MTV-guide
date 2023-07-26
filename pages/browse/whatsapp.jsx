import React from "react";

const WhatsAppContact = () => {
  const handleClick = () => {
    // The pre-filled message in the WhatsApp chat.
    const message = "Hi, this is Morgan from MTV.";
    // This is a phone number in the international format.
    const phone = "1234567890"; // Replace this with your phone number.

    // The WhatsApp API URL.
    const apiURL = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    // Open the WhatsApp app or, on desktop, the WhatsApp web interface.
    window.open(apiURL, "_blank");
  };

  return <button onClick={handleClick}>Add me on WhatsApp</button>;
};

export default WhatsAppContact;

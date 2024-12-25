import React, { useState } from "react";

const App = () => {
  const [markdown, setMarkdown] = useState("");

  // Basic Markdown to HTML Parser
  const parseMarkdown = (text) => {
    const bold = /\*\*(.*?)\*\*/g; // **bold**
    const italic = /\*(.*?)\*/g; // *italic*
    const headers = /^#{1,6}\s(.*)$/gm; // # Header
    const links = /\[(.*?)\]\((.*?)\)/g; // [link](url)

    return text
      .replace(headers, (match, p1) => `<h1>${p1}</h1>`)
      .replace(bold, (match, p1) => `<strong>${p1}</strong>`)
      .replace(italic, (match, p1) => `<em>${p1}</em>`)
      .replace(
        links,
        (match, p1, p2) => `<a href="${p2}" target="_blank">${p1}</a>`
      );
  };

  return (
    <div
      className="app"
      data-testid="app"
      style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}
    >
      <h1>Markdown Previewer</h1>
      <textarea
        style={{
          width: "100%",
          height: "150px",
          marginBottom: "20px",
          fontSize: "16px",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
        placeholder="Write your Markdown here..."
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <div
        className="preview"
        data-testid="preview"
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          minHeight: "150px",
          backgroundColor: "#f9f9f9",
          borderRadius: "5px",
        }}
        dangerouslySetInnerHTML={{ __html: parseMarkdown(markdown) }}
      />
    </div>
  );
};

export default App;

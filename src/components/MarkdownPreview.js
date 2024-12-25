import React from "react";
import { marked } from "marked";

const MarkdownPreview = ({ markdown }) => {
  const renderMarkdown = () => {
    return { __html: marked(markdown) };
  };

  return (
    <div className="preview" dangerouslySetInnerHTML={renderMarkdown()}></div>
  );
};

export default MarkdownPreview;

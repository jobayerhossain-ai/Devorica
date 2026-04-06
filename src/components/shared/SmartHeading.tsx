import React from "react";

interface SmartHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /** The full heading text */
  text: string;
  /** The word to highlight in gray. Defaults to the first word. */
  highlightWord?: string;
  /** Which heading level to render */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const SmartHeading: React.FC<SmartHeadingProps> = ({
  text,
  highlightWord,
  as: Tag = "h2",
  className = "",
  ...rest
}) => {
  const words = text.split(" ");
  const target = highlightWord || words[0];

  // Find the first occurrence of the highlight word (case-insensitive match)
  let highlighted = false;

  return (
    <Tag className={className} {...rest}>
      {words.map((word, i) => {
        const isHighlight =
          !highlighted && word.toLowerCase() === target.toLowerCase();
        if (isHighlight) highlighted = true;

        return (
          <span key={i}>
            {i > 0 && " "}
            <span style={{ color: isHighlight ? "#666666" : "#FFFFFF" }}>
              {word}
            </span>
          </span>
        );
      })}
    </Tag>
  );
};

export default SmartHeading;

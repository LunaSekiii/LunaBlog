import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import styles from "./Markdown.module.css";

export default function Markdown(prop) {
  const { content } = prop;
  return (
    <div className="flex flex-col space-y-5 ">
      <style jsx>
        {`
          @media screen and (min-width: 914px) {
            div {
              width: 854px;
              margin: 10px auto;
            }
          }

          .pd {
            margin: 10px 13px 10px 13px;
          }
        `}
      </style>
      <span className={styles.pd}>
        <ReactMarkdown
          children={content}
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, "")}
                  style={{
                    'code[class*="language-"]': {
                      color: "#f8f8f2",
                      background: "none",
                      fontFamily:
                        "\"Fira Code\", Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
                      textAlign: "left",
                      whiteSpace: "pre",
                      wordSpacing: "normal",
                      wordBreak: "normal",
                      wordWrap: "normal",
                      lineHeight: "1.5",
                      MozTabSize: "4",
                      OTabSize: "4",
                      tabSize: "4",
                      WebkitHyphens: "none",
                      MozHyphens: "none",
                      msHyphens: "none",
                      hyphens: "none",
                    },
                    'pre[class*="language-"]': {
                      color: "#f8f8f2",
                      background: "#2E3440",
                      fontFamily:
                        "\"Fira Code\", Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
                      textAlign: "left",
                      whiteSpace: "pre",
                      wordSpacing: "normal",
                      wordBreak: "normal",
                      wordWrap: "normal",
                      lineHeight: "1.5",
                      MozTabSize: "4",
                      OTabSize: "4",
                      tabSize: "4",
                      WebkitHyphens: "none",
                      MozHyphens: "none",
                      msHyphens: "none",
                      hyphens: "none",
                      padding: "1em",
                      margin: ".5em 0",
                      overflow: "auto",
                      borderRadius: "0.3em",
                    },
                    ':not(pre) > code[class*="language-"]': {
                      background: "#2E3440",
                      padding: ".1em",
                      borderRadius: ".3em",
                      whiteSpace: "normal",
                    },
                    comment: {
                      color: "#636f88",
                    },
                    prolog: {
                      color: "#636f88",
                    },
                    doctype: {
                      color: "#636f88",
                    },
                    cdata: {
                      color: "#636f88",
                    },
                    punctuation: {
                      color: "#81A1C1",
                    },
                    ".namespace": {
                      Opacity: ".7",
                    },
                    property: {
                      color: "#81A1C1",
                    },
                    tag: {
                      color: "#81A1C1",
                    },
                    constant: {
                      color: "#81A1C1",
                    },
                    symbol: {
                      color: "#81A1C1",
                    },
                    deleted: {
                      color: "#81A1C1",
                    },
                    number: {
                      color: "#B48EAD",
                    },
                    boolean: {
                      color: "#81A1C1",
                    },
                    selector: {
                      color: "#A3BE8C",
                    },
                    "attr-name": {
                      color: "#A3BE8C",
                    },
                    string: {
                      color: "#A3BE8C",
                    },
                    char: {
                      color: "#A3BE8C",
                    },
                    builtin: {
                      color: "#A3BE8C",
                    },
                    inserted: {
                      color: "#A3BE8C",
                    },
                    operator: {
                      color: "#81A1C1",
                    },
                    entity: {
                      color: "#81A1C1",
                      cursor: "help",
                    },
                    url: {
                      color: "#81A1C1",
                    },
                    ".language-css .token.string": {
                      color: "#81A1C1",
                    },
                    ".style .token.string": {
                      color: "#81A1C1",
                    },
                    variable: {
                      color: "#81A1C1",
                    },
                    atrule: {
                      color: "#88C0D0",
                    },
                    "attr-value": {
                      color: "#88C0D0",
                    },
                    function: {
                      color: "#88C0D0",
                    },
                    "class-name": {
                      color: "#88C0D0",
                    },
                    keyword: {
                      color: "#81A1C1",
                    },
                    regex: {
                      color: "#EBCB8B",
                    },
                    important: {
                      color: "#EBCB8B",
                      fontWeight: "bold",
                    },
                    bold: {
                      fontWeight: "bold",
                    },
                    italic: {
                      fontStyle: "italic",
                    },
                  }}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        />
      </span>
    </div>
  );
}

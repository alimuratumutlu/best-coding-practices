
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

interface codeBlockProps {
  children: string;
}

export default function CodeBlock({ children }: codeBlockProps) {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={atomOneDark}
      showLineNumbers
      wrapLongLines
      customStyle={{ borderRadius: 7 }}
    >
      {children}
    </SyntaxHighlighter>
  );
}

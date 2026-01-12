"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import rehypeSlug from "rehype-slug";

interface MarkdownContentProps {
    content: string;
    className?: string;
}

export function MarkdownContent({
    content,
    className = "",
}: MarkdownContentProps) {
    // リテラルの \n を実際の改行文字に変換（Airtable等からのエスケープ対策）
    const sanitizedContent = content ? content.replace(/\\n/g, "\n") : "";

    return (
        <div className={`prose prose-slate max-w-none dark:prose-invert font-sans ${className}`}>
            <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkBreaks]}
                rehypePlugins={[rehypeSlug]}
                components={{
                    h1: ({ children }) => (
                        <h1 className="text-3xl font-bold mt-12 mb-6 text-slate-900 dark:text-white">
                            {children}
                        </h1>
                    ),
                    h2: ({ children }) => (
                        <h2 className="text-3xl font-bold mt-16 mb-8 border-b border-slate-200 dark:border-slate-800 pb-4 text-slate-900 dark:text-white">
                            {children}
                        </h2>
                    ),
                    h3: ({ children }) => (
                        <h3 className="text-2xl font-bold mt-12 mb-6 text-slate-900 dark:text-white">
                            {children}
                        </h3>
                    ),
                    h4: ({ children }) => (
                        <h4 className="text-xl font-bold mt-10 mb-5 text-slate-900 dark:text-white">
                            {children}
                        </h4>
                    ),
                    h5: ({ children }) => (
                        <h5 className="text-base font-bold mt-6 mb-3 text-slate-900 dark:text-white">
                            {children}
                        </h5>
                    ),
                    p: ({ children }) => (
                        <p className="my-6 leading-relaxed text-[17px] md:text-[18px] font-medium text-slate-700 dark:text-slate-300">
                            {children}
                        </p>
                    ),
                    ul: ({ children }) => (
                        <ul className="my-6 list-disc space-y-3 pl-6">{children}</ul>
                    ),
                    ol: ({ children }) => (
                        <ol className="my-6 list-decimal space-y-3 pl-6">
                            {children}
                        </ol>
                    ),
                    li: ({ children }) => (
                        <li className="pl-1">{children}</li>
                    ),
                    strong: ({ children }) => (
                        <strong className="font-bold text-slate-900 dark:text-white">
                            {children}
                        </strong>
                    ),
                    blockquote: ({ children }) => (
                        <blockquote className="border-l-4 border-primary pl-6 my-8 italic bg-slate-50 dark:bg-slate-900/50 py-4 rounded-r-xl">
                            {children}
                        </blockquote>
                    ),
                    code: ({ children, className }) => {
                        const isInline = !className;
                        if (isInline) {
                            return (
                                <code className="bg-primary/5 dark:bg-primary/10 px-1.5 py-0.5 rounded text-sm font-mono text-primary">
                                    {children}
                                </code>
                            );
                        }
                        return (
                            <code className="block bg-slate-100 dark:bg-slate-800 p-6 rounded-xl overflow-x-auto font-mono text-sm my-6">
                                {children}
                            </code>
                        );
                    },
                    a: ({ href, children }) => (
                        <a
                            href={href}
                            className="text-primary hover:opacity-80 underline underline-offset-4 decoration-primary/30 hover:decoration-primary transition-all font-bold"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {children}
                        </a>
                    ),
                    table: ({ children }) => (
                        <div className="overflow-x-auto my-8 border border-slate-200 dark:border-slate-800 rounded-xl">
                            <table className="w-full border-collapse">
                                {children}
                            </table>
                        </div>
                    ),
                    th: ({ children }) => (
                        <th className="bg-slate-50 dark:bg-slate-800/50 px-4 py-3 text-left font-bold border-b border-slate-200 dark:border-slate-800">
                            {children}
                        </th>
                    ),
                    td: ({ children }) => (
                        <td className="px-4 py-3 border-b border-slate-100 dark:border-slate-800 last:border-0 text-sm">
                            {children}
                        </td>
                    ),
                }}
            >
                {sanitizedContent}
            </ReactMarkdown>
        </div>
    );
}

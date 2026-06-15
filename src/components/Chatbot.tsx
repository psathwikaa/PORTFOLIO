"use client";

import React, { useState, useRef, useEffect } from "react";
import { Sparkles, X, Send, Bot, User } from "lucide-react";

interface Message {
  role: "user" | "model";
  content: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "model",
      content: "Hello! I am Agent, a dedicated AI assistant trained to represent Siva Sathwikaa P. Ask me about her projects, tools, skills, education, or ongoing work!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Server returned status ${response.status}`);
      }

      const data = await response.json();
      setMessages((prev) => [...prev, { role: "model", content: data.content }]);
    } catch (error: any) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          content: `Error: ${error.message || "An unexpected error occurred. Please make sure your GEMINI_API_KEY is configured correctly."}`,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Glowing Sparkles Chat Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-charcoal-light border border-sage/40 text-sage hover:text-cream hover:border-sage hover:scale-105 shadow-[0_0_20px_rgba(141,168,155,0.3)] hover:shadow-[0_0_25px_rgba(141,168,155,0.5)] transition-all duration-300 group"
          aria-label="Open AI Copilot"
        >
          <Sparkles className="h-5.5 w-5.5 transition-transform duration-300 group-hover:rotate-12 animate-pulse" />
          <span className="absolute right-16 scale-0 group-hover:scale-100 transition-all duration-200 bg-charcoal border border-zinc-800 text-[10px] uppercase font-bold tracking-wider font-mono text-sage px-3 py-1.5 rounded whitespace-nowrap shadow-md">
            Agent
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="flex flex-col h-[500px] w-[340px] sm:w-[380px] rounded-lg bg-charcoal border border-zinc-850 shadow-[0_10px_35px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 animate-in fade-in slide-in-from-bottom-6">
          {/* Header */}
          <div className="flex items-center justify-between bg-charcoal-light px-4 py-3 border-b border-zinc-850">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sage/10 border border-sage/30 shadow-[0_0_10px_rgba(141,168,155,0.15)]">
                <Sparkles className="h-4 w-4 text-sage" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-cream">Agent</h4>
                <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">AI Copilot</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-zinc-500 hover:text-cream transition-colors p-1"
              aria-label="Close Chatbot"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-charcoal-dark/40">
            {messages.map((msg, index) => {
              const isUser = msg.role === "user";
              return (
                <div
                  key={index}
                  className={`flex gap-2.5 max-w-[85%] ${
                    isUser ? "ml-auto flex-row-reverse" : "mr-auto"
                  }`}
                >
                  <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] border ${
                    isUser 
                      ? "bg-charcoal border-zinc-700 text-zinc-400" 
                      : "bg-sage/10 border-sage/20 text-sage"
                  }`}>
                    {isUser ? <User className="h-3.5 w-3.5" /> : <Sparkles className="h-3.5 w-3.5" />}
                  </div>
                  
                  <div className={`rounded px-3.5 py-2 text-xs md:text-sm leading-relaxed whitespace-pre-line ${
                    isUser
                      ? "bg-sage/5 border border-sage/20 text-cream"
                      : "bg-charcoal-light border border-zinc-850 text-zinc-300"
                  }`}>
                    {msg.content}
                  </div>
                </div>
              );
            })}

            {/* Typing Indicator */}
            {isLoading && (
              <div className="flex gap-2.5 max-w-[85%] mr-auto">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sage/10 border border-sage/20 text-sage">
                  <Sparkles className="h-3.5 w-3.5 animate-spin" />
                </div>
                <div className="rounded px-4 py-2.5 bg-charcoal-light border border-zinc-850 flex items-center justify-center">
                  <div className="flex gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-sage/50 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="h-1.5 w-1.5 rounded-full bg-sage/50 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="h-1.5 w-1.5 rounded-full bg-sage/50 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-3 border-t border-zinc-850 bg-charcoal-light flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about her projects, skills, education..."
              disabled={isLoading}
              className="flex-1 rounded border border-zinc-850 bg-charcoal-dark px-3 py-2 text-xs md:text-sm text-cream placeholder-zinc-700 focus:outline-none focus:border-sage/40"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="flex h-9 w-9 items-center justify-center rounded bg-sage text-charcoal-dark hover:bg-cream disabled:opacity-40 disabled:hover:bg-sage transition-colors duration-150 shrink-0"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

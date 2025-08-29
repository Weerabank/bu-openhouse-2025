"use client";

import { useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "assistant"; content: string };

export default function ChatPage() {
  const [messages, setMessages] = useState<Msg[]>([
    { role: "assistant", content: "Where are you 👋 Are you here Give us a Sign" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  async function send() {
    if (!input.trim() || loading) return;
    const userMsg: Msg = { role: "user", content: input.trim() };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });
      
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      }
      
      const data = await res.json();
      
      if (data.error) {
        throw new Error(data.error);
      }
      
      const aiMsg: Msg = { role: "assistant", content: data.content || "❌ ไม่ได้รับคำตอบ" };
      setMessages(prev => [...prev, aiMsg]);
    } catch (err) {
      console.error("Chat API Error:", err);
      setMessages(prev => [
        ...prev,
        { role: "assistant", content: `⚠️ เกิดข้อผิดพลาด: ${err instanceof Error ? err.message : 'ไม่ทราบสาเหตุ'}` },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-30">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <header className="relative z-10 p-4 bg-white/10 backdrop-blur-sm border-b border-white/20">
        <h1 className="text-white font-bold text-lg text-center"> AI Assistant 💬 </h1>
      </header>

      <div ref={chatRef} className="relative z-10 flex-1 overflow-y-auto p-4 pb-24 space-y-3">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] px-4 py-3 rounded-2xl whitespace-pre-wrap ${
                m.role === "user"
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-br-md shadow-lg"
                  : "bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-bl-md shadow-lg"
              }`}
            >
              {m.content}
            </div>
          </div>
        ))}
        {loading && <div className="text-sm text-blue-200 ml-4">กำลังพิมพ์...</div>}
      </div>

      {/* Fixed chat input bar at bottom */}
      <div className="fixed bottom-0 left-0 right-0 z-20 p-4 bg-white/10 backdrop-blur-md border-t border-white/20">
        <div className="flex gap-3 max-w-4xl mx-auto">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="พิมพ์ข้อความ..."
            className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-3 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50"
          />
          <button
            onClick={send}
            disabled={loading}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-full disabled:opacity-50 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold"
          >
            ส่ง
          </button>
        </div>
      </div>
    </main>
  );
}

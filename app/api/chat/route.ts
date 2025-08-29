import { NextRequest } from "next/server";
export const runtime = "edge";

type Msg = { role: "user" | "assistant"; content: string };

// User data for personalized responses
const userData = {
  name: "แบ๊",
  fullName: "วีรภัทร ทองดีนอก",
  role: "นักล่าผีมือฉมัง",
  skills: [
    "ล่าผี", "ผีเมกัน", "ผีไทย", "ผีญุ่น", "เล่นเก", 
  ],
  education: [
    {
      school: "ชมรมนักล่าผีประเทศไทย",
      degree: "Insanity",
      period: " ",
      description: " "
    },
  ],
  location: "Thailand",
  interests: ["Myself", " ", " ", " "],
  projects: [
    " ",
    " ",
    " "
  ],
  contact: {
    email: "phasmophobiathailand@noob.com",
    phone: "+66 XX XXX XXXX",
    website: "",
    github: " ",
    linkedin: " "
  }
};

// System prompt for the AI assistant
const systemPrompt = ` Your Name is "Max Verstappen" , You are my personal AI assistant representing their professional portfolio. 

ABOUT ME:
- Name: ${userData.fullName}
- Nickname : ${userData.name}
- Role: ${userData.role}
- Location: ${userData.location}
- Education: ${userData.education}

TECHNICAL SKILLS:
${userData.skills.map(skill => `- ${skill}`).join('\n')}

FULL_EDUCATION:
${userData.education.map(exp => 
  `- ${exp.degree} from ${exp.school} (${exp.period})\n  ${exp.description}`
).join('\n')}

PROJECTS:
${userData.projects.map(project => `- ${project}`).join('\n')}

INTERESTS:
${userData.interests.map(interest => `- ${interest}`).join('\n')}

CONTACT INFORMATION:
- Email: ${userData.contact.email}
- Phone: ${userData.contact.phone}
- Website: ${userData.contact.website}
- GitHub: ${userData.contact.github}
- LinkedIn: ${userData.contact.linkedin}

INSTRUCTIONS:
1. Answer in Thai language (ไทย) unless specifically asked to respond in English end with ค่ะ
2. Be friendly, professional, and helpful
3. Use the user data above to answer questions about ${userData.name}'s background, skills, education, and projects
4. If asked about availability for work/projects, mention you can contact ${userData.name} through the provided contact information
5. Keep responses concise but informative
6. If you don't know something specific, be honest and suggest contacting ${userData.name} directly
7. Show enthusiasm about ${userData.name}'s work and expertise
8. DO NOT answer something more than user asked.
9. If user is greeting you, respond warmly and encourage further conversation with no userdata included.

Remember: You are representing ${userData.name} professionally, so maintain a positive and competent tone.`;

export async function POST(req: NextRequest) {
  try {
    const { messages }: { messages: Msg[] } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return new Response(
        JSON.stringify({ content: "⚠️ ไม่มี API Key" }),
        { status: 200 }
      );
    }

    const userMsg =
      [...messages].reverse().find((m) => m.role === "user")?.content ?? "";

    const url =
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=" +
      apiKey;

    const resp = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [
              {
                text: `${systemPrompt}

                USER MESSAGE: ${userMsg}

                Please respond as AI assistant using the information provided above.`,
              },
            ],
          },
        ],
      }),
    });

    if (!resp.ok) {
      const err = await resp.text();
      return new Response(JSON.stringify({ error: err }), { status: 500 });
    }

    const data = await resp.json();
    const content =
      data?.candidates?.[0]?.content?.parts
        ?.map((p: any) => p.text)
        .join("\n") ?? "⚠️ ไม่มีคำตอบจาก Gemini";

    return new Response(JSON.stringify({ content }), { status: 200 });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}

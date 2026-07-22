export interface JokeItem {
  id: number;
  text: string;
  category: 'joke' | 'wisdom';
}

export const JOKES_AND_WISDOM: JokeItem[] = [
  {
    id: 1,
    text: "💡 There are 10 types of people in the world: those who understand binary, and those who don't.",
    category: "joke",
  },
  {
    id: 2,
    text: "⚡ 'Simplicity is prerequisite for reliability.' — Edsger W. Dijkstra",
    category: "wisdom",
  },
  {
    id: 3,
    text: "🐛 It's not a bug, it's an undocumented feature!",
    category: "joke",
  },
  {
    id: 4,
    text: "🚀 'Make it work, make it right, make it fast.' — Kent Beck",
    category: "wisdom",
  },
  {
    id: 5,
    text: "☕ A programmer is a machine that turns caffeine into code & batch scheduler optimizations.",
    category: "joke",
  },
  {
    id: 6,
    text: "🎯 'First, solve the problem. Then, write the code.' — John Johnson",
    category: "wisdom",
  },
  {
    id: 7,
    text: "🔍 Why do programmers prefer dark mode? Because light attracts bugs!",
    category: "joke",
  },
  {
    id: 8,
    text: "⚙️ 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.' — Martin Fowler",
    category: "wisdom",
  },
  {
    id: 9,
    text: "⏱️ Reduced batch processing from 1 hour to <1 min... because waiting for slow code is the real nightmare!",
    category: "joke",
  },
  {
    id: 10,
    text: "🧠 'Experience is the name everyone gives to their mistakes.' — Oscar Wilde",
    category: "wisdom",
  },
];

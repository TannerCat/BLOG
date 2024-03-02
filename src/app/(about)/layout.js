import InsightRoll from "@/src/components/About/InsightRoll";


const insights = [
    "Embedded Systems Engineer",
    "Web Developer",
    "Back-End Programmer",
    "PHP, MySQL, and JavaScript",
    "MongoDB, Express, and Node.js",
    "Arduino, ESP8266, and Raspberry Pi",
    "Philnits Exam Passer",
    "BSCS IV - Saint Columban College"
  ];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}

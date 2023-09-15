import { useState } from "react";
import "./App.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amett consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [CurOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem title={el.title} CurOpen={CurOpen} OnOpen={setCurOpen}  num={i} key={el.title}>
          text={el.text}
          </AccordionItem>   
      ))}
       <AccordionItem title="Test 1" CurOpen={CurOpen} OnOpen={setCurOpen}  num={22} key="Test 1">
          <p>All list item should be inside here</p>
          <ul>
            <li>How long do I have to return my chair?</li>
            <li>Where are these chairs assembled?</li>
            <li>Do you ship to countries outside  EU?</li>
          </ul>
          </AccordionItem>
    </div>
  );
};

function AccordionItem({ num, title, CurOpen, OnOpen, children }) {
  const isOpen= num ===CurOpen
  

  function handleToggle() {
    // setIsOpen((isOpen) => true);
    OnOpen(isOpen ? null : num)
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}

// 
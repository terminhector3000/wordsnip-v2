// import { useState } from "react";
import { createSnip } from "./api/wsengine";

function App() {
  const handleClick = async () => {
    const payload = {
      source: `
Overview
Application
Titan is building the AI platform for banking – creating the models and agents that will define the industry. Led by a team of former CTOs with multiple exits, we're seeking a Full-Stack Developer to build and scale the applications that bring AI into banks' daily workflows.
What you’ll do
Develop and scale products that bring large language models (LLMs) and machine learning capabilities to banks
Design, implement, and scale backend services and APIs that power the platform, ensuring reliability and high performance
Build interfaces and APIs connecting backend logic with modern web or mobile clients
Work on scalability, load balancing, and prformance tuning of web server backends with evolving workloads
Required qualifications
Strong proficiency in Python backend development (FastAPI preferred; Django or Flask acceptable)
Experience with TypeScript and React (Bonus: experience with radix-ui, lucide-react, zustand, or React Router)
Hands-on experience with SQL databases (PostgreSQL, MySQL, or similar)
Proficient with modern CSS frameworks like TailwindCSS
Experience deploying production applications on AWS or Azure, with familiarity in containerization (Docker) and CI/CD pipelines
Knowledge of Kubernetes and infrastructure-as-code tools (Terraform)
Background working with AI engineers or data science teams
What we offer
Competitive compensation (salary + meaningful, pre-Series A equity)
Remote-first culture with opportunity for in-person collaboration
Unlimited PTO
Medical, dental, and vision coverage (100% of employee premiums paid by Titan)`,
      target: `
      About Us
      Since 2013, we've been building a CRM that gets out of our customers’ way and helps teams sell more, faster. No manual data entry, just communication-first sales software designed to help SMBs succeed and scale.
      We're bootstrapped and profitable which means we answer to our customers and play by our own rules. We're proud of our ~120 person, 100% remote team of thoughtful individuals who prioritize taking ownership and making a meaningful impact.
      `,
      honeypot: "",
    };
    const snip = await createSnip(payload);
    if (snip.data !== null) {
      console.log("Word | left Count | right Count | match");
      for (const row of snip.data) {
        const word = row.word;
        const source = row.counts.source;
        const target = row.counts.target;
        const match = row.match;
        console.log(`${word} : ${source}: ${target} ${match}`);
      }
    }
    if (snip.error) {
      //this will become a toast message
      //list of possible messages
      //Request failed with status code 404
      //target or source: Invalid input: expected string, received undefined
      //'Invalid Data'
      //Unable to connect. Please try again
      console.log("snip error", snip.error);
    }
  };

  return (
    <>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
}

export default App;

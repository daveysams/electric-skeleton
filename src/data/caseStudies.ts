import project1 from "@/assets/hero-impact-2.png";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.png";
import batcher1 from "@/assets/batcher-1.jpg";
import batcher2 from "@/assets/batcher-2.jpg";
import batcher3 from "@/assets/batcher-3.jpg";
import batcher4 from "@/assets/batcher-4.jpg";
import impact1 from "@/assets/impact-1.png";
import impact2 from "@/assets/impact-2.png";
import impact3 from "@/assets/impact-3.png";
import impact4 from "@/assets/impact-4.png";
import impact5 from "@/assets/impact-5.png";
import lemac4 from "@/assets/lemac-4.jpg";
import lemac1 from "@/assets/lemac-1.jpg";
import lemac2 from "@/assets/lemac-2.png";
import lemac3 from "@/assets/lemac-3.png";

export interface CaseStudy {
  slug: string;
  title: string;
  category: string;
  image: string;
  client: string;
  problem: string;
  solution: string;
  tags: string[];
  challenge: string;
  persona: string;
  approach: string;
  outcome: string;
  keyTakeaway: string;
  imageCount?: number;
  galleryImages?: (string | null)[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "impact-champions",
    title: "Impact Champions",
    category: "BRANDING, VISUAL DESIGN, MULTIMEDIA",
    image: project1,
    client: "ClearXP",
    problem: "Sales reps struggled with a complex product suite, leading to 28% lower close rates for new hires.",
    solution: "Created a gamified learning platform with progressive challenges tied to real product scenarios.",
    tags: ["Figma", "Illustrator", "After Effects"],
    challenge: "eLearning platform ClearXP wanted to bring L&D professionals together in one online home. The scope was broad by design: instructional design, learning methodologies, emerging technology, and everything in between. \n\nThe platform needed to house articles, podcasts, video masterclasses, and a community forum — a lot of moving parts to wrangle into something cohesive.",
    persona: "Design a community platform for L&D professionals — a practical, peer-driven space built around clear, actionable advice for people doing the work on the ground.",
    approach: "The L&D space tends toward muted palettes and safe, minimal aesthetics. I decided to go the other way — drawing on the visual language of school notebooks and university textbooks to create something that felt retro but current, a re-imagining to feel familiar, but fresh. \n\nThe result is loud and deliberately so: a vibrant, high-energy colour palette anchored by generous white space and custom line art. The illustrations do a lot of heavy lifting, bringing warmth and personality to the interface. \n\nWhat started as a brief for the Impact Champions site has since grown into a full branded identity system - video idents, a cohesive design language, and bespoke illustration work created for every article across the platform.",
    outcome: "Since soft launching at impactchamps.net, the platform has hit the ground running. Traffic is trending upward, content is being published across articles, podcasts, and video.\n\nThere's still more to come - the community forum is not yet open - but the early signs suggest the platform is landing well with its audience.",
    keyTakeaway: "A distinctive visual language can give a community something to rally around.",
    imageCount: 4,
    galleryImages: [impact3, impact2, impact5, impact4],
  },
  {
    slug: "day-in-the-life-concrete-batcher",
    title: "Day in the Life: Concrete Batcher",
    category: "VIDEOGRAPHY, EDITING",
    image: project2,
    client: "Adbri",
    problem: "Sales reps struggled with a complex product suite, leading to 28% lower close rates for new hires.",
    solution: "Created a gamified learning platform with progressive challenges tied to real product scenarios.",
    tags: ["Premiere", "After Effects", "After Effects"],
    challenge: "Cement manufacturer Adbri needed to onboard their workforce following a period of acquisition. Early conversations established that a fly-on-the-wall style video series, intercut with a formal interview with the Batcher, would be the most effective approach for the learning context.\n\nThe scope was significant: end-to-end responsibility for pre-production, production, and post-production — equipment sourcing within budget, logistics (including a near-miss at the airport with one too many li-ion batteries), videography, editing, and motion graphics. ",
    persona: "Follow a Concrete Batcher through a full shift — starting at 4am — and produce a video series, including an in-depth interview about the role and the work behind it, designed to sit between eLearning modules.",
    approach: "The production called for a run-and-gun approach - nimble, responsive, and unobtrusive enough to capture authentic moments without disrupting the workplace. \n\nLeveraging existing contacts, high-quality but portable camera equipment was sourced to balance production value with practicality. The crew on the day was intentionally lean: myself, a client liaison, and a safety contact from the client's team. Post-production followed a considered workflow - proxies were generated from high-resolution RAW files and edited in Adobe Premiere Pro, keeping the process fast without sacrificing export quality. \n\nTitles were designed in After Effects and added to each clip, and voiceover provided by the client was mixed and balanced in Audition.",
    outcome: "Nine finished clips were delivered. \n\nClient and learner feedback has been strongly positive, with high sentiment scores across both the video content and the broader eLearning modules it supports.",
    keyTakeaway: "Production value is about knowing how to use what you have.",
    imageCount: 4,
    galleryImages: [batcher3, batcher1, batcher2, batcher4],
  },
  {
    slug: "lemac",
    title: "Lemac",
    category: "PRINT, VISUAL DESIGN",
    image: project3,
    client: "Lemac Film & Digital",
    problem: "Sales reps struggled with a complex product suite, leading to 28% lower close rates for new hires.",
    solution: "Created a gamified learning platform with progressive challenges tied to real product scenarios.",
    tags: ["Illustrator", "Javascript", "Photoshop"],
    challenge: "Lemac — a production company supporting digital cinema, broadcast, television, and film — needed technical documents and large-format test charts to assist their technicians and provide clients with reliable reference material.\n\nThe work required a rare combination of skills: the charts needed to be both technically precise and clearly designed. I was brought in specifically because of my background straddling both worlds - as a film and television technician and as a designer.",
    persona: "Create a suite of technical documents and large-format test charts with a high degree of accuracy, for use by in-house technicians and as reference guides for clients.",
    approach: "Precision was the governing principle from the outset. The charts were expensive to produce at large format, which meant there was no margin for error, in the accuracy of the detail, or in the colour rendering. They were to be put to use in testing lens qualities on digital cinema cameras, and evaluating the colorimetry of a camera's image processing pipeline. An incorrect chart would be a useless one.\n\nTo ensure accuracy, I worked closely with a lens technician, a broadcast engineer, and the print shop throughout - from initial drafts through to final print verification. Alongside the test charts, I created a suite of infographic pages covering a range of lenses and digital cinema cameras, drawing on my illustration skills and learning design principles to make complex technical information clear and accessible.",
    outcome: "The charts and documents remain in regular use today, across three sites in different states — a sign that the work has held up and continues to serve its purpose.",
    keyTakeaway: "The best outcomes come from designers who ask the right questions before they open a file.",
    imageCount: 4,
    galleryImages: [lemac1, lemac3, lemac4, lemac2],
  },
];

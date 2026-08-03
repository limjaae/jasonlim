import { Hero } from "@/components/hero/hero";
import { HowISolveProblems } from "@/components/sections/how-i-solve-problems";
import { ProjectsPreview } from "@/components/sections/projects-preview";
import { EnterpriseExperience } from "@/components/sections/enterprise-experience";
import { TechnicalExpertise } from "@/components/sections/technical-expertise";
import { JournalPreview } from "@/components/sections/journal-preview";
import { Interviews } from "@/components/sections/interviews";
import { Community } from "@/components/sections/community";
import { HowILearn } from "@/components/sections/how-i-learn";
import { Mentors } from "@/components/sections/mentors";
import { Awards } from "@/components/sections/awards";

export default function Home() {
  return (
    <>
      <Hero />
      <HowISolveProblems />
      <ProjectsPreview />
      <EnterpriseExperience />
      <TechnicalExpertise />
      <JournalPreview />
      <Interviews />
      <Community />
      <HowILearn />
      <Mentors />
      <Awards />
    </>
  );
}

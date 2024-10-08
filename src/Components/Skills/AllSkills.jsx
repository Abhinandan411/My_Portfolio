import { FrontendSkills, BackendSkills, ToolSkills, ProgrammingSkills } from "./SkillsData";



function SkillCategory({ skills }) {
  // console.log(skills);
  return (
    <div className="my-5 flex flex-wrap gap-5 md:w-[700px]">
      {skills.map((skill, index) => (
        <div key={index}>
          <h1 className="p-2 flex justify-center items-center gap-2 bg-white text-black rounded-md bg-opacity-30 backdrop-blur-md">
            <img src={skill?.icon} alt={skill?.name} loading="lazy" className="w-8" />
            {skill?.name}
          </h1>
        </div>
      ))}
    </div>
  );
}

export function Frontend() {
  return <SkillCategory skills={FrontendSkills} />;
}

export function Backend() {
  return <SkillCategory skills={BackendSkills} />;
}

export function Tools() {
  return <SkillCategory skills={ToolSkills} />;

}

export function ProgrammingSkill() {
  return <SkillCategory skills={ProgrammingSkills} />;
}
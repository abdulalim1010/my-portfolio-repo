const Skills = () => {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 },
    { name: "Tailwind CSS", level: 80 },
    { name: "Firebase", level: 70 },
  ];

  return (
    <section id="skills" className="max-w-5xl mx-auto py-20 px-4">
      <h2 className="text-4xl font-bold mb-8 text-center">Skills</h2>
      <div className="space-y-6 max-w-xl mx-auto">
        {skills.map(({ name, level }) => (
          <div key={name}>
            <h3 className="mb-1 text-xl font-semibold">{name}</h3>
            <div className="w-full bg-gray-300 rounded-full h-6">
              <div
                className="bg-primary h-6 rounded-full"
                style={{ width: `${level}%` }}
                aria-label={`${name} skill level`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

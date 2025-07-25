const About = () => {
  return (
    <section id="about" className="max-w-5xl mx-auto py-20 px-4">
      <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
      <div className="flex flex-col md:flex-row items-center gap-10">
        <img
          src="https://i.ibb.co/FnL1r6h/profile.png"
          alt="Profile"
          className="w-64 rounded-lg shadow-lg"
        />
        <div className="text-gray-700 text-lg leading-relaxed">
          <p>
            I am a passionate frontend developer with 3+ years of experience building scalable and
            user-friendly web applications using React, Tailwind CSS, and Firebase.
          </p>
          <p className="mt-4">
            I enjoy working in dynamic teams and always eager to learn new technologies and improve my
            skills.
          </p>
          <p className="mt-4">
            When I am not coding, I love reading tech blogs and contributing to open source projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

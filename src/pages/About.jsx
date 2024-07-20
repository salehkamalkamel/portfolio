export default function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div>
        <p className="mb-4">
          Hi, I&apos;m Saleh Kamal, a 21-year-old junior front-end developer
          based in Cairo, Egypt. Over the past two years, I have embarked on a
          self-study journey in frontend development, starting with CS50
          fundamentals and progressing through Data Structures, Algorithms, and
          the Frontend stack. I pursued this alongside my Civil Engineering
          studies at college.
        </p>
        <p className="mb-4">
          Throughout my learning journey, I have mastered CSS, HTML, JavaScript,
          React, Tailwind CSS, Styled Components, and Supabase. I take pride in
          creating responsive, high-performance websites and applications that
          are visually appealing and user-friendly.
        </p>
        <p className="mb-4">
          Recently, I have been diving deeper into advanced React concepts and
          related libraries like Redux and React-Query. My goal is to produce
          efficient, maintainable code that aligns with modern web development
          practices.
        </p>
        <p className="mb-4">
          I am committed to continuous learning and improvement, always
          exploring new technologies and reinforcing the fundamentals. This
          dedication helps me keep my skills sharp and relevant in a rapidly
          evolving field.
        </p>
        <p>
          Outside of coding, I enjoy reading and playing video games on my
          Nintendo Switch. I believe in maintaining a healthy work-life balance
          to fuel creativity and productivity.
        </p>
      </div>
    </section>
  );
}

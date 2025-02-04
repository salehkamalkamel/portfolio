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
          Hi, I&apos;m Saleh Kamal, a front-end developer based in Cairo, Egypt.
          I began my career as a self-taught developer, leveraging online
          resources to build my skills. From the start, I focused on learning
          computer science fundamentals to establish a strong foundation in the
          field. I started with CS50, then progressed through Data Structures,
          Algorithms, web fundamentals, and the frontend stack—all while
          pursuing my Civil Engineering degree in college.
        </p>
        <p className="mb-4">
          Throughout my learning journey, I have mastered CSS, HTML, JavaScript,
          React, Next, Tailwind CSS, Styled Components, Firebase and Supabase. I
          take pride in creating responsive, high-performance websites and
          applications that are visually appealing and user-friendly.
        </p>
        <p className="mb-4">
          Recently, I’ve been delving deeper into web development by exploring
          how core web technologies work under the hood. I’ve studied the React
          Fiber engine, gaining a deeper understanding of its reconciliation
          process and how it optimizes UI updates. Additionally, I’ve been
          diving into the intricacies of JavaScript, including its event loop,
          closures, prototypal inheritance, and other advanced concepts. My goal
          is to go beyond just being a web developer—to truly master the
          technologies that power the web.
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

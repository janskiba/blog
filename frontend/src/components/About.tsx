export function About() {
  return (
    <div className="mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      
      <section className="mb-8">
        <p className="text-lg text-gray-700 mb-4">
          Welcome to my blog! I'm a passionate developer and writer sharing insights about
          web development, technology, and programming best practices.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What I Do</h2>
        <p className="text-gray-700 mb-4">
          I create modern web applications using React, TypeScript, and Node.js. I'm
          dedicated to writing clean, maintainable code and building great user experiences.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">On This Blog</h2>
        <p className="text-gray-700">
          Here you'll find articles about frontend development, backend architecture,
          design patterns, and lessons learned from real-world projects.
        </p>
      </section>
    </div>
  );
}

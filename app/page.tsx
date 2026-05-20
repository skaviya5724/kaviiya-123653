export default function ResumePage() {
  const skills = ["HTML", "CSS", "JAVA", "NEXT JS", "PYTHON"];

  const projects = ["Online Rental Car Booking System"];

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden border border-pink-200">

        {/* Header */}
        <div className="bg-gradient-to-r from-pink-800 via-pink-700 to-pink-500 text-white p-10">
          <h1 className="text-5xl font-extrabold tracking-wide uppercase">
            Kaviya
          </h1>

          <p className="text-lg mt-3 text-pink-100 font-medium">
            Student
          </p>

          <div className="mt-6 grid md:grid-cols-2 gap-3 text-sm">
            <p className="bg-pink-700/40 px-4 py-2 rounded-xl">
              📍 Namakkal, Tamil Nadu, India
            </p>

            <p className="bg-pink-700/40 px-4 py-2 rounded-xl">
              📧 s.kaviya5724@gmail.com
            </p>

            <p className="bg-pink-700/40 px-4 py-2 rounded-xl">
              📞 +91 6369955734
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="grid md:grid-cols-3">

          {/* Sidebar */}
          <aside className="bg-pink-50 p-8 border-r border-pink-100">

            {/* Skills */}
            <section>
              <h2 className="text-2xl font-bold mb-5 text-pink-900 border-b-2 border-pink-300 pb-2">
                Skills
              </h2>

              <div className="space-y-3">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-gradient-to-r from-pink-700 to-pink-500 text-white px-4 py-3 rounded-xl text-sm font-semibold shadow-md hover:scale-105 transition"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="mt-12">
              <h2 className="text-2xl font-bold mb-5 text-pink-900 border-b-2 border-pink-300 pb-2">
                Education
              </h2>

              <div className="bg-white p-4 rounded-2xl shadow-md border border-pink-100">
                <h3 className="font-bold text-pink-900 text-lg">
                  Diploma
                </h3>

                <p className="text-sm text-gray-600 mt-1">
                  Computer Science / Information Technology
                </p>
              </div>
            </section>

            {/* Languages */}
            <section className="mt-12">
              <h2 className="text-2xl font-bold mb-5 text-pink-900 border-b-2 border-pink-300 pb-2">
                Languages
              </h2>

              <div className="bg-white rounded-2xl p-4 shadow-md border border-pink-100">
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    ✅ English
                  </li>

                  <li className="flex items-center gap-2">
                    ✅ Tamil
                  </li>
                </ul>
              </div>
            </section>
          </aside>

          {/* Main Content */}
          <section className="md:col-span-2 p-10 bg-white">

            {/* Profile */}
            <section>
              <h2 className="text-3xl font-extrabold mb-5 text-pink-900">
                Profile
              </h2>

              <div className="bg-pink-50 border border-pink-100 rounded-2xl p-6 shadow-sm">
                <p className="text-gray-700 leading-8 text-[15px]">
                  Passionate student and aspiring full-stack developer with
                  knowledge in Next.js, React, Tailwind CSS, and modern web
                  application development. Interested in building responsive
                  websites, learning advanced technologies, and developing
                  real-world software projects.
                </p>
              </div>
            </section>

            {/* Experience */}
            <section className="mt-12">
              <h2 className="text-3xl font-extrabold mb-6 text-pink-900">
                Experience
              </h2>

              <div className="bg-gradient-to-br from-pink-50 to-white border border-pink-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition">
                <h3 className="text-2xl font-bold text-pink-950">
                  Next JS Developer
                </h3>

                <p className="text-pink-600 font-semibold mt-1">
                  Intern
                </p>

                <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-3 leading-7">
                  <li>
                    Built a simple e-commerce website using Next.js and
                    Tailwind CSS.
                  </li>

                  <li>
                    Developed product listing, cart, and responsive UI
                    features.
                  </li>

                  <li>
                    Learned API integration and modern frontend development
                    concepts.
                  </li>
                </ul>
              </div>
            </section>

            {/* Projects */}
            <section className="mt-12">
              <h2 className="text-3xl font-extrabold mb-6 text-pink-900">
                Projects
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project) => (
                  <div
                    key={project}
                    className="bg-gradient-to-br from-pink-100 to-pink-50 border border-pink-200 rounded-2xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-1 transition duration-300"
                  >
                    <h3 className="font-bold text-xl text-pink-900">
                      {project}
                    </h3>

                    <p className="text-sm text-gray-700 mt-3 leading-6">
                      Developed using Next.js, TypeScript, Tailwind CSS,
                      responsive UI design, APIs, and cloud-based deployment.
                    </p>
                  </div>
                ))}
              </div>
            </section>

          </section>
        </div>
      </div>
    </main>
  );
}

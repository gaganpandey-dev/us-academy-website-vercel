import Image from "next/image";

export default function Management() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-10">
          School Management
        </h1>

      <div className="flex justify-center mb-6">
  <Image
    src="/images/management.jpeg"
    alt="School Manager"
    width={180}
    height={180}
    className="rounded-full object-cover shadow-lg border-4 border-white"
  />
</div>

        {/* Name */}
        <h2 className="text-2xl font-semibold text-gray-800">
          Neeraj Shukla
        </h2>

        <p className="text-blue-600 font-medium mb-6">
          Manager – US Academy
        </p>

        {/* Message */}
        <div className="text-gray-700 leading-relaxed text-[15px] space-y-4 text-justify">

          <p>
            At US Academy, our vision is to build a learning environment where
            every child receives the opportunity to grow academically,
            socially, and morally. We believe that education is the foundation
            of a progressive society and it should be accessible to every
            student, especially in rural communities where quality education
            is often limited.
          </p>

          <p>
            Our mission is to provide affordable and wholesome education that
            nurtures curiosity, discipline, and a passion for learning. We
            strive to create a supportive environment where students can
            explore their talents, build confidence, and develop the values
            necessary to become responsible citizens.
          </p>

          <p>
            With dedicated teachers, a well-structured curriculum, and a focus
            on character development, US Academy aims to prepare students not
            only for academic success but also for the challenges of life.
            Through consistent effort and commitment to excellence, we aspire
            to build a strong educational legacy for future generations.
          </p>

        </div>

      </div>
    </section>
  );
}
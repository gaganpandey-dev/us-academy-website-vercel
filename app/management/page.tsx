import ProfileCard from "@/components/ProfileCard";

export default function Management() {
  return (
    <section className="max-w-7xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-10 text-center">
        Management Team
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        <ProfileCard
          name="Mr. Robert Johnson"
          role="Chairman"
          image="/images/management1.jpg"
        />
        <ProfileCard
          name="Mrs. Emily Johnson"
          role="Director"
          image="/images/faculty/2.png"
        />
        <ProfileCard
          name="Mrs. Sarah Lee"
          role="Principal"
          image="/images/faculty/1.png"
        />
      </div>
    </section>
  );
}

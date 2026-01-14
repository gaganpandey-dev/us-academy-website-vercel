import ProfileCard from "@/components/ProfileCard";

export default function Faculty() {
  return (
    <section className="max-w-7xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-10 text-center">
        Our Faculty
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        <ProfileCard
          name="Mr. John Smith"
          role="Senior Mathematics Teacher"
          image="/images/faculty1.jpg"
        />
        <ProfileCard
          name="Ms. Anna Williams"
          role="Science Teacher"
          image="/images/faculty1.jpg"
        />
        <ProfileCard
          name="Mr. David Brown"
          role="English Teacher"
          image="/images/faculty1.jpg"
        />
      </div>
    </section>
  );
}

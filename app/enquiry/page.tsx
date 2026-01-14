import EnquiryForm from "@/components/EnquiryForm";

export default function Enquiry() {
  return (
    <section className="bg-[#F5F6F8] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          Admission Enquiry
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Interested in enrolling your child at US Academy?  
          Fill out the enquiry form and our admission team will contact you shortly.
        </p>
      </div>

      <EnquiryForm />
    </section>
  );
}

export default function ContactInfo() {
  return (
    <section className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold">
        Do you have questions?
      </h2>
      <p className="text-blue-600 font-semibold">Ask us anytime</p>

      <div className="mt-10 max-w-5xl mx-auto grid md:grid-cols-3 gap-6 bg-gradient-to-r from-[#2F80ED] to-[#17C0EB] p-8 rounded-xl text-white">

        <div>
          <h3 className="font-semibold">Contact Us</h3>
          <p>+91 4040117942</p>
        </div>

        <div>
          <h3>Email Us</h3>
          <p>sales@acmeglobal.tech</p>
        </div>

        <div>
          <h3>Our Location</h3>
          <p>Hyderabad, India</p>
        </div>

      </div>
    </section>
  );
}
export default function PrivacyPolicyPage() {
  return (
    <div className="w-full min-h-screen bg-gray-100 pt-24 px-4">
      <h1 className="font-playfair text-[#0B1122] text-4xl font-light text-center mb-10">
        Privacy Policy
      </h1>

      <div className="w-full max-w-7xl mx-auto h-[85vh] border shadow-lg">
        <iframe
          src="/policy/PrivacyPolicy.pdf"
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
import ApplyForm
from "@/app/components/partnerapply/Form";

export const metadata = {

  title:
    "Partner With Us - ACME Global Hub",
};

export default function PartnerApplyPage() {

  return (

    <main
      className="
        min-h-screen

        bg-[#F5F7FB]

        pt-[140px]
        pb-[100px]

        px-6
        mt-[72px]

        relative
        overflow-hidden
      "
    >

      {/* BACKGROUND GRADIENT */}
      <div
        className="
          absolute
          top-0
          right-0

          w-[700px]
          h-[700px]

          bg-[radial-gradient(circle_at_top_right,rgba(46,102,255,0.10),transparent_60%)]

          pointer-events-none
        "
      />

      <div
        className="
          max-w-5xl
          mx-auto

          relative
          z-10
        "
      >

        {/* TOP CONTENT */}
        <div className="text-center mb-14">

          {/* SMALL LABEL */}
          <p
            className="
              text-[#1A4FD6]

              uppercase

              tracking-[2px]

              text-sm

              font-semibold
              py-10

            "
          >
            Partner Ecosystem
          </p>

          {/* HEADING */}
          <h1
            className="
              font-playfair

              text-[40px]
              md:text-[56px]

              leading-[1.15]

              font-bold

              text-[#0B1120]

              mb-6
            "
          >
            Become an
            {" "}

            <span className="text-[#1A4FD6]">
              ACME Global Hub Partner
            </span>

          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              max-w-[760px]

              mx-auto

              text-[#5E6E90]

              text-[17px]

              leading-[32px]
            "
          >
            Join our growing ecosystem of technology,
            implementation, and strategic partners across
            the GCC and global markets. Fill out the form
            below and our partnerships team will review
            your request and get back to you shortly.
          </p>

        </div>

        {/* FORM */}
        <div className="max-w-4xl mx-auto">

          <ApplyForm/>

        </div>

      </div>

    </main>
  );
}
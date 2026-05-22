import Link
from "next/link";

export default function AdminPage() {

  return (

    <main
      className="
        min-h-screen

        bg-[#F5F7FB]

        p-10
        mt-[72px]
      "
    >

      <h1
        className="
          text-4xl

          font-bold

          mb-10

          text-[#0B1120]
        "
      >
        HR Dashboard
      </h1>

      <div
        className="
          grid

          md:grid-cols-2

          gap-6
        "
      >

        {/* APPLICATIONS */}
        <Link
          href="/admin/applications"

          className="
            bg-white

            rounded-3xl

            p-8

            border
            border-[#E8EEF9]

            hover:border-[#1A4FD6]

            transition-all
            duration-300
          "
        >

          <h2
            className="
              text-2xl

              font-bold

              mb-3

              text-[#0B1120]
            "
          >
            Applications
          </h2>

          <p className="text-gray-500">
            Manage candidate applications
            and recruitment pipeline.
          </p>

        </Link>

        {/* PARTNERS */}
        <Link
          href="/admin/partners"

          className="
            bg-white

            rounded-3xl

            p-8

            border
            border-[#E8EEF9]

            hover:border-[#1A4FD6]

            transition-all
            duration-300
          "
        >

          <h2
            className="
              text-2xl

              font-bold

              mb-3

              text-[#0B1120]
            "
          >
            Partners
          </h2>

          <p className="text-gray-500">
            Review partnership requests
            and brochures.
          </p>

        </Link>

      </div>

    </main>
  );
}
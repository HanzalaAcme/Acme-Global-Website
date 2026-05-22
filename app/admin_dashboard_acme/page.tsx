"use client";

import { useEffect, useState } from "react";

import { useRouter }
from "next/navigation";

import { supabase }
from "@/lib/supabase/client";

export default function AdminPage() {

  const router = useRouter();

  const [loading, setLoading] =
    useState(true);

  const [user, setUser] =
    useState<any>(null);

  useEffect(() => {

    const checkUser = async () => {

      const {
        data: { session },
      } = await supabase.auth.getSession();

      // NOT LOGGED IN
      if (!session) {

        router.push("/admin/login");

        return;
      }

      setUser(session.user);

      setLoading(false);
    };

    checkUser();

  }, [router]);

  // LOADING
  if (loading) {

    return (

      <div
        className="
          min-h-screen

          flex
          items-center
          justify-center

          bg-[#F5F7FB]
        "
      >
        Loading...
      </div>
    );
  }

  return (

    <main
      className="
        min-h-screen

        bg-[#F5F7FB]

        p-10
        mt-[72px]
      "
    >

      <div
        className="
          flex
          items-center
          justify-between

          mb-10
        "
      >

        <h1
          className="
            text-4xl
            text-[#000000]
            font-bold
          "
        >
          Admin Dashboard
        </h1>

        <button
          onClick={async () => {

            await supabase.auth.signOut();

            router.push("/admin/login");
          }}

          className="
            px-5
            py-2

            rounded-xl

            bg-red-500

            text-white

            cursor-pointer
          "
        >
          Logout
        </button>

      </div>

      <div
        className="
          bg-white

          rounded-2xl

          p-8

          shadow-sm
        "
      >

        <p className="text-gray-600 text-Bold uppercase">
          Welcome 
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">

  {/* APPLICATIONS CARD */}
  <button
    onClick={() =>
      router.push("/admin_dashboard_acme/applications")
    }

    className="
      bg-white

      rounded-2xl

      p-6

      shadow-sm

      border
      border-[#E8EEF9]

      text-left

      transition-all
      duration-300

      hover:border-[#1A4FD6]
      hover:shadow-lg

      cursor-pointer
    "
  >

    <div
      className="
        w-14
        h-14

        rounded-xl

        bg-[#1A4FD6]/10

        flex
        items-center
        justify-center

        mb-5
      "
    >

      <span className="text-2xl">
        📄
      </span>

    </div>

    <h2
      className="
        text-xl

        font-bold

        text-[#0B1120]

        mb-2
      "
    >
      Applications
    </h2>

    <p
      className="
        text-gray-500

        leading-7
      "
    >
      View and manage all submitted candidate applications.
    </p>

  </button>

</div>

      </div>

    </main>
  );
}
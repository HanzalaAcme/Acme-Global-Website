"use client";

import { useState }
from "react";

import { useRouter }
from "next/navigation";

import { supabase }
from "@/lib/supabase/client";

export default function LoginPage() {

  const router =
    useRouter();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleLogin = async (
    e: any
  ) => {

    e.preventDefault();

    setLoading(true);

    const {
      error,
    } =
      await supabase.auth
        .signInWithPassword({

          email,
          password,
        });

    setLoading(false);

    if (error) {

      alert(error.message);

      return;
    }

    router.push("/admin");
  };

  return (

    <main
      className="
        min-h-screen

        flex
        items-center
        justify-center

        bg-[#F5F7FB]
      "
    >

      <form
        onSubmit={handleLogin}

        className="
          bg-white

          p-10

          rounded-3xl

          shadow-sm

          border
          border-[#E8EEF9]

          w-full
          max-w-md

          space-y-5
        "
      >

        <h1
          className="
            text-3xl

            font-bold

            text-center

            text-[#0B1120]
          "
        >
          Admin Login
        </h1>

        <input
          type="email"

          placeholder="Email"

          value={email}

          onChange={(e) =>
            setEmail(e.target.value)
          }

          className="
            w-full
            h-[54px]

            border
            border-[#E6EAF2]

            rounded-xl

            px-4

            outline-none

            focus:border-[#1A4FD6]
          "
        />

        <input
          type="password"

          placeholder="Password"

          value={password}

          onChange={(e) =>
            setPassword(e.target.value)
          }

          className="
            w-full
            h-[54px]

            border
            border-[#E6EAF2]

            rounded-xl

            px-4

            outline-none

            focus:border-[#1A4FD6]
          "
        />

        <button
          type="submit"

          disabled={loading}

          className="
            w-full
            h-[54px]

            bg-[#1A4FD6]
            hover:bg-[#2E66FF]

            rounded-xl

            text-white

            font-semibold

            transition-all

            cursor-pointer
          "
        >

          {loading
            ? "Signing In..."
            : "Login"}

        </button>

      </form>

    </main>
  );
}
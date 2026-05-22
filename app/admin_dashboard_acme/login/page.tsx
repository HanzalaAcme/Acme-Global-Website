"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { supabase } from "@/lib/supabase/client";

export default function LoginPage() {

  const router = useRouter();

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
  data,
  error,
} = await supabase.auth.signInWithPassword({

  email,
  password,
});

console.log(data);
console.log(error);

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

          rounded-2xl

          shadow-lg

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

                    border
                    border-[#D8E1F0]

                    bg-[#F8FAFC]

                    text-[#0B1120]

                    placeholder:text-gray-400

                    p-3

                    rounded-xl

                    outline-none

                    transition-all
                    duration-300

                    focus:border-[#1A4FD6]
                    focus:bg-white
                    focus:ring-4
                    focus:ring-[#1A4FD6]/10
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

    border
    border-[#D8E1F0]

    bg-[#F8FAFC]

    text-[#0B1120]

    placeholder:text-gray-400

    p-3

    rounded-xl

    outline-none

    transition-all
    duration-300

    focus:border-[#1A4FD6]
    focus:bg-white
    focus:ring-4
    focus:ring-[#1A4FD6]/10
  "
/>

        <button
          type="submit"

          disabled={loading}

          className="
  w-full

  bg-[#1A4FD6]

  text-white

  py-3

  rounded-xl

  font-semibold

  cursor-pointer

  transition-all
  duration-300

  hover:bg-[#2E66FF]
  hover:shadow-lg

  disabled:opacity-50
  disabled:cursor-not-allowed
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
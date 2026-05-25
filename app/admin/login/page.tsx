"use client";

import {
  useEffect,
  useState,
} from "react";

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

  useEffect(() => {

    // CLEAR SESSION
    supabase.auth.signOut();

  }, []);

  const handleLogin =
    async (
      e: React.FormEvent
    ) => {

      e.preventDefault();

      try {

        setLoading(true);

        const {
          error,
        } =
          await supabase.auth
            .signInWithPassword({

              email,

              password,
            });

        if (error) {

          alert(
            error.message
          );

          return;
        }

        router.push(
          "/admin/dashboard"
        );

      } catch (err) {

        console.log(err);

      } finally {

        setLoading(false);
      }
    };

  return (

    <main
      className="
        min-h-screen

        bg-[#F5F7FB]

        flex
        items-center
        justify-center

        px-6
      "
    >

      <div
        className="
          w-full
          max-w-md

          bg-white

          rounded-3xl

          border
          border-[#E8EEF9]

          p-10
        "
      >

        <div className="mb-10">

          <p
            className="
              text-sm

              uppercase

              tracking-[2px]

              text-[#1A4FD6]

              font-semibold

              mb-3
            "
          >
            ACME Global Hub
          </p>

          <h1
            className="
              text-4xl

              font-bold

              text-[#0B1120]
            "
          >
            Admin Login
          </h1>

        </div>

        <form
          onSubmit={handleLogin}

          className="space-y-6"
        >

          {/* EMAIL */}
          <div>

            <label
              className="
                block

                text-sm

                font-semibold

                mb-3
              "
            >
              Email
            </label>

            <input
              type="email"

              required

              value={email}

              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }

              className="
                w-full

                h-[54px]

                rounded-2xl

                border
                border-[#E6EAF2]

                px-5

                outline-none

                focus:border-[#1A4FD6]
              "
            />

          </div>

          {/* PASSWORD */}
          <div>

            <label
              className="
                block

                text-sm

                font-semibold

                mb-3
              "
            >
              Password
            </label>

            <input
              type="password"

              required

              value={password}

              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }

              className="
                w-full

                h-[54px]

                rounded-2xl

                border
                border-[#E6EAF2]

                px-5

                outline-none

                focus:border-[#1A4FD6]
              "
            />

          </div>

          {/* BUTTON */}
          <button
            type="submit"

            disabled={loading}

            className="
              w-full

              h-[56px]

              rounded-2xl

              bg-[#1A4FD6]

              hover:bg-[#2E66FF]

              text-white

              font-semibold

              transition-all

              disabled:opacity-50
            "
          >
            {
              loading

                ? "Signing In..."

                : "Login"
            }
          </button>

        </form>

      </div>

    </main>
  );
}
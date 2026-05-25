"use client";

import {
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

  const handleLogin =
    async (
      e: React.FormEvent
    ) => {

      e.preventDefault();

      try {

        setLoading(true);

        // ========================================
        // CLEAR OLD SESSION
        // ========================================

        await supabase.auth.signOut();

        // ========================================
        // LOGIN
        // ========================================

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

        // ========================================
        // REDIRECT
        // ========================================

        router.refresh();

        router.push(
          "/admin/dashboard"
        );

      } catch (err) {

        console.log(
          "LOGIN ERROR:",
          err
        );

        alert(
          "Something went wrong"
        );

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

          shadow-sm
        "
      >

        {/* TOP */}
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

          <p className="text-[#5E6E90]">
            Sign in to your admin account
          </p>

        </div>

        {/* FORM */}
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

                text-[#0B1120]
              "
            >
              Email Address
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

              placeholder="admin@acmeglobal.tech"

              className="
                w-full

                h-[56px]

                rounded-2xl

                border
                border-[#E6EAF2]

                px-5

                outline-none

                transition-all

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

                text-[#0B1120]
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

              placeholder="••••••••"

              className="
                w-full

                h-[56px]

                rounded-2xl

                border
                border-[#E6EAF2]

                px-5

                outline-none

                transition-all

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

              h-[58px]

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
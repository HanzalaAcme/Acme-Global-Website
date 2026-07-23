"use client";

import { useEffect, useState } from "react";
import { parseJobMeta } from "@/lib/parsejob";
import Link from "next/link";
import {getWordPressApi } from "@/lib/wordpress";

type Job = {
  id: number;
  title: string;
  slug: string;
  date: string;
  location: string;
  type: string;
  mode: string;
  department: string;
};

/* FORMAT VALUES */
const formatValue = (value: string) => {
  return value
    .trim()
    .split(" ")
    .map(
      (word) =>
        word.charAt(0).toUpperCase() +
        word.slice(1).toLowerCase()
    )
    .join(" ");
};

/* UNIQUE VALUES (CASE SAFE) */
const getUniqueValues = (values: string[]) => {

  const seen = new Map<string, string>();

  values.forEach((value) => {

    if (!value) return;

    // normalize
    const normalized = value.trim().toLowerCase();

    // store only first unique value
    if (!seen.has(normalized)) {
      seen.set(normalized, formatValue(value));
    }
  });

  return Array.from(seen.values());
};

export default function JobList() {

  const [jobs, setJobs] = useState<Job[]>([]);
  const [filtered, setFiltered] = useState<Job[]>([]);

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [mode, setMode] = useState("");
  const [department, setDepartment] = useState("");

  /* FETCH JOBS */
  useEffect(() => {

    fetch(
      `${getWordPressApi()}/posts?categories=2&per_page=100&_embed`
    )
      .then((res) => res.json())
      .then((data) => {

        const parsed = data.map((post: any) => {

          const meta = parseJobMeta(post.content.rendered);

          return {
            id: post.id,
            title: post.title.rendered,
            slug: post.slug,
            date: post.date,

            location: meta.location || "Global",

            type: meta.type || "Full-Time",

            mode: meta.mode || "On-site",

            department: meta.department || "General",
          };
        });

        setJobs(parsed);
        setFiltered(parsed);

      });

  }, []);

  /* FILTER LOGIC */
  useEffect(() => {

    let result = [...jobs];

    // SEARCH
    if (search) {

      result = result.filter((job) =>
        job.title
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    // LOCATION
    if (location) {

      result = result.filter(
        (job) =>
          job.location
            ?.trim()
            .toLowerCase() ===
          location
            .trim()
            .toLowerCase()
      );
    }

    // TYPE
    if (type) {

      result = result.filter(
        (job) =>
          job.type
            ?.trim()
            .toLowerCase() ===
          type
            .trim()
            .toLowerCase()
      );
    }

    // MODE
    if (mode) {

      result = result.filter(
        (job) =>
          job.mode
            ?.trim()
            .toLowerCase() ===
          mode
            .trim()
            .toLowerCase()
      );
    }

    // DEPARTMENT
    if (department) {

      result = result.filter(
        (job) =>
          job.department
            ?.trim()
            .toLowerCase() ===
          department
            .trim()
            .toLowerCase()
      );
    }

    setFiltered(result);

  }, [
    search,
    location,
    type,
    mode,
    department,
    jobs,
  ]);

  /* UNIQUE FILTER VALUES */
  const locations = getUniqueValues(
    jobs.map((j) => j.location)
  );

  const types = getUniqueValues(
    jobs.map((j) => j.type)
  );

  const modes = getUniqueValues(
    jobs.map((j) => j.mode)
  );

  const departments = getUniqueValues(
    jobs.map((j) => j.department)
  );

  /* MODE COLORS */
  const getModeColor = (mode: string) => {

    const m = mode.toLowerCase();

    if (m === "remote") {
      return "bg-blue-100 text-blue-600";
    }

    if (m === "hybrid") {
      return "bg-yellow-100 text-yellow-600";
    }

    if (m === "on-site") {
      return "bg-green-100 text-green-600";
    }

    return "bg-gray-100 text-gray-600";
  };

  /* TYPE COLORS */
  const getTypeColor = (type: string) => {

    const t = type.toLowerCase();

    if (t === "full-time") {
      return "bg-green-100 text-green-600";
    }

    if (t === "internship") {
      return "bg-yellow-100 text-yellow-600";
    }

    if (t === "contract") {
      return "bg-blue-100 text-blue-600";
    }

    return "bg-gray-100 text-gray-600";
  };

  /* DAYS AGO */
  function getDaysAgo(dateString: string) {

    const postDate = new Date(dateString);

    const now = new Date();

    const diffTime =
      now.getTime() - postDate.getTime();

    const diffDays = Math.floor(
      diffTime / (1000 * 60 * 60 * 24)
    );

    if (diffDays === 0) {
      return "Posted today";
    }

    if (diffDays === 1) {
      return "Posted 1 day ago";
    }

    return `Posted ${diffDays} days ago`;
  }

  return (
    <section
      id="open-positions"
      className="bg-[#F5F7FB] py-20 px-6"
    >

      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-10">

          <p className="text-blue-600 text-sm font-medium mb-2">
            OPEN POSITIONS
          </p>

          <h2 className="text-4xl font-bold font-playfair text-gray-900">
            Featured{" "}
            <span className="text-blue-600">
              Jobs
            </span>
          </h2>

        </div>

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search jobs..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="
            w-full
            p-4
            rounded-xl
            border
            mb-6
            outline-none

            text-gray-800
            placeholder:text-gray-400

            focus:border-blue-600
            focus:ring-2
            focus:ring-blue-100

            transition-all
            duration-200
          "
        />

        {/* FILTERS */}
        <div className="grid md:grid-cols-4 gap-4 mb-10">

          {/* DEPARTMENT */}
          <select
            value={department}
            onChange={(e) =>
              setDepartment(e.target.value)
            }
            className="
              p-3
              rounded-xl
              border
              outline-none

              text-gray-700
              bg-white

              focus:border-blue-600
              focus:ring-2
              focus:ring-blue-100

              transition-all
              duration-200
            "
          >
            <option value="">
              Department
            </option>

            {departments.map((d) => (
              <option
                key={d}
                value={d}
              >
                {d}
              </option>
            ))}
          </select>

          {/* MODE */}
          <select
            value={mode}
            onChange={(e) =>
              setMode(e.target.value)
            }
            className="
              p-3
              rounded-xl
              border
              outline-none

              text-gray-700
              bg-white

              focus:border-blue-600
              focus:ring-2
              focus:ring-blue-100

              transition-all
              duration-200
            "
          >
            <option value="">
              Workplace type
            </option>

            {modes.map((m) => (
              <option
                key={m}
                value={m}
              >
                {m}
              </option>
            ))}
          </select>

          {/* LOCATION */}
          <select
            value={location}
            onChange={(e) =>
              setLocation(e.target.value)
            }
            className="
              p-3
              rounded-xl
              border
              outline-none

              text-gray-700
              bg-white

              focus:border-blue-600
              focus:ring-2
              focus:ring-blue-100

              transition-all
              duration-200
            "
          >
            <option value="">
              Location
            </option>

            {locations.map((l) => (
              <option
                key={l}
                value={l}
              >
                {l}
              </option>
            ))}
          </select>

          {/* TYPE */}
          <select
            value={type}
            onChange={(e) =>
              setType(e.target.value)
            }
            className="
              p-3
              rounded-xl
              border
              outline-none

              text-gray-700
              bg-white

              focus:border-blue-600
              focus:ring-2
              focus:ring-blue-100

              transition-all
              duration-200
            "
          >
            <option value="">
              Work type
            </option>

            {types.map((t) => (
              <option
                key={t}
                value={t}
              >
                {t}
              </option>
            ))}
          </select>

        </div>

        {/* JOB LIST */}
        <div className="bg-white rounded-2xl overflow-hidden border">

          {filtered.map((job, index) => (

            <Link
              key={job.id}
              href={`/careers/${job.slug}`}
            >

              <div
                className={`
                  grid
                  grid-cols-1
                  md:grid-cols-[1.8fr_1fr_1fr_1fr]

                  items-center

                  gap-6

                  p-6
                  border-b

                  hover:bg-gray-50
                  transition

                  ${
                    index === filtered.length - 1
                      ? "border-none"
                      : ""
                  }
                `}
              >

                {/* LEFT */}
                <div>

                  <h3 className="font-playfair text-blue-600 font-bold text-lg">
                    {job.title}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {getDaysAgo(job.date)}
                  </p>

                </div>

                {/* MODE */}
                <span
                  className={`
                    px-4
                    py-1
                    rounded-full
                    text-sm
                    w-fit

                    ${getModeColor(job.mode)}
                  `}
                >
                  {formatValue(job.mode)}
                </span>

                {/* LOCATION */}
                <div className="text-gray-600 text-sm">
                  {formatValue(job.location)}
                </div>

                {/* TYPE */}
                <span
                  className={`
                    px-4
                    py-1
                    rounded-full
                    text-sm
                    w-fit

                    ${getTypeColor(job.type)}
                  `}
                >
                  {formatValue(job.type)}
                </span>

              </div>

            </Link>
          ))}

        </div>

      </div>

    </section>
  );
}
import JobHero from "@/app/components/career/JobHero";
import JobContent from "@/app/components/career/JobContent";
import JobSidebar from "@/app/components/career/JobSidebar";
import JobCTA from "@/app/components/career/JobCTA";
import { parseJob, cleanContent } from "@/lib/parsejob";

async function getJob(slug: string) {
  const res = await fetch(
    `https://public-api.wordpress.com/rest/v1.1/sites/acmeglobal3.wordpress.com/posts/slug:${slug}`,
    { cache: "no-store" }
  );

  return res.json();
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = await getJob(slug);

  if (!job) return <div>Job not found</div>;

  const meta = parseJob(job.content);          
  const content = cleanContent(job.content);   
  const date = new Date(job.date).toLocaleDateString("en-GB");

  return (
    <>
      {/* HERO */}
      <JobHero
        title={job.title}
        date={date}
        type={meta.type}
        mode={meta.mode}
      />

      {/* CONTENT */}
      <section className="py-20 px-6 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto grid grid-cols-12 gap-10">

          {/* LEFT CONTENT */}
          <div className="col-span-12 lg:col-span-8">
            <JobContent content={content} />
            <div className="mt-12">

            <a
              href={`/careers/apply?role=${encodeURIComponent(job.title.replace(/<[^>]+>/g, ""))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#1A4FD6] hover:bg-[#2E66FF] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Apply Now
            </a>

          </div>
          </div>
          
          

          {/* RIGHT SIDEBAR */}
          <div className="col-span-12 lg:col-span-4">
            <JobSidebar
              meta={meta}
              date={date}
              url={`https://yourdomain.com/careers/${slug}`}
            />
          </div>

        </div>
      </section>

      {/* CTA */}
      <JobCTA />
    </>
  );
}
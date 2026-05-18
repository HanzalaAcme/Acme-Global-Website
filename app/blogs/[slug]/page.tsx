
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
} from "lucide-react";
import BlogEnhancements from "../../components/blog/BlogEnhancements"; 
import BlogShare from "@/app/components/blog/BlogShare";
import RelatedBlogs from "../../components/blog/RelatedBlog";
import CTA from "../../components/blog/CTA";

async function getPost(slug: string) {
  const res = await fetch(
    `https://public-api.wordpress.com/rest/v1.1/sites/acmeglobal3.wordpress.com/posts/slug:${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;

  return res.json();
}

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>; 
}) {
  const { slug } = await params; 

  const post = await getPost(slug);

  const tags = Object.values(post.tags || {});

  if (!post || !post.ID) {
    return (
      <div className="text-center py-20 text-xl font-semibold">
        Blog not found
      </div>
    );
  }

  // DATE
  const date = new Date(post.date).toLocaleDateString("en-GB");

  //  READ TIME
  const words = post.content.replace(/<[^>]+>/g, "").split(" ").length;
  const readTime = Math.ceil(words / 200);

  return (
  <>
    <section className="bg-[#F8FAFC] py-20 px-6 overflow-x-hidden">

      <div className="max-w-4xl mx-auto">

        {/* BREADCRUMB */}
        <div className="pt-10 flex justify-center items-center gap-2 text-sm text-[#1a46fd] mb-6">

          {/* HOME */}
          <Link
            href="/"
            className="relative group hover:text-blue-600 transition"
          >
            Home

            <span className="absolute left-0 -bottom-[2px] w-0 h-[2px] bg-[#2E66FF] transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* SEPARATOR */}
          <span className="mx-1 text-gray-400">›</span>

          {/* BLOGS */}
          <Link
            href="/blogs"
            className="relative group hover:text-blue-600 transition"
          >
            Blogs

            <span className="absolute left-0 -bottom-[2px] w-0 h-[2px] bg-[#2E66FF] transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* SEPARATOR */}
          <span className="mx-1 text-gray-400">›</span>

          {/* CURRENT PAGE */}
          <span className="text-gray-800 text-center break-words">
            {post.title.replace(/<[^>]+>/g, "")}
          </span>

        </div>

        {/* TITLE */}
        <h1
          className="
            text-center

            text-[32px]
            md:text-[36px]

            leading-[1.15]

            w-full

            font-playfair
            font-extrabold

            text-[#0B1120]

            mb-6
            pb-10

            break-words
          "
          dangerouslySetInnerHTML={{ __html: post.title }}
        />

        {/* META */}
        <div
          className="
            flex
            flex-col

            sm:flex-row

            justify-center
            items-center

            gap-4
            sm:gap-110

            text-sm

            mb-8

            border-b

            pb-10
          "
        >

          {/* DATE */}
          <div className="flex items-center gap-2">
            <Calendar className="text-[#1a46fd] w-4 h-4" />

            <span className="text-gray-500">
              {date}
            </span>
          </div>

          {/* READ TIME */}
          <div className="flex items-center gap-2">
            <Clock className="text-[#1a46fd] w-4 h-4" />

            <span className="text-gray-500">
              Read time - {readTime} mins
            </span>
          </div>

        </div>

        {/* IMAGE */}
        <div
          id="featured-image"
          className="rounded-2xl overflow-hidden mb-10 justify-center flex"
        >
          <Image
            src={post.featured_image}
            alt="blog"
            width={700}
            height={450}
            className="
              rounded-2xl

              object-cover

              mx-auto

              w-full
              h-auto
            "
            priority
          />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-12 gap-12 pb-20">

          {/* TOC */}
          <aside className="hidden lg:block col-span-3 min-w-0">
            <BlogEnhancements />
          </aside>

          {/* CONTENT */}
          <article className="col-span-12 lg:col-span-9 min-w-0 overflow-hidden">

            <div
              className="
                prose
                prose-base
                sm:prose-lg

                max-w-none

                text-gray-700
                leading-relaxed

                break-words

                [&_img]:mx-auto
                [&_img]:rounded-xl
                [&_img]:max-w-full
                [&_img]:h-auto

                [&_iframe]:max-w-full

                [&_table]:block
                [&_table]:overflow-x-auto

                [&_pre]:overflow-x-auto

                [&_h2]:text-3xl
                [&_h2]:font-playfair
                [&_h2]:font-bold
                [&_h2]:text-[#0B1120]
                [&_h2]:mt-10

                [&_h3]:text-xl
                [&_h3]:font-semibold
                [&_h3]:font-playfair
                [&_h3]:text-gray-800
                [&_h3]:mt-6

                [&_p]:mt-4
              "
              dangerouslySetInnerHTML={{
                __html: post.content,
              }}
            />

          </article>

        </div>

      </div>

      {/* LINE */}
      <div className="flex justify-center">
        <div className="w-full max-w-[1000px] h-[1px] bg-black/10"></div>
      </div>

      {/* TAGS + SHARE */}
      <div className="max-w-4xl mx-auto px-1">

        {/* TAGS */}
        <div
          className="
            flex
            flex-wrap

            items-center

            gap-3

            mt-6
            pt-10
          "
        >

          <h4
            className="
              text-gray-500
              font-bold
              text-[13px]
              tracking-[0.15em]
              whitespace-nowrap
            "
          >
            TAGS:
          </h4>

          {tags.map((tag: any) => (

            <span
              key={tag.ID}

              className="
                px-3
                py-1

                rounded-full

                bg-[#EEF4FF]

                text-[#2563EB]

                text-[12px]
                font-bold

                border border-[#D9E7FF]
              "
            >
              {tag.name}
            </span>

          ))}

        </div>

        {/* SHARE */}
        <div className="pt-8">
          <BlogShare slug={slug} />
        </div>

      </div>

    </section>

    {/* FULL WIDTH SECTIONS */}
    <RelatedBlogs currentSlug={slug} />

    <CTA />
  </>
);
}
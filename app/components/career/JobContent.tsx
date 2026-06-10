export default function JobContent({
  content,
}: {
  content: string;
}) {
  return (
    <article
            className="
              w-full
              max-w-4xl

              overflow-hidden

              px-4
              sm:px-6
            "
          >

    <div
      className="
        prose
        prose-lg
        lg:prose-xl

        max-w-none

        mx-auto

        text-gray-700

        leading-8

        [&>*]:max-w-full

        [&_img]:mx-auto
        [&_img]:rounded-2xl
        [&_img]:w-full
        [&_img]:h-auto
        [&_img]:object-cover

        [&_iframe]:max-w-full

        [&_table]:block
        [&_table]:overflow-x-auto

        [&_pre]:overflow-x-auto

        [&_h2]:text-3xl
        [&_h2]:md:text-4xl
        [&_h2]:font-playfair
        [&_h2]:font-bold
        [&_h2]:text-[#0B1120]
        [&_h2]:mt-14
        [&_h2]:mb-6
        [&_h2]:leading-tight

        [&_h3]:text-2xl
        [&_h3]:font-semibold
        [&_h3]:font-playfair
        [&_h3]:text-gray-800
        [&_h3]:mt-10
        [&_h3]:mb-4

        [&_p]:mt-6
        [&_p]:leading-8
        [&_p]:text-gray-700

        [&_ul]:mt-6
        [&_ul]:space-y-3

        [&_li]:leading-8

        [&_blockquote]:border-l-4
        [&_blockquote]:border-[#2563EB]
        [&_blockquote]:pl-6
        [&_blockquote]:italic
        [&_blockquote]:text-gray-600

        [&_a]:text-[#2563EB]
        [&_a]:font-medium
        [&_a]:no-underline
        hover:[&_a]:underline
      "

      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />

  </article>
  );
}
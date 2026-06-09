export default function JobContent({
  content,
}: {
  content: string;
}) {
  return (
    <article
      className="
        prose
        prose-lg
        max-w-none
        text-gray-700

        overflow-hidden

        [&_*]:max-w-full
        [&_*]:box-border

        [&_h2]:mt-12
        [&_h2]:mb-4
        [&_h2]:text-[22px]
        md:[&_h2]:text-[24px]
        [&_h2]:font-playfair
        [&_h2]:font-bold
        [&_h2]:text-[#0B1120]

        [&_h3]:text-lg
        md:[&_h3]:text-xl
        [&_h3]:font-semibold
        [&_h3]:font-playfair
        [&_h3]:text-gray-800
        [&_h3]:mt-6

        [&_p]:mt-4
        [&_p]:text-[15px]
        md:[&_p]:text-[16px]
        [&_p]:break-words

        [&_ul]:mt-4

        [&_li]:break-words

        [&_a]:break-all

        [&_img]:max-w-full
        [&_img]:h-auto

        [&_table]:block
        [&_table]:max-w-full
        [&_table]:overflow-x-auto

        [&_pre]:max-w-full
        [&_pre]:overflow-x-auto

        [&_iframe]:max-w-full
      "
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />
  );
}
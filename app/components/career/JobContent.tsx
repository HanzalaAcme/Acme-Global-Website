import { Star, Briefcase, CheckCircle } from "lucide-react";
export default function JobContent({ content }: { content: string }) {
  return (
    <article className="prose prose-lg max-w-none text-gray-700
      [&_h2]:mt-12 
      [&_h2]:mb-4
      [&_h2]:text-[24px]
      [&_h2]:font-playfair
      [&_h2]:font-bold
      [&_h2]:text-[#0B1120]
      [&_h2]:flex
      [&_h2]:items-center
      [&_h2]:gap-3

      [&_h3]:text-xl
      [&_h3]:font-semibold
      [&_h3]:font-playfair
      [&_h3]:text-gray-800
      [&_h3]:mt-6

      [&_p]:mt-4
      [&_p]:text-[16px]
      
      [&_ul]:mt-4
      [&_li]:flex
      [&_li]:items-start
      [&_li]:gap-2"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
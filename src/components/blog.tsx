import Image, { StaticImageData } from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import img1 from "@/assets/img-1.png";
import img2 from "@/assets/img-2.png";
import img3 from "@/assets/img-3.png";

export const Blog = () => {
  return (
    <div className="container mx-auto bg-[#BFE03E]">
      <div className="flex flex-col items-center space-y-14 p-20">
        <div className="space-y-2 text-center">
          <h6 className="font-heading font-semibold uppercase text-[#454C5F]">
            Business blog tips and tricks
          </h6>
          <h3 className="font-heading text-5xl font-semibold text-[#1C2436]">
            Our recent news & insights
          </h3>
        </div>
        <div className="flex gap-x-10">
          <BlogItem
            imgUrl={img1}
            title="Everything you need to know about webflow"
            duration={8}
            author="Ewell Torphy"
          />
          <BlogItem
            imgUrl={img2}
            title="Seven Signs you're in love with webflow"
            duration={12}
            author="Ewell Torphy"
          />
          <BlogItem
            imgUrl={img3}
            title="Learn how to make more money with webflow"
            duration={10}
            author="Ewell Torphy"
          />
        </div>
      </div>
    </div>
  );
};

interface BlogItem {
  duration: number;
  title: string;
  author: string;
  imgUrl: StaticImageData;
}

const BlogItem = ({ imgUrl, duration, title, author }: BlogItem) => {
  return (
    <div className="max-w-96 bg-white drop-shadow-sm">
      <Image src={imgUrl} alt={title} />
      <div className="p-6">
        <p className="font-heading text-xs font-semibold uppercase text-[#818A9C]">
          {duration} Min to read
        </p>
        <h5 className="mb-6 mt-[14px] font-heading text-2xl font-semibold capitalize text-[#1C2436]">
          {title}
        </h5>
        <div className="flex items-center gap-x-3">
          <Avatar className="size-6">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="font-sans text-sm font-medium capitalize text-[#1C2436]">
            {author}
          </p>
        </div>
      </div>
    </div>
  );
};

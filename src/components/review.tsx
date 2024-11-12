import { Star } from "lucide-react";

export const Review = () => {
  return (
    <div className="container mx-auto bg-[#F6F6F9]">
      <div className="flex flex-col items-center space-y-14 p-20">
        <div className="max-w-md space-y-2 text-center">
          <h6 className="font-heading font-semibold text-[#586174]">
            CUSTOMER REVIEW
          </h6>
          <h3 className="font-heading text-5xl font-semibold text-[#1C2436]">
            Customers love the ease and simplicity
          </h3>
        </div>
        <div className="flex gap-x-10">
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
        </div>
      </div>
    </div>
  );
};

const ReviewItem = () => {
  return (
    <div className="flex flex-col gap-y-7 bg-white p-8">
      <div className="flex items-center gap-x-3">
        <Star size={18} color="#BFE03E" fill="#BFE03E" />
        <Star size={18} color="#BFE03E" fill="#BFE03E" />
        <Star size={18} color="#BFE03E" fill="#BFE03E" />
        <Star size={18} color="#BFE03E" fill="#BFE03E" />
        <Star size={18} color="#BFE03E" fill="#BFE03E" />
      </div>
      <p className="font-sans text-lg text-[#1C2436]">
        Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore.
      </p>
      <div className="space-y-1">
        <p className="font-sans font-medium text-[#454C5F]">Rated 5/5</p>
        <p className="font-sans text-sm text-[#586174]">from over 40 review</p>
      </div>
    </div>
  );
};

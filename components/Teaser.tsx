import { storyblokEditable } from "@storyblok/react";

const Teaser = ({ blok }: { blok: any }) => {
  return (
    <h2 className="text-3xl font-bold underline" {...storyblokEditable(blok)}>
      {blok.headline}
    </h2>
  );
};

export default Teaser;

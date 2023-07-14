import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Page = ({ blok }: { blok: any }) => (
  <main className="text-center mt-4" {...storyblokEditable(blok)}>
    {blok.body?.map((nestedBlok: any) => (
      <StoryblokComponent key={nestedBlok._uid} blok={nestedBlok} />
    ))}
  </main>
);
export default Page;

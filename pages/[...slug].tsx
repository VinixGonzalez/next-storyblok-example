import Head from "next/head";
import Layout from "../components/Layout";

import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

export default function Page({ story }: { story: any }) {
  story = useStoryblokState(story);

  return (
    <div>
      <Head>
        <title>{story ? story.name : "My Site"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <StoryblokComponent blok={story.content} />
      </Layout>
    </div>
  );
}

export async function getServerSideProps({ params }: { params: any }) {
  let slug = params.slug ? params.slug.join("/") : "home";

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
    version: "draft",
  });

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
      revalidate: 3600,
    },
  };
}

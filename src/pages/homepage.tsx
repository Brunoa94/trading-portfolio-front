import useGetLiveAssets from "@/components/features/live-assets/getLiveAssets/useGetLiveAssets";
import Container from "@/components/layout/container";

function HomepagePage() {
  const { messages } = useGetLiveAssets();

  return <Container>{messages.length}</Container>;
}

export default HomepagePage;

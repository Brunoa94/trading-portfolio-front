import useGetLiveAssets from "@/components/features/live-assets/getLiveAssets/useGetLiveAssets";
import Container from "@/components/layout/container";
import type { LiveAsset } from "@/types/liveAsset";

function MarketPage() {
  const { liveAssets } = useGetLiveAssets();

  return (
    <Container>
      {liveAssets.map((liveAsset: LiveAsset) => (
        <span>{liveAsset.symbol}</span>
      ))}
    </Container>
  );
}

export default MarketPage;

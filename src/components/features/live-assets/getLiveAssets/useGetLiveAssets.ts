import { useEffect, useState } from "react";
import { socket } from "@/client/socketClient";
import { LiveAssetsResponseSchema } from "@/schemas/liveAsset";
import type { LiveAssetT } from "@/types/liveAsset";

export default function useGetLiveAssets() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [liveAssets, setLiveAssets] = useState<LiveAssetT[]>([]);

  useEffect(() => {
    socket.connect();

    function onConnect() {
      setIsConnected(true);
      console.log("Socket connected");
    }

    function onDisconnect() {
      setIsConnected(false);
      console.log("Socket disconnected");
    }

    function onMessage(data: unknown) {
      try {
        const parsedData = LiveAssetsResponseSchema.parse(data);
        setLiveAssets(parsedData.live_assets);
      } catch (error) {
        console.error("Failed to parse live assets data:", error);
      }
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("live_assets", onMessage);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("live_assets", onMessage);
      socket.disconnect();
    };
  }, []);

  return {
    liveAssets,
    isConnected,
  };
}

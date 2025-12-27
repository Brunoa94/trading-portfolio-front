import { useEffect, useRef, useState } from "react";

export function useIsFlickering(number: number) {
  const [isFlickering, setIsFlickering] = useState(false);
  const [flickerType, setFlickerType] = useState<"positive" | "negative">(
    "positive"
  );
  const prevNumberRef = useRef(number);

  useEffect(() => {
    if (prevNumberRef.current !== number) {
      const increased = number > prevNumberRef.current;
      setFlickerType(increased ? "positive" : "negative");
      setIsFlickering(true);

      const timer = setTimeout(() => {
        setIsFlickering(false);
      }, 500);

      prevNumberRef.current = number;
      return () => clearTimeout(timer);
    }
  }, [number]);

  return { isFlickering, flickerType };
}

import { useEffect, useState } from "react";
import { Dimensions } from "react-native";

const minWidth = 700
const window = Dimensions.get("window").width > minWidth

const useDimensions = () => {
  const [dimensions, setDimensions] = useState(window);

  const onChange = ({ window }) => {
    setDimensions(window.width > minWidth);
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });

  return dimensions;
};

export default useDimensions;

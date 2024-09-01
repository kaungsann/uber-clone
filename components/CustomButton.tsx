import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { ButtonProps } from "@/types/type"; // Assuming you have this type defined

const getBgVariantStyle = (variant: ButtonProps["bgVariant"]) => {
  switch (variant) {
    case "secondary":
      return "bg-gray-500";
    case "danger":
      return "bg-red-500";
    case "success":
      return "bg-green-500";
    case "outline":
      return "bg-transparent border-neutral-300 bg-gray-100 border-[0.5px]";
    default:
      return "bg-[#0286ff]";
  }
};

const getTextVariantStyle = (variant: ButtonProps["textVariant"]) => {
  switch (variant) {
    case "primary":
      return "text-black";
    case "secondary":
      return "text-gray-100";
    case "danger":
      return "text-red-100";
    case "success":
      return "text-green-100";
    default:
      return "text-white";
  }
};

const CustomButton = ({
  onPress,
  title,
  bgVariant = "primary",
  textVariant = "default",
  IconLeft,
  IconRight,
  className,
  ...props
}: ButtonProps) => {
  // Adding return statement here
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`w-full mb-8 rounded-full p-4 flex flex-row justify-center items-center shadow-md shadow-neutral-400/70 ${getBgVariantStyle(
        bgVariant
      )} ${className}`}
      {...props} // Spread any additional props to the TouchableOpacity
    >
      {IconLeft && <IconLeft />}
      <Text className={`text-xl font-bold ${getTextVariantStyle(textVariant)}`}>
        {title}
      </Text>
      {IconRight && <IconRight />}
    </TouchableOpacity>
  );
};

export default CustomButton;

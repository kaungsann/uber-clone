import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useRef, useState } from "react";
import Swiper from "react-native-swiper";
import { onboarding } from "@/constants";
import CustomButton from "@/components/CustomButton";

const Onboarding = () => {
  const swiperRef = useRef<Swiper>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SafeAreaView className="flex h-full justify-between items-center bg-white shadow-md">
      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/sign-up");
        }}
        className="w-full flex justify-end items-end p-5"
      >
        <Text
          className="text-xl font-JakartaBold font-semibold text-slate-500
        "
        >
          Skip
        </Text>
      </TouchableOpacity>

      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full" />
        }
        activeDot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#0286ff] rounded-full" />
        }
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map((item) => (
          <View key={item.id} className="flex justify-center items-center p-5">
            <Image
              source={item.image}
              className="w-full h-[450px]"
              resizeMode="contain"
            />
            <View className="flex flex-row justify-center items-center mt-10 w-full">
              <Text className="text-3xl font-bold text-black mx-10">
                {item.title}
              </Text>
            </View>
            <Text className="text-lg font-JakartaSemiBold text-center text-[#858585] mx-10 mt-3">
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper>
      <CustomButton title="Next" className="w-11/12 mt-4" />
    </SafeAreaView>
  );
};

export default Onboarding;

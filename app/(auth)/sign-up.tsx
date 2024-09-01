import { View, ScrollView, Image, Text } from "react-native";
import { images } from "@/constants";
import { icons } from "@/constants";
import InputField from "@/components/InputField";
import { useState } from "react";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
import OAuth from "@/components/OAuth";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSignUpPress = () => {};
  return (
    <ScrollView className="flex-1 bg-white">
      <View>
        <View className="relative w-full h-[350px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[350px]" />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5 ">
            Create Your Account
          </Text>
        </View>

        <View className="p-5">
          <InputField
            label="Name"
            placeholder="Enter your name"
            icon={icons.person}
            value={form.name}
            onChangeText={(value) => setForm({ ...form, name: value })}
          />
          <InputField
            label="Email"
            placeholder="Enter your email"
            icon={icons.email}
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <InputField
            label="Password"
            placeholder="Enter your password"
            icon={icons.lock}
            secureTextEntry={true}
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />

          <CustomButton
            title="Sign Up"
            onPress={onSignUpPress}
            className="mt-6"
          />

          {/* 0 Auth */}

          <OAuth />

          <Link
            href="/sign-in"
            className="text-lg text-center text-general-100 mt-4"
          >
            <Text>Already have an account? </Text>
            <Text className="text-primary-500">login</Text>
          </Link>
        </View>

        {/* Verification Modal  */}
      </View>
    </ScrollView>
  );
};

export default SignUp;

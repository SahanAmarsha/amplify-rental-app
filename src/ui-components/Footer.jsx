/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Image, Text, View } from "@aws-amplify/ui-react";
export default function Footer(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="1459px"
      height="230px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <Image
        width="165px"
        height="174px"
        position="absolute"
        left="203px"
        top="28px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "View.Image[0]")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="40px"
        fontWeight="700"
        color="rgba(0,85.00004053115845,102.00000151991844,1)"
        lineHeight="48px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="480px"
        position="absolute"
        left="730px"
        top="28px"
        padding="0px 0px 0px 0px"
        children="Home Rental App"
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
      <Button
        position="absolute"
        display="flex"
        width="224px"
        left="858px"
        top="127px"
        size="large"
        variation="primary"
        children="Contact Us"
        {...getOverrideProps(overrides, "View.Button[0]")}
      ></Button>
    </View>
  );
}

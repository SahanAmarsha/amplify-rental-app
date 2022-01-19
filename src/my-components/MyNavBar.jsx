/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {getOverrideProps} from "@aws-amplify/ui-react/internal";
import {
    Button,
    Flex,
    IconNotifications,
    Image,
    SearchField,
    Text,
} from "@aws-amplify/ui-react";
import { useNavigate } from 'react-router-dom';

export default function NavBar(props) {
    const {overrides: overridesProp, ...rest} = props;
    const navigate = useNavigate();

    const overrides = {...overridesProp};
    return (
        <Flex
            gap="20px"
            direction="row"
            width="1440px"
            justifyContent="center"
            alignItems="center"
            position="relative"
            padding="24px 32px 24px 32px"
            backgroundColor="rgba(255,255,255,1)"
            {...rest}
            {...getOverrideProps(overrides, "Flex")}
        >
            <Image
                width="57px"
                height="50px"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                src="https://cdn-icons-png.flaticon.com/512/1441/1441333.png"
                {...getOverrideProps(overrides, "Flex.Image[0]")}
            ></Image>
            <Flex
                gap="2px"
                direction="row"
                height="50px"
                justifyContent="center"
                alignItems="center"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Flex.Flex[0]")}
            >
                <Text
                    fontFamily="Inter"
                    fontSize="20px"
                    fontWeight="400"
                    color="rgba(0,0,0,1)"
                    textTransform="capitalize"
                    lineHeight="23.4375px"
                    textAlign="left"
                    display="flex"
                    direction="column"
                    justifyContent="flex-start"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    children="logo"
                    {...getOverrideProps(overrides, "Flex.Flex[0].Text[0]")}
                >Home Rental App</Text>
                <Button
                    onClick={() => {
                        navigate("/")
                    }}
                    ariaLabel=""
                    variation="link"
                    style={{margin: "1rem 0.5rem"}}
                >
                    Dashboard
                </Button>
                <Button
                    onClick={() => {
                        navigate("/add-home");
                    }}
                    variation="link"
                    style={{margin: "1rem 0.5rem"}}
                >
                    Add New Home
                </Button>
            </Flex>
            <Flex
                gap="32px"
                direction="row"
                width="1111px"
                justifyContent="flex-end"
                alignItems="center"
                grow="1"
                basis="1111px"
                height="45px"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Flex.Flex[1]")}
            >
                <SearchField
                    display="flex"
                    width="300px"
                    shrink="0"
                    height="32px"
                    size="default"
                    labelHidden="true"
                    variation="default"
                    {...getOverrideProps(overrides, "Flex.Flex[1].SearchField[0]")}
                ></SearchField>
                <IconNotifications
                    width="24px"
                    height="24px"
                    shrink="0"
                    overflow="hidden"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    color="rgba(51.00000075995922,51.00000075995922,51.00000075995922,1)"
                    type="notifications"
                    fontSize="24px"
                    {...getOverrideProps(overrides, "Flex.Flex[1].IconNotifications[0]")}
                ></IconNotifications>
                <Image
                    src="https://www.bootdey.com/app/webroot/img/Content/avatar/avatar1.png"
                    width="45px"
                    height="45px"
                    shrink="0"
                    position="relative"
                    borderRadius="160px"
                    padding="0px 0px 0px 0px"
                    {...getOverrideProps(overrides, "Flex.Flex[1].Image[0]")}
                ></Image>
            </Flex>
        </Flex>
    );
}

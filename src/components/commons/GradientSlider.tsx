import {
  Box,
  Image,
  Slider,
  SliderProps,
  SliderThumb,
  SliderTrack,
  Tooltip,
} from "@chakra-ui/react";
import { useState } from "react";
import FormatService from "../../services/format";

const CustomSlider = (props: SliderProps) => {
  const [toolTipBg, setTooltipBg] = useState<string>("red");
  const [isOpenTooltip, setIsOpenTooltip] = useState<boolean>(false);
  const [sliderValue, setSliderValue] = useState<number>(0);
  const [arrowBg, setArrowBg] = useState<string>();

  const formatService = new FormatService();

  const handleSliderChange = (value: number) => {
    setSliderValue(value);
    const start = 11000;
    const difference = 14500 - start;
    const exactValue = value - start;

    switch (true) {
      case exactValue > 0 && exactValue <= (difference * 25) / 100:
        setTooltipBg("linear-gradient(90deg, #F34848, rgba(255, 230, 0, 1))");
        setArrowBg("#f36748");
        break;
      case exactValue > (difference * 25) / 100 &&
        exactValue <= (difference * 50) / 100:
        setTooltipBg("linear-gradient(90deg, #F79E1B, #FFE600)");
        setArrowBg("#f2c618");
        break;
      case exactValue > (difference * 50) / 100 &&
        exactValue <= (difference * 75) / 100:
        setTooltipBg("linear-gradient(90deg, #F3EC4C, #38DE78)");
        setArrowBg("#86e314");

        break;
      case exactValue > (difference * 75) / 100:
        setTooltipBg("linear-gradient(90deg, #DCE40F, #19D965)");
        setArrowBg("#38DE78");

        break;
    }
  };

  return (
    <Slider
      min={11000}
      max={14500}
      onChange={handleSliderChange}
      {...props}
      onFocus={() => setIsOpenTooltip(true)}
      onBlur={() => setIsOpenTooltip(false)}
    >
      <SliderTrack
        bg="url('/slider-bar.png')"
        bgSize="contain"
        backgroundRepeat="no-repeat"
        height="20px"
      ></SliderTrack>
      <Tooltip
        id="tooltip-slider"
        isOpen={isOpenTooltip}
        label={`£${formatService.addComma(sliderValue)}`}
        w="90vw"
        textAlign="center"
        fontSize="30px"
        placement="top"
        borderRadius="10px"
        padding="22px 24px"
        shadow="none"
        bg={toolTipBg}
        isDisabled={false}
      >
        <SliderThumb
          boxSize={8}
          padding={0}
          position="relative"
          className="slider-handle"
        >
          {isOpenTooltip && (
            <Box
              width="20px"
              height="20px"
              transform="rotate(45deg)"
              bg={arrowBg}
              zIndex="99"
              pos="absolute"
              top="-25px"
            />
          )}
          <Image src="/slider-button.png" />
        </SliderThumb>
      </Tooltip>
    </Slider>
  );
};

export default CustomSlider;

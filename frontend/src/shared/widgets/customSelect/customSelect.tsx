"use client";
import React, { useState } from "react";
// import Select from "react-select";
import Select, { MultiValue, SingleValue } from "react-select";
import { MyBordersRadius, MyColors, MySpacing } from "@/shared/styles";
import useCustomSelect from "./hooks/useCustomSelect";
import { useIntl } from "react-intl";

export type OptionType = { value: number; label: string };
export type OptionsType = OptionType[];

export default function CustomSelect({
  placeholder,
  isMulti = true,
  defaultValue = undefined,
  customSelectController,
}: {
  placeholder: string;
  isMulti?: boolean;
  defaultValue?: undefined | OptionType;
  customSelectController: ReturnType<typeof useCustomSelect>;
}) {
  return (
    <Select
      value={customSelectController.selected}
      onChange={customSelectController.setSelected}
      closeMenuOnSelect={true}
      isMulti={isMulti}
      options={customSelectController.options}
      noOptionsMessage={() => <h3>пусто</h3>}
      components={{}}
      placeholder={placeholder}
      defaultValue={defaultValue}
      closeMenuOnScroll
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          backgroundColor: MyColors.bg3,
          borderWidth: 0,
          borderColor: MyColors.green,
          outline: "none",
          outlineColor: MyColors.green,
          flexDirection: "row",
          borderRadius: MyBordersRadius.r15,
          display: "flex",
          paddingTop: MySpacing.s5,
          paddingBottom: MySpacing.s5,
        }),
        menu: (baseStyles, state) => ({
          ...baseStyles,
          backgroundColor: MyColors.bg3,
          borderWidth: 0,
          outline: "none",
          borderRadius: MyBordersRadius.r20,
        }),
        option: (baseStyles, state) => ({
          ...baseStyles,
          backgroundColor: "transparent",
          borderWidth: 0,
          outline: "none",
          color: MyColors.green,
        }),
        multiValue: (baseStyles, state) => ({
          ...baseStyles,
          backgroundColor: MyColors.bg3,
          color: MyColors.green,
        }),
        multiValueLabel: (baseStyles, state) => ({
          ...baseStyles,
          backgroundColor: MyColors.bg3,
          color: MyColors.green,
        }),
        input: (baseStyles, state) => ({
          ...baseStyles,
          color: MyColors.green,
        }),
        singleValue: (baseStyles, state) => ({
          ...baseStyles,
          color: MyColors.green,
        }),
      }}
    />
  );
}

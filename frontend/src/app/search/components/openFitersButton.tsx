import { MyBordersRadius, MyColors } from "@/shared/styles";
import { Videos } from "next/dist/lib/metadata/types/metadata-types";
import Image from "next/image";
import FilterIcon from "../../../../public/icons/filter.svg";

export default function OpenFiltersButton({
  onClick,
}: {
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        height: "100%",
        width: "20%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: MyColors.bg2,
        borderRadius: MyBordersRadius.r15,
      }}
    >
      <FilterIcon stroke={MyColors.grey}></FilterIcon>
    </div>
  );
}

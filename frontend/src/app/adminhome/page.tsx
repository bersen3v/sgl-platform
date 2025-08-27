"use client";
import { MySpacing } from "@/shared/styles";
import CustomBackButton from "@/shared/widgets/customBackButton/customBackButton";
import DescriptionButton from "@/shared/widgets/descriptionButton/descriptionButton";
import { useRouter } from "next/navigation";

export default function AdminHomePage() {
  const router = useRouter();
  return (
    <div
      style={{
        padding: MySpacing.s25,
        paddingTop: 0,
        gap: MySpacing.s10,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CustomBackButton></CustomBackButton>
      <div style={{ display: "flex", gap: MySpacing.s10 }}>
        <DescriptionButton
          label={"Мероприятия"}
          btnLabel={"Открыть"}
          description={
            "Здесь можно создавать/редактировать/удалять мероприятия"
          }
          onClick={() => {
            router.push("/adminhome/manageEvents");
          }}
        ></DescriptionButton>
        <DescriptionButton
          label={"Пользователи"}
          btnLabel={"Открыть"}
          description={
            "Здесь можно создавать/редактировать/удалять пользователей"
          }
          onClick={() => {
            router.push("/adminhome/manageUsers");
          }}
        ></DescriptionButton>
        <DescriptionButton
          label={"Продажи"}
          btnLabel={"Открыть"}
          description={
            "Здесь можно добавлять мероприятия в аккаунты пользователей"
          }
          onClick={() => {
            router.push("/adminhome/manageSales");
          }}
        ></DescriptionButton>
      </div>
    </div>
  );
}

import { MyBordersRadius, MySpacing } from "@/shared/styles";
import { MyTypography } from "@/shared/styles/MyTypography/MyTypography";
import CustomInput from "../customInput/customInput";
import useInputControllers from "@/app/adminhome/manageEvents/createEvents/hooks/useInputControllers";
import CustomMultilineInput from "../customMultilineInput/customMultilineInput";
import { CustomButton } from "../customButton";
import { useRef, useState } from "react";

export default function EventEditCreateRows({
  createEditControllers,
}: {
  createEditControllers: ReturnType<typeof useInputControllers>;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files ?? undefined;

    if (files) {
      const fileUri = URL.createObjectURL(files[0]);
      createEditControllers.setPhotoUrl(fileUri);
      createEditControllers.setPhotoFile(files[0]);
    }
  };

  const Title = ({ title }: { title: string }) => {
    return (
      <h2 style={{ ...MyTypography.Helvetica19Medium, padding: MySpacing.s10 }}>
        {title}
      </h2>
    );
  };

  return (
    <>
      <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
        <img
          src={createEditControllers.photoUrl}
          height={100}
          style={{ borderRadius: MyBordersRadius.r10, objectFit: "cover" }}
        ></img>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{
            display: "none",
          }}
          onChange={handleFileChange}
        />
        <div>
          <CustomButton
            outline={true}
            onClick={handleUpload}
            label={"Загрузить фото"}
          ></CustomButton>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: MySpacing.s10,
          flexDirection: "column",
        }}
      >
        <Title title={"Название мероприятия"}></Title>
        <CustomInput
          placeholder="RU"
          controller={createEditControllers.nameControllerRu}
        ></CustomInput>
        <CustomInput
          placeholder="EN"
          controller={createEditControllers.nameControllerEn}
        ></CustomInput>
        <CustomInput
          placeholder="KZ"
          controller={createEditControllers.nameControllerKz}
        ></CustomInput>
      </div>

      <div
        style={{
          display: "flex",
          gap: MySpacing.s10,
          flexDirection: "column",
        }}
      >
        <Title title={"Описание мероприятия"}></Title>

        <CustomMultilineInput
          placeholder="RU"
          controller={createEditControllers.descriptionControllerRu}
        ></CustomMultilineInput>
        <CustomMultilineInput
          placeholder="EN"
          controller={createEditControllers.descriptionControllerEn}
        ></CustomMultilineInput>
        <CustomMultilineInput
          placeholder="KZ"
          controller={createEditControllers.descriptionControllerKz}
        ></CustomMultilineInput>
      </div>

      <div
        style={{
          display: "flex",
          gap: MySpacing.s10,
          flexDirection: "column",
        }}
      >
        <Title title={"Организатор мероприятия"}></Title>
        <CustomInput
          placeholder="EN"
          controller={createEditControllers.managerController}
        ></CustomInput>
      </div>

      <div
        style={{
          display: "flex",
          gap: MySpacing.s10,
          flexDirection: "column",
        }}
      >
        <Title title={"Разработчик"}></Title>
        <CustomInput
          placeholder="EN"
          controller={createEditControllers.developerController}
        ></CustomInput>
      </div>

      <div
        style={{
          display: "flex",
          gap: MySpacing.s10,
          flexDirection: "column",
        }}
      >
        <Title title={"Место проведения мероприятия"}></Title>
        <CustomInput
          placeholder="RU"
          controller={createEditControllers.placeControllerRu}
        ></CustomInput>
        <CustomInput
          placeholder="EN"
          controller={createEditControllers.placeControllerEn}
        ></CustomInput>
        <CustomInput
          placeholder="KZ"
          controller={createEditControllers.placeControllerKz}
        ></CustomInput>
      </div>
      <div
        style={{
          display: "flex",
          gap: MySpacing.s10,
          flexDirection: "column",
        }}
      >
        <Title title={"Дисциплина"}></Title>
        <CustomInput
          placeholder="EN"
          controller={createEditControllers.disciplineController}
        ></CustomInput>
      </div>
      <div
        style={{
          display: "flex",
          gap: MySpacing.s10,
          flexDirection: "column",
        }}
      >
        <Title title={"Сумма выигрыша"}></Title>
        <CustomInput
          type="number"
          placeholder="USD"
          controller={createEditControllers.prizeController}
        ></CustomInput>
      </div>

      <div
        style={{
          display: "flex",
          gap: MySpacing.s10,
          flexDirection: "column",
        }}
      >
        <Title title={"Даты начала и конца события"}></Title>
        <CustomInput
          type="date"
          controller={createEditControllers.startDateInputController}
        ></CustomInput>

        <CustomInput
          type="date"
          controller={createEditControllers.endtDateInputController}
        ></CustomInput>
      </div>
    </>
  );
}

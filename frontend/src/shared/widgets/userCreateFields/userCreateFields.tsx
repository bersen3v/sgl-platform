import { MyBordersRadius, MySpacing } from "@/shared/styles";
import { MyTypography } from "@/shared/styles/MyTypography/MyTypography";
import CustomInput from "../customInput/customInput";
import useUserCustomInputs from "@/app/adminhome/manageUsers/createUser/hook/useUserCustomInputs";
import { CustomButton } from "../customButton";
import { useRef } from "react";
import CustomCheckBox from "../customCheckBox/customCheckBox";

export default function UserCreateFields({
  userFieldsController,
}: {
  userFieldsController: ReturnType<typeof useUserCustomInputs>;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files ?? undefined;

    if (files) {
      const fileUri = URL.createObjectURL(files[0]);
      userFieldsController.setPhotoUrl(fileUri);
      userFieldsController.setPhotoFile(files[0]);
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: MySpacing.s25,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: MySpacing.s10,
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
          <img
            src={userFieldsController.photoUrl}
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
        <Title title={"Имя и фамилия"}></Title>

        <CustomInput
          placeholder="Имя"
          controller={userFieldsController.firstNameController}
        ></CustomInput>
        <CustomInput
          placeholder="Фамилия"
          controller={userFieldsController.lastNameController}
        ></CustomInput>
      </div>

      <div
        style={{
          display: "flex",
          gap: MySpacing.s10,
          flexDirection: "column",
        }}
      >
        <Title title={"Компания"}></Title>
        <CustomInput
          placeholder="Компания"
          controller={userFieldsController.companyController}
        ></CustomInput>
      </div>

      <div
        style={{
          display: "flex",
          gap: MySpacing.s10,
          flexDirection: "column",
        }}
      >
        <Title title={"Контакты"}></Title>
        <CustomInput
          placeholder="Почта"
          controller={userFieldsController.mailController}
        ></CustomInput>
        <CustomInput
          placeholder="Телефон"
          controller={userFieldsController.phoneController}
        ></CustomInput>
      </div>

      <div
        style={{
          display: "flex",
          gap: MySpacing.s10,
          flexDirection: "column",
        }}
      >
        <Title title={"Логин и пароль"}></Title>
        <CustomInput
          placeholder="Логин"
          controller={userFieldsController.loginController}
        ></CustomInput>
        <CustomInput
          placeholder="Пароль"
          controller={userFieldsController.passwordController}
        ></CustomInput>
      </div>

      <div
        style={{
          display: "flex",
          gap: MySpacing.s10,
          flexDirection: "column",
        }}
      >
        <Title title={"Права администратора"}></Title>
        <div
          style={{ display: "flex", alignItems: "center", gap: MySpacing.s10 }}
        >
          <CustomCheckBox
            isActive={userFieldsController.isAdmin}
            onPress={() => {
              userFieldsController.setIsAdmin(!userFieldsController.isAdmin);
            }}
          ></CustomCheckBox>
          <h2 style={{ ...MyTypography.Helvetica19Medium }}>
            Является администратором
          </h2>
        </div>
        {/* <CustomInput
          placeholder="Администратор"
          controller={userFieldsController.loginController}
        ></CustomInput> */}
      </div>
    </div>
  );
}

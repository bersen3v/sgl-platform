import { userApiManager } from "@/entities/user/api/userApiManager";
import { User } from "@/entities/user/model/user";
import { baseUrl } from "@/shared/network/config/baseUrl";
import useRequest from "@/shared/network/hooks/useRequest";
import { MyBordersRadius, MyColors, MySpacing } from "@/shared/styles";
import { MyTypography } from "@/shared/styles/MyTypography/MyTypography";
import { CustomButton } from "@/shared/widgets/customButton";
import { useRouter } from "next/navigation";
import { use } from "react";
import { useIntl } from "react-intl";

export default function UserInfo({
  user,
  isMobile = false,
  maxHeight = undefined,
  isAdmin = false,
  onRemove = () => {},
}: {
  user: User;
  isMobile?: boolean;
  maxHeight?: number;
  isAdmin?: boolean;
  onRemove?: (userId: string) => void;
}) {
  const router = useRouter();
  const intl = useIntl();
  return (
    <div
      style={{
        backgroundColor: MyColors.bg2,
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        padding: MySpacing.s10,
        borderRadius: MyBordersRadius.r20,
        gap: MySpacing.s15,
        maxHeight: maxHeight,
      }}
    >
      {!isAdmin && (
        <img
          style={{
            // height: isAdmin ? "100%" : "auto",
            width: isMobile ? "100%" : "30%",
            borderRadius: MyBordersRadius.r10,
            objectFit: "cover",
          }}
          src={baseUrl + `/getPhoto?id=${user.previewPhoto}`}
          alt={"Превью юзера"}
        />
      )}

      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: MySpacing.s10,
            gap: MySpacing.s10,
          }}
        >
          <h2 style={{ ...MyTypography.Helvetica19Medium }}>
            {user.firstName} {user.lastName}
          </h2>
          <div
            style={{
              display: "flex",
              gap: MySpacing.s5,
              flexDirection: "column",
            }}
          >
            {isAdmin && (
              <h2 style={{ ...MyTypography.Helvetica14Medium }}>
                id: {user.id}
              </h2>
            )}

            <h2 style={{ ...MyTypography.Helvetica14Medium }}>
              {user.company}
            </h2>
            <h2 style={{ ...MyTypography.Helvetica14Medium }}>{user.mail}</h2>
            <h2 style={{ ...MyTypography.Helvetica14Medium }}>{user.phone}</h2>
            <h2 style={{ ...MyTypography.Helvetica14Medium }}>
              {user.isAdmin === 1 && "Администратор"}
            </h2>
            {isAdmin && (
              <>
                {" "}
                <h2 style={{ ...MyTypography.Helvetica14Medium }}>
                  Логин: {user.login}
                </h2>
                <h2 style={{ ...MyTypography.Helvetica14Medium }}>
                  Пароль: {user.password}
                </h2>
              </>
            )}
          </div>
        </div>
        {isAdmin && (
          <div
            style={{
              display: "flex",
              gap: MySpacing.s5,
              flexDirection: "column",
            }}
          >
            <CustomButton
              onClick={() => {
                router.push(`/user/${user.id}`);
              }}
              label={"Открыть"}
            ></CustomButton>
            <CustomButton
              onClick={() => {
                router.push(`/adminhome/manageUsers/editUser/${user.id}`);
              }}
              label={"Редактировать"}
            ></CustomButton>
            <CustomButton
              onClick={() => {
                onRemove(user.id);
              }}
              label={"Удалить"}
            ></CustomButton>
          </div>
        )}
      </div>
    </div>
  );
}

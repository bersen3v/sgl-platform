import { GameEvent } from "@/entities/gameEvent/model/gameEvent";
import { saleApiManager } from "@/entities/sale/api/saleApiManager";
import { User } from "@/entities/user/model/user";
import { useMutateRequest } from "@/shared/network/hooks/useMutateRequest";
import { MySpacing } from "@/shared/styles";
import CustomBackButton from "@/shared/widgets/customBackButton/customBackButton";
import { CustomButton } from "@/shared/widgets/customButton";
import CustomSelect, {
  OptionsType,
  OptionType,
} from "@/shared/widgets/customSelect/customSelect";
import useCustomSelect from "@/shared/widgets/customSelect/hooks/useCustomSelect";
import { useRouter } from "next/navigation";
import { MultiValue, SingleValue } from "react-select";

export default function CreateSalePageView({
  users,
  events,
}: {
  users: User[];
  events: GameEvent[];
}) {
  const router = useRouter();
  const [createSaleRequest, mutateCreateSaleRequest] = useMutateRequest(
    saleApiManager.createSale,
    {
      onSuccess: () => {
        router.back();
      },
    }
  );

  const usersOptions = users.map((user) => {
    return {
      label: `${user.firstName} ${user.lastName}`,
      value: Number(user.id),
    };
  }) as OptionsType;

  const eventOptions = events.map((event) => {
    return {
      label: event.name.ru,
      value: Number(event.id),
    };
  }) as OptionsType;

  const usersSelectController = useCustomSelect({
    options: usersOptions,
    onChange: () => {},
  });

  const eventsSelectController = useCustomSelect({
    options: eventOptions,
    onChange: () => {},
  });

  return (
    <div
      style={{
        display: "flex",
        padding: MySpacing.s25,
        paddingTop: 0,
        flexDirection: "column",
        gap: MySpacing.s10,
      }}
    >
      <CustomBackButton></CustomBackButton>
      <div style={{ display: "flex", gap: MySpacing.s10, flexGrow: 1 }}>
        <CustomSelect
          isMulti={false}
          placeholder={"Юзеры"}
          customSelectController={usersSelectController}
        ></CustomSelect>
        <CustomSelect
          isMulti={false}
          placeholder={"События"}
          customSelectController={eventsSelectController}
        ></CustomSelect>
      </div>
      <CustomButton
        onClick={() => {
          mutateCreateSaleRequest({
            userId: Number(
              (usersSelectController.selected as SingleValue<OptionType>)?.value
            ),
            eventId: Number(
              (eventsSelectController.selected as SingleValue<OptionType>)
                ?.value
            ),
            time: new Date().getTime(),
          });
        }}
        label={"Добавить"}
      ></CustomButton>
    </div>
  );
}

import { MyBordersRadius } from "@/shared/styles";
import { GameEvent } from "../../model/gameEvent";
import { baseUrl } from "@/shared/network/config/baseUrl";

export default function EventPreviewImage({ event }: { event: GameEvent }) {
  return (
    <img
      style={{
        width: "100%",
        height: "50%",
        borderRadius: MyBordersRadius.r10,
        objectFit: "cover",
      }}
      src={`${baseUrl}/getPhoto?id=${event.previewPhoto}`}
      alt={"Превью эвента"}
    />
  );
}

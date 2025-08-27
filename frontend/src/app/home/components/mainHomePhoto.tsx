export default function MainHomePhoto({
  isMobile = false,
}: {
  isMobile?: boolean;
}) {
  return (
    <img
      src="/icons/mainpage.png"
      style={{
        width: isMobile ? "100%" : "30%",
        objectFit: "cover",
      }}
    ></img>
  );
}

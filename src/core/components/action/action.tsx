import { usePhone } from "../../../features/phone/hooks/use.phone";

export function Action() {
  const { isCalling: isCalling, display } = usePhone();
  return (
    <>
      <a
        href="#"
        className={`call ${
          isCalling ? "" : display.length === 9 ? "active" : ""
        }`}
      >
        Call
      </a>
      <a href="#" className={`hang ${isCalling ? "active" : ""}`}>
        Hang Up
      </a>
    </>
  );
}

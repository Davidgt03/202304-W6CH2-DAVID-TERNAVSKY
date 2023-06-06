import { usePhone } from "../../../features/phone/hooks/use.phone";

export function Info() {
  const { isCalling: isCalling } = usePhone();
  return <span className="message">{isCalling ? "Calling" : ""}</span>;
}

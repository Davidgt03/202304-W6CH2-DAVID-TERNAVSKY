import { usePhone } from "../../../features/phone/hooks/use.phone";

export function Display() {
  const { display } = usePhone();

  return <span className="'number">{display}</span>;
}

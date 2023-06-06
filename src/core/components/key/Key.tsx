import { usePhone } from "../../../features/phone/hooks/use.phone";

type PropsType = {
  item: string;
};

export function Key({ item }: PropsType) {
  const { isCalling, handleAddNumber } = usePhone();

  function handleClick() {
    if (!isCalling) handleAddNumber(item);
  }

  return (
    <>
      <li>
        {item !== "delete" ? (
          <button className="key" onClick={handleClick}>
            {item}
          </button>
        ) : (
          <button className="key big">{item}</button>
        )}
      </li>
    </>
  );
}

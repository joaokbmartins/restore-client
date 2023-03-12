interface IProps {
  value: number;
}

const formatValue = (value: number): string[] => {
  const valueStr = String(value);
  const { length } = valueStr;
  const decimals = valueStr.slice(-2);
  const integerArr = valueStr.split("").splice(0, length - 2);
  const integerArrFrmt = integerArr
    .reverse()
    .reduce((previous: string[], actual: string, index) => {
      previous.push(actual);
      if ((index + 1) % 3 === 0 && index + 1 !== integerArr.length)
        previous.push(".");
      return previous;
    }, []);
  const currencyFrmt = [integerArrFrmt.reverse().join(""), decimals];
  return currencyFrmt;
};

export default function Currency({ value }: IProps) {
  const [main, fraction] = formatValue(value);

  return (
    <span style={{ fontSize: "28px", boxSizing: "border-box" }}>
      <span style={{ top: "-.75em", fontSize: "13px", position: "relative" }}>
        R$
      </span>
      <span style={{ lineHeight: "normal" }}>{main}</span>
      <span style={{ top: "-.75em", fontSize: "13px", position: "relative" }}>
        {fraction}
      </span>
    </span>
  );
}

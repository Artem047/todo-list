type TProps = {
    text: string,
    num: number,
}

const TruncateText = ({text, num}: TProps) => {
  const truncateTitle = (str: string, n: number) => {
    return str.length > n ? str.substring(0, n - 1) + "..." : str;
  };
  return <div>{truncateTitle(text, num)}</div>;
};

export default TruncateText;

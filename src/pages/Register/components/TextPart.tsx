type Props = {
  title: string;
  text?: string;
  list?: string[];
};

const TextPart = ({ title, text, list }: Props) => {
  return (
    <div className="w-full z-0">
      <h3 className="font-sans font-bold text-2xl">{title}</h3>

      {text && <p className="text-lg text-text-dark">{text}</p>}

      {list && (
        <ul className="text-text-dark">
          {list.map((e, index) => (
            <li className="text-lg font-sans">{`${index + 1}- ${e}`}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default TextPart;

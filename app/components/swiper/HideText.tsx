interface HideGroupProps {
  visible: boolean;
  labels: {
    title: string;
    value: string;
  }[];
}

const HideGroup: React.FC<HideGroupProps> = ({ visible, labels }) => {
  const maskText = (text: string) => "*".repeat(text.length);

  return (
    <div className=" flex flex-col gap-2">
      {labels.map((item, index) => (
        <div key={index}>
          <span className="text-[#626973] font-normal text-[14px]">
            {item.title}
          </span>
          <p className="text-[#000000] leading-3 text-[14px]">
            <b>{visible ? item.value : maskText(item.value)}</b>
          </p>
        </div>
      ))}
    </div>
  );
};

export default HideGroup;

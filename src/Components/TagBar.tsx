export const Tags = [
  "All",
  "Useful Links",
  "Github",
  "CheatSheets",
  "Tool",
  "Design UI/UX",
  "Frontend",
  "Beckend",
  "Cool Websites",
  "Design Inspiration",
  "Figma",
];

interface Props {
  onSelectedTag: (tag: string) => void;
}

const TagBar = ({ onSelectedTag }: Props) => {
  return (
    <div className="flex gap-2 flex-wrap items-center justify-center">
      {Tags.map((item, index) => (
        <span
          key={index}
          onClick={() => onSelectedTag(item)}
          className={`text-xs sm:text-sm badge badge-default badge-outline p-3 font-normal cursor-pointer hover:bg-gray-500`}
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default TagBar;

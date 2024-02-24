import { CardType } from "../App";
import CardLayout from "./CardLayout";

interface Props {
  data: CardType[];
  selectedTag: string;
  onDelete: (id: number) => void;
}

const Cards = ({ data, selectedTag, onDelete }: Props) => {
  return (
    <>
      <h1 className="text-5xl uppercase mt-5">{selectedTag && selectedTag}</h1>
      <div className="mt-5 grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-5 md:grid-cols-4 gap-5">
        {data.map((item) => (
          <CardLayout data={item} onDelete={onDelete} />
        ))}
      </div>
    </>
  );
};

export default Cards;

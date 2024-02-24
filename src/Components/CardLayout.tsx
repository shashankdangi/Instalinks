import { CardType } from "../App";
import { MdDeleteOutline } from "react-icons/md";

interface Props {
  data: CardType;
  onDelete: (id: number) => void;
}

const CardLayout = ({ data, onDelete }: Props) => {
  return (
    <>
      <div
        // href={`https://${data.url}/`}
        // target="_blank"
        className="outline outline-1 rounded-xl p-5 h-auto flex flex-col items-center gap-2"
      >
        <img
          src={
            data.tag === "Github"
              ? "https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://github.com&size=50"
              : `https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${data.url}&size=50`
          }
          alt={data.url}
          className="object-contain align-top size-10"
        />
        <div className="flex flex-col items-center">
          <a
            href={`https://${data.url}/`}
            target="_blank"
            className="text-2xl font-semibold capitalize underline"
          >
            {data.title}
          </a>
          <p className="text-sm">{data.desc}</p>
          <span className="badge badge-outline mt-3 text-xs h-auto sm:text-sm">
            {data.tag}
          </span>
        </div>
        <button
          className="btn btn-outline btn-error"
          onClick={() => onDelete(data.id)}
        >
          <MdDeleteOutline style={{ color: "red", fontSize: "1.5rem" }} />
        </button>
      </div>
    </>
  );
};

export default CardLayout;

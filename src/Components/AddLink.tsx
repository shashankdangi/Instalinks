import { IoMdAdd, IoMdClose } from "react-icons/io";
import { CardType } from "../App";
import { useRef, useState } from "react";
import { Tags } from "./TagBar";

interface Props {
  onSetLink: (item: CardType) => void;
  link: CardType[];
}

const AddLink = ({ onSetLink, link }: Props) => {
  const title = useRef<HTMLInputElement>(null);
  const desc = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [SelectedTag, setSelectedTag] = useState("");

  const addNewItem = () => {
    const newItem: CardType = {
      id: link.length + 1,
      title: title.current!.value,
      desc: desc.current!.value,
      url: linkRef.current!.value,
      tag: SelectedTag,
    };
    onSetLink(newItem);
    title.current!.value = "";
    desc.current!.value = "";
    linkRef.current!.value = "";
    setSelectedTag("");
  };

  return (
    <>
      <button
        className="btn btn-neutral text-2xl mt-5"
        onClick={() =>
          (
            document.getElementById("my_modal_3") as HTMLDialogElement
          ).showModal()
        }
      >
        <IoMdAdd />
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-7 top-10 text-2xl">
              <IoMdClose />
            </button>
          </form>
          <form
            className="flex gap-3 flex-col p-3"
            onSubmit={(e) => {
              e.preventDefault();
              addNewItem();
            }}
          >
            <h3 className="font-bold text-2xl ml-2 uppercase">Add Link</h3>
            <label className="input input-bordered flex items-center gap-2">
              Name
              <input
                ref={title}
                type="text"
                className="grow"
                placeholder="Title"
                required
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Desc
              <input
                ref={desc}
                type="text"
                className="grow"
                placeholder="Description"
                required
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              URL
              <input
                ref={linkRef}
                type="text"
                className="grow"
                placeholder="google.com"
                required
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Select
              <select
                className="flex w-full bg-inherit p-3"
                onChange={(e) => setSelectedTag(e.target.value)}
                value={SelectedTag}
              >
                <option value="">Tag</option>
                {Tags.map((item) =>
                  item === "All" ? "" : <option value={item}>{item}</option>
                )}
              </select>
            </label>
            <button
              type="submit"
              className="btn btn-default btn-outline text-2xl"
            >
              Submit Link
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default AddLink;

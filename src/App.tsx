import { useState } from "react";
import Cards from "./Components/Cards";
import Navbar from "./Components/Navbar";
import TagBar from "./Components/TagBar";

export interface CardType {
  id: number;
  title: string;
  desc: string;
  url: string;
  tag: string;
}

const App = () => {
  const [links, setLinks] = useState<CardType[]>([]);
  const [selectedTag, setSelectTag] = useState("");

  const handleDelete = (id: number) => {
    setLinks(links.filter((p) => p.id !== id));
  };

  const filterLinks = selectedTag
    ? selectedTag === "All"
      ? links
      : links.filter((item) => item.tag === selectedTag)
    : links;
  return (
    <div className="box-border font-mono pl-5 pr-5">
      <Navbar onSetLink={(link) => setLinks([...links, link])} link={links} />
      <TagBar onSelectedTag={(tag) => setSelectTag(tag)} />
      <Cards
        data={filterLinks}
        selectedTag={selectedTag}
        onDelete={(id) => handleDelete(id)}
      />
    </div>
  );
};

export default App;

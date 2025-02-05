import React, { useEffect } from "react";
import { IKidDetailListProps } from "./IKidDetailListProps";
import DataTable from "./KidDataComponent";
// import { AnnouncedQuickActionsExample } from "./test1";

require("./mycss.css");

const KidDetailList: React.FC<IKidDetailListProps> = () => {
  useEffect(() => {
    const mytableElement = document.querySelector(".TableMain");

    if (mytableElement) {
      let parentDiv: Element | null = mytableElement;
      for (let i = 0; i <= 5; i++) {
        parentDiv = parentDiv.parentElement;
        if (!parentDiv) break;
      }

      if (parentDiv instanceof Element) {
        parentDiv.classList.add("WebpartsParentDiv");
      }
    }
  }, []);

  return (
    <div className="TableMain">
      <DataTable />
    </div>
  );
};

export default KidDetailList;

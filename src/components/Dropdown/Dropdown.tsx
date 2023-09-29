import React, { useState } from "react";
import classNames from "classnames";
import "./Dropdown.scss";
import { ICategory } from "@/types/category";
import { CiChevronDown } from "@/assets/icons";

type Props = {
  title: string;
  content: ICategory[];
};

const Dropdown = ({ title, content }: Props) => {
  const [show, setShow] = useState(false);

  const toggleMenu = () => setShow((prev) => !prev);
  return (
    <>
      <div className='dropdown'>
        <h4
          onClick={toggleMenu}
          className={classNames("dropdown__heading", {
            active: show,
          })}
        >
          {title}
          <CiChevronDown
            className={classNames("arrow-svg", {
              rotate: show,
            })}
            size={16}
            color={"#B8B8B8"}
          />
        </h4>
        {show && (
          <ul className='dropdown__content'>
            {content.map((child) => (
              <li key={child.id}>{child.name}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Dropdown;

import { FC, ReactElement } from "react";
import { Routes, Route } from "react-router-dom";
import { Admin } from "../views/Admin";
import { Assigment } from "../views/Assigment";
import { Home } from "../views/Home";
import { List } from "../views/List";

export const Router: FC = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/list" element={<List />} />
      <Route path="/assigment" element={<Assigment />} />
    </Routes>
  );
};

import {FC, ReactElement } from "react";
import { Layouts } from "../../components/Layouts";
import { HeadContent } from "./content";

export const Home: FC = (): ReactElement => {
	return <>
		<Layouts content={<HeadContent/>}/>
	</>;
};
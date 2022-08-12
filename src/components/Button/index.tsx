import { ButtonDto } from "../../utilities/dto/buttons.dto";
import { ReactElement } from "react";

export const Button: React.FC<ButtonDto> = (props: ButtonDto): ReactElement => {
	const {
		text,
		bgColor = "border-blue-400",
		textColor = "text-blue-400",
		type,
	} = props;
	return (
		<button
			type={type}
			className={` ${textColor} ${bgColor} rounded-lg w-auto h-auto p-2 border-2 font-medium`}
		>
			{text}
		</button>
	);
};
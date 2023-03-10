// styles
import { InputHTMLAttributes, useRef } from "react";
import * as Styled from "./styles";

// types
export type TextInputProps = {
	label: string;
	name: string;
	type?: string;
	onInputChange?: (value: string) => void;
	disabled?: boolean;
	value?: string;
	as?: "input" | "textarea";
	reference?: HTMLInputElement;
} & InputHTMLAttributes<HTMLInputElement>;

const TextInput = ({
	label,
	name,
	type = "text",
	onInputChange,
	disabled = false,
	value = "",
	as = "input",
	reference = null,
	required = false,
}: TextInputProps) => {
	const inputRef = useRef(reference);

	// synthetic event handler
	const handleChange = () => {
		const value = inputRef.current.value;

		if (onInputChange) {
			onInputChange(value);
		}
	};

	return (
		<Styled.Wrapper>
			<Styled.Input
				type={type}
				name={name}
				disabled={disabled}
                                value={value}
				ref={inputRef}
				onChange={handleChange}
				as={as}
				defaultValue={value}
				required={required}
				placeholder={label}
			/>
		</Styled.Wrapper>
	);
};

export default TextInput;

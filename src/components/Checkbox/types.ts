export interface CheckboxProps {
    checked?: boolean;
    disabled?: boolean;
    id?: string;
    label: string;
    layout?: "box" | "switch";
    name: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
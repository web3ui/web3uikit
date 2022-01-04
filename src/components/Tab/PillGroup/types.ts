export interface PillGroupProps {
  id?: string;
  children: Array<React.ReactNode>;
  defaultActiveKey?: number;
  tabs: Array<string>;
}

import { ISelectProps } from './types';
import OldSelect from './OldSelect/OldSelect';
import TraditionalSelect from './TraditionalSelect/TraditionalSelect';
import SelectBeta from './SelectBeta/SelectBeta';

const Select: React.FC<ISelectProps> = (props: ISelectProps) => {
    if (props.tryBeta) return <SelectBeta {...props} />;
    return props.traditionalHTML5 ? (
        <TraditionalSelect {...props} />
    ) : (
        <OldSelect {...props} />
    );
};

export default Select;

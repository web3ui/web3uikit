import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useArgs } from '@storybook/addons';
import { action } from '@storybook/addon-actions';
import { color } from '@web3uikit/styles';
import { Btc, Discord, Server, Testnet } from '@web3uikit/icons';
import Select from './Select';
import { callCodeData } from './SelectBeta/mockData';
import { OptionProps } from './types';

export default {
    title: '2.Forms/Select',
    component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

const onTestOptionChange = (e: any) => {
    console.log(e);
};

const smallOptionsList = [
    {
        label: 'Discord',
        id: 'discord',
        prefix: <Discord fill={color.blueGray50} />,
    },
    {
        label: 'Emoji',
        id: 'emoji',
        prefix: '🏴󠁧󠁢󠁷󠁬󠁳󠁿',
    },
    {
        label: 'TXT',
        id: 'txt',
        prefix: 'TXT',
    },
    {
        label: 'dApp',
        id: 'dapp',
        prefix: <Server fill={color.blueGray50} />,
    },
];

const optionsList = [
    {
        label: 'Discord',
        id: 'discord',
        prefix: <Discord fill={color.blueGray50} />,
    },
    {
        label: 'Emoji',
        id: 'emoji',
        prefix: '😃',
    },
    {
        label: 'TXT',
        id: 'txt',
        prefix: 'TXT',
    },
    {
        label: 'dApp',
        id: 'dapp',
        prefix: <Server fill={color.blueGray50} />,
    },
    {
        label: 'Discord',
        id: 'discord1',
        prefix: <Discord fill={color.blueGray50} />,
    },
    {
        label: 'Discord',
        id: 'discord2',
        prefix: <Discord fill={color.blueGray50} />,
    },
    {
        label: 'Discord',
        id: 'discord3',
        prefix: <Discord fill={color.blueGray50} />,
    },
    {
        label: 'Discord',
        id: 'discord4',
        prefix: <Discord fill={color.blueGray50} />,
    },
    {
        label: 'Discord',
        id: 'discord5',
        prefix: <Discord fill={color.blueGray50} />,
    },
];

export const Default = Template.bind({});
Default.args = {
    options: smallOptionsList,
    onChange: onTestOptionChange,
    label: 'Label Text',
    defaultOptionIndex: 0,
    id: 'Select',
};

export const NoDefaultIndexOption = Template.bind({});
NoDefaultIndexOption.args = {
    options: optionsList,
    onChange: onTestOptionChange,
    label: 'Label Text',
};

export const Error = Template.bind({});
Error.args = {
    options: optionsList,
    onChange: onTestOptionChange,
    label: 'Label Text',
    state: 'error',
    defaultOptionIndex: 0,
};

export const ErrorWithMessage = Template.bind({});
ErrorWithMessage.args = {
    options: optionsList,
    onChange: onTestOptionChange,
    label: 'Label Text',
    state: 'error',
    defaultOptionIndex: 0,
    errorMessage: 'Oops...error',
};

export const Confirmed = Template.bind({});
Confirmed.args = {
    options: optionsList,
    onChange: onTestOptionChange,
    label: 'Label Text',
    state: 'confirmed',
    defaultOptionIndex: 0,
};

export const PrefixText = Template.bind({});
PrefixText.args = {
    options: [
        {
            label: 'All',
            id: 'All',
        },
        {
            label: 'Active',
            id: 'Active',
        },
    ],
    onChange: onTestOptionChange,
    prefixText: 'Server:',
    defaultOptionIndex: 0,
};

export const PrefixIcon = Template.bind({});
PrefixIcon.args = {
    options: [
        {
            label: 'Testnet',
            id: 'Testnet',
            prefix: <Server fill={color.blueGray50} />,
        },
        {
            label: 'Mainnet',
            id: 'Mainnet',
            prefix: <Testnet fill={color.blueGray50} />,
        },
        {
            label: 'Local Dev Chain',
            id: 'LocalDevChain',
            prefix: <Btc fill={color.blueGray50} />,
        },
    ],
    onChange: onTestOptionChange,
    prefixIcon: <Server fill={color.blueGray50} fontSize={20} />,
    width: '100%',
    label: 'Select Server',
};

export const Disabled = Template.bind({});
Disabled.args = {
    options: optionsList,
    onChange: onTestOptionChange,
    label: 'Label Text',
    disabled: true,
    defaultOptionIndex: 0,
};

export const Nodata = Template.bind({});
Nodata.args = {
    onChange: onTestOptionChange,
    label: 'Label Text',
    defaultOptionIndex: 0,
};

export const ControlledValue = Template.bind({});
ControlledValue.args = {
    options: smallOptionsList,
    onChange: onTestOptionChange,
    label: 'Label Text',
    value: 'txt',
};

export const HTML5Select = Template.bind({});
HTML5Select.args = {
    label: 'Good old HTML5',
    onChangeTraditional: onTestOptionChange,
    options: smallOptionsList,
    traditionalHTML5: true,
    validation: { required: true },
    value: 'txt',
};

export const HTML5SelectWithDescription = Template.bind({});
HTML5SelectWithDescription.args = {
    description: 'Much Needed',
    label: 'Good old HTML5',
    onChangeTraditional: onTestOptionChange,
    options: smallOptionsList,
    traditionalHTML5: true,
    validation: { required: true },
    value: 'txt',
};

export const Description = Template.bind({});
Description.args = {
    options: smallOptionsList,
    onChange: onTestOptionChange,
    label: 'Label Text',
    defaultOptionIndex: 0,
    description: 'Much Needed',
};

const TemplateBetaSingle: ComponentStory<typeof Select> = (args) => {
    const [_, updateArgs] = useArgs();
    const handleChange = (val: OptionProps) => {
        action('value changed=> new id')(val.id);
        updateArgs({ value: val.id });
    };

    return (
        <Select
            tryBeta={true}
            {...args}
            onChange={(val) => handleChange(val as OptionProps)}
        />
    );
};

export const BetaSelect = TemplateBetaSingle.bind({});
BetaSelect.args = {
    options: callCodeData.map((item) => ({
        label: `${item.name}(${item.dialCode})`,
        prefix: (
            <img
                src={`https://countryflagsapi.com/png/${item.isoCode}`}
                loading="lazy"
                width="24px"
                height="24px"
            />
        ),
        id: `${item.dialCode}-${item.isoCode}`,
    })),
    description: 'select the country your card belongs to',
    disabled: false,
    isMulti: false,
    isSearch: true,
    label: 'Select Country',
    max: 3,
    name: 'demo',
    placeholder: 'Something big name',
    width: '16em',
    menuHeight: '300px',
    height: '40px',
};

export const BetaSelectCustomLight = TemplateBetaSingle.bind({});
BetaSelectCustomLight.args = {
    isMulti: false,
    isSearch: true,
    label: 'Select',
    name: 'demo',
    customize: {
        color: color.navy40,
        backgroundColor: color.white,
        borderRadius: '56px',
        border: '2px solid #99D3FF',
        menuBgColor: color.white,
        menuColor: color.blue70,
        menuItemBgColorOnHover: color.aero20,
    },
    options: optionsList,
    placeholder: 'Something big name',
    width: '16em',
};
export const BetaSelectCustomDark = TemplateBetaSingle.bind({});
BetaSelectCustomDark.args = {
    isMulti: false,
    isSearch: true,
    label: 'Select',
    name: 'demo',
    customize: {
        color: '#99D3FF',
        backgroundColor: '#213853',
        borderRadius: '56px',
        border: '2px solid #99D3FF',
        onHover: 'lighten',
        menuBgColor: '#213853',
        menuColor: '#99D3FF',
        menuItemBgColorOnHover: color.aero50,
    },
    options: optionsList,
    placeholder: 'Something big name',
    width: '16em',
};

const TemplateBetaMulti: ComponentStory<typeof Select> = (args) => {
    const [_, updateArgs] = useArgs();
    const handleChange = (val: string[]) => {
        action('value changed')(val);
        updateArgs({ value: val });
    };
    return (
        <>
            <Select
                tryBeta={true}
                {...args}
                onChange={(val) => handleChange(val as string[])}
            />
        </>
    );
};

export const BetaSelectDisabled = TemplateBetaSingle.bind({});
BetaSelectDisabled.args = {
    disabled: true,
    isMulti: false,
    isSearch: true,
    label: 'Select',
    max: 3,
    name: 'demo',
    options: optionsList,
    placeholder: 'Something big name',
    width: '16em',
};

export const BetaSelectMulti = TemplateBetaMulti.bind({});
BetaSelectMulti.args = {
    disabled: false,
    isMulti: true,
    isSearch: true,
    label: 'Select',
    max: 3,
    name: 'demo',
    options: optionsList,
    placeholder: 'Something big name',
    width: '16em',
};

export const BetaSelectNoSearch = TemplateBetaMulti.bind({});
BetaSelectNoSearch.args = {
    disabled: false,
    isMulti: true,
    isSearch: false,
    label: 'Select Item',
    name: 'demo',
    options: optionsList,
    placeholder: 'Something big name',
    width: '16em',
};

export const BetaNoData = TemplateBetaSingle.bind({});
BetaNoData.args = {
    disabled: false,
    isMulti: false,
    isSearch: true,
    label: 'Select Item',
    name: 'demo',
    placeholder: 'Something big name',
};

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { color } from '@web3uikit/styles';
import { Btc, Discord, Server, Testnet } from '@web3uikit/icons';
import Select from './Select';
import { useState } from 'react';
import { callCodeData } from './SelectBeta/mockData';
import { Typography } from '../Typography';

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
        prefix: <Discord fill={color.grey} />,
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
        prefix: <Server fill={color.grey} />,
    },
];

const optionsList = [
    {
        label: 'Discord',
        id: 'discord',
        prefix: <Discord fill={color.grey} />,
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
        prefix: <Server fill={color.grey} />,
    },
    {
        label: 'Discord',
        id: 'discord1',
        prefix: <Discord fill={color.grey} />,
    },
    {
        label: 'Discord',
        id: 'discord2',
        prefix: <Discord fill={color.grey} />,
    },
    {
        label: 'Discord',
        id: 'discord3',
        prefix: <Discord fill={color.grey} />,
    },
    {
        label: 'Discord',
        id: 'discord4',
        prefix: <Discord fill={color.grey} />,
    },
    {
        label: 'Discord',
        id: 'discord5',
        prefix: <Discord fill={color.grey} />,
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
            prefix: <Server fill={color.grey} />,
        },
        {
            label: 'Mainnet',
            id: 'Mainnet',
            prefix: <Testnet fill={color.grey} />,
        },
        {
            label: 'Local Dev Chain',
            id: 'LocalDevChain',
            prefix: <Btc fill={color.grey} />,
        },
    ],
    onChange: onTestOptionChange,
    prefixIcon: <Server fill={color.grey} fontSize={20} />,
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

const TemplateBeta: ComponentStory<typeof Select> = (args) => {
    const [select, setSelect] = useState<string[]>([]);

    return (
        <form
            onSubmit={(evt) => {
                // console.log(evt.target?.demo.value);
                evt.preventDefault();
            }}
        >
            <Select
                tryBeta={true}
                {...args}
                value={select}
                onChange={(val) => setSelect(val as string[])}
            />
            <br />
            <button type="submit" style={{ marginTop: '10px' }}>
                Submit
            </button>
            <br />
            <Typography>Submitted Value: {select.toString()}</Typography>
        </form>
    );
};

export const DefaultBeta = TemplateBeta.bind({});
DefaultBeta.args = {
    // options: callCodeData.map((item) => ({
    //     label: `${item.name}(${item.dialCode})`,
    //     prefix: (
    //         <img
    //             src={`https://countryflagsapi.com/png/${item.isoCode}`}
    //             loading="lazy"
    //         />
    //     ),
    //     id: `${item.dialCode},${item.isoCode}`,
    // })),
    options: [
        {
            label: 'Discord',
            id: 'discord',
            prefix: <Discord fill={color.grey} />,
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
            prefix: <Server fill={color.grey} />,
        },
        {
            label: 'dApp1',
            id: 'dapp1',
            prefix: <Server fill={color.grey} />,
        },
    ],
    name: 'Demo-a-big-name',
    isMulti: true,
    isSearch: true,
    disabled: true,
    max: 3,
    width: '16em',
    placeholder: 'Something big name',
};

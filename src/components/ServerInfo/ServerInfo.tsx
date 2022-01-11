import {ServerInfoProps} from "./types";
import React, {useState} from "react";
import {
    NetworkName,
    ServerContainer,
    ServerFooter,
    ServerInfoWrapper,
    ServerName,
    ServerRow,
    WidgetRow
} from "./ServerInfo.styles";
import {Tag} from "../Tag";
import {Icon} from "../Icon";
import {iconTypes} from "../Icon/collection";
import {Button} from "../Button";
import colors from "../../styles/colors";

const ServerInfo: React.FC<ServerInfoProps> = ({
    id,
    name,
    network,
    version,
}: ServerInfoProps) => {
    const [ isCollapsed, setCollapsed ] = useState<boolean>(false);
    return (
        <ServerInfoWrapper
        id={id}
        >
            <ServerRow >
                <div style={{display: 'flex', alignItems: 'center', gap: "15px"}}>
                    <ServerName>
                        {name}
                    </ServerName>
                    <Tag text={version} color="gray"/>
                    <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                        <Icon svg={iconTypes.cube} fill="black" size={16}/>
                        <NetworkName >
                            {network}
                        </NetworkName>
                    </div>
                </div>

                <div style={{display: 'flex', alignItems: 'center', gap: "15px"}}>
                    <Button onClick={() => {}} text={"View dApp"} theme="outline" />
                    <Button onClick={() => {}} text={"Settings"} theme="outline" />
                    <Button onClick={() => setCollapsed(!isCollapsed)} icon={isCollapsed ? iconTypes.chevron_up : iconTypes.chevron_down} iconLayout="icon-only" theme="outline" />
                </div>
            </ServerRow>
            {isCollapsed && <div style={{width: "100%", height: "1px", background: colors.paleBlue2}} />}
            { isCollapsed &&
                <ServerContainer>
                    <WidgetRow>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                    </WidgetRow>
                    <ServerFooter>
                        <div style={{display: 'flex', alignItems: 'center', gap: "15px"}}>
                            <Button onClick={() => {}} icon={iconTypes.server} iconLayout="icon-only" theme="outline" />
                            <Button onClick={() => {}} icon={iconTypes.reload} iconLayout="icon-only" theme="outline" />
                            <Button onClick={() => {}} icon={iconTypes.update} color="green" text="Update & Restart" iconLayout="trailing" theme="outline" />
                        </div>
                        <Button onClick={() => {}} text="Database" iconLayout="leading" icon={iconTypes.chart} theme="outline" />
                    </ServerFooter>
                </ServerContainer>
            }
        </ServerInfoWrapper>
    )
}

export default ServerInfo;
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
import {Widget} from "../Widget";

const ServerInfo: React.FC<ServerInfoProps> = ({
    id,
    isSleeping,
    dataUsed,
    name,
    network,
    numOfUser,
    onDapp,
    onDatabase,
    onDelete,
    onRestart,
    onSettings,
    onUpdate,
    onWakeUp,
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
                    {!isSleeping &&
                        <>
                            <Button onClick={onDapp} text={"View dApp"} theme="outline"/>
                            <Button onClick={onSettings} text={"Settings"} theme="outline" />
                        </>
                    }
                    <Button onClick={!isSleeping ? () => setCollapsed(!isCollapsed) : onWakeUp} icon={!isSleeping ? (isCollapsed ? iconTypes.chevron_up : iconTypes.chevron_down) : iconTypes.reload} iconLayout={!isSleeping ? "icon-only" : "leading"} text={isSleeping ? "Wake up Server" : ``} color={"yellow"} />
                </div>
            </ServerRow>
            {isCollapsed && <div style={{width: "100%", height: "1px", background: colors.paleBlue2}} />}
            { isCollapsed &&
                <ServerContainer>
                    <WidgetRow>
                        <Widget description={String(network)} icon={iconTypes.network} iconLayout="leading" title={"Environment"} />
                        <Widget description={`${dataUsed} mb` || "0"} title={"Data used"} />
                        <Widget description={numOfUser || "0"} title={"Number of users"} />
                    </WidgetRow>
                    <ServerFooter>
                        <div style={{display: 'flex', alignItems: 'center', gap: "15px"}}>
                            <Button onClick={onDelete} icon={iconTypes.bin} iconLayout="icon-only" theme="outline" />
                            <Button onClick={onRestart} icon={iconTypes.reload} iconLayout="icon-only" theme="outline" />
                            <Button onClick={onUpdate} icon={iconTypes.update} color="green" text="Update & Restart" iconLayout="trailing" theme="outline" />
                        </div>
                        <Button onClick={onDatabase} text="Database" iconLayout="leading" icon={iconTypes.chart} theme="outline" />
                    </ServerFooter>
                </ServerContainer>
            }
        </ServerInfoWrapper>
    )
}

export default ServerInfo;
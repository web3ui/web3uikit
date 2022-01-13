import {ServerInfoProps} from "./types";
import React, {useState} from "react";
import {
    Divider,
    Flex,
    NetworkName,
    ServerContainer,
    ServerFooter,
    ServerInfoWrapper,
    ServerName,
    ServerRow,
} from "./ServerInfo.styles";
import {Tag} from "../Tag";
import {Icon} from "../Icon";
import {iconTypes} from "../Icon/collection";
import {Button} from "../Button";
import {Widget} from "../Widget";

const ServerInfo: React.FC<ServerInfoProps> = ({
    id,
    isSleeping,
    canRevive,
    dataUsed,
    name,
    network,
    numOfUser,
    onDapp,
    onDatabase,
    onDelete,
    onRestart,
    onRevive,
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
            <ServerRow canRevive={canRevive}>
                <Flex>
                    <ServerName>
                        {name}
                    </ServerName>
                    <Tag text={version} color="grey"/>
                    <Flex >
                        <Icon svg={iconTypes.cube} fill="black" size={16}/>
                        <NetworkName >
                            {network}
                        </NetworkName>
                    </Flex>
                </Flex>

                <Flex >
                    {(!isSleeping && !canRevive) &&
                        <>
                            <Button onClick={onDapp} text={"View dApp"} theme="outline"/>
                            <Button onClick={onSettings} text={"Settings"} theme="outline" />
                        </>
                    }
                    <Button
                        onClick={isSleeping ? onWakeUp : canRevive ? onRevive : () => setCollapsed(!isCollapsed)}
                        icon={isSleeping ? iconTypes.reload : canRevive ? iconTypes.pulse : (isCollapsed ? iconTypes.chevron_up : iconTypes.chevron_down) }
                        iconLayout={(isSleeping || canRevive) ? "leading" : "icon-only"}
                        text={isSleeping ? "Wake up Server" : canRevive ? "Revive Server" : ``}
                        theme={(isSleeping || canRevive) ? "colored" : "outline"}
                        color={isSleeping ? "yellow" : canRevive ? "green" : `blue`}
                    />
                </Flex>
            </ServerRow>
            {isCollapsed && <Divider />}
            { isCollapsed &&
                <ServerContainer>
                    <Flex>
                        <Widget description={String(network)} icon={iconTypes.network} title={"Environment"} />
                        <Widget description={`${dataUsed} mb` || "0"} title={"Data used"} />
                        <Widget description={numOfUser || "0"} title={"Number of users"} />
                    </Flex>
                    <ServerFooter>
                        <Flex>
                            <Button onClick={onDelete} icon={iconTypes.bin} iconLayout="icon-only" theme="outline" />
                            <Button onClick={onRestart} icon={iconTypes.reload} iconLayout="icon-only" theme="outline" />
                            <Button onClick={onUpdate} icon={iconTypes.update} color="green" text="Update & Restart" iconLayout="trailing" theme="outline" />
                        </Flex>
                        <Button onClick={onDatabase} text="Database" iconLayout="leading" icon={iconTypes.chart} theme="outline" />
                    </ServerFooter>
                </ServerContainer>
            }
        </ServerInfoWrapper>
    )
}

export default ServerInfo;
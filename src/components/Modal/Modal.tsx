import React, {useEffect, useState} from "react";
import {ModalProps} from "./types";
import styled from "styled-components";
import Button from "../Button/Button";
import {iconTypes} from "../Icon/collection";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

const ModalStyled = styled.div<Pick<ModalProps, "isVisible">>`
  ${(p) => p.isVisible ? 'display: grid;' : 'display: none;'};
  background-color: ${colors.white};
  box-shadow: 0 4px 10px rgba(48, 71, 105, 0.1);
  border-radius: 20px;
  width: 80%;
  ${fonts.text};
`

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px 10px;
  h3 {
    color: ${colors.blue}
  }
  
  div {
    border-radius: 15px;
    border-color: ${colors.blue};
  }
`

const ModalContent = styled.div`
  padding: 5px 32px 15px;
`

const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${colors.paleBlue2};
  padding: 15px 32px 20px;
`

const Modal: React.FC<ModalProps> = ({
    id = String(Date.now()),
    children,
    isVisible,
    cancelText = "Cancel",
    okText = "Ok",
    onCancel,
    onOk,
    title
}: ModalProps) => {
    const [visible, setVisibility] = useState(isVisible)

    useEffect(() => {
        setVisibility(isVisible)
    }, [isVisible])

    return (
        <ModalStyled
        id={id}
        isVisible={visible}
        >
            <ModalHeader>
                <h3>{title}</h3>
                <div>
                    <Button onClick={() => setVisibility(false)} icon={iconTypes.x} iconLayout={"icon-only"} theme={"outline"}/>
                </div>
            </ModalHeader>
            <ModalContent
            id={"content"}
            >
                {children}
            </ModalContent>
            <ModalFooter>
                <Button text={cancelText} theme={"outline"} onClick={onCancel ? onCancel : () => setVisibility(false)} />
                <Button text={okText} theme={"primary"} onClick={onOk} />
            </ModalFooter>
        </ModalStyled>
    )
}

export default Modal;
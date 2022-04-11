import React, { useEffect, useState } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import { Tag } from '../Tag';
import styles from './Todo.styles';
import { TodoProps } from './types';

const { DivStyled, DivStyledContent, SectionStyled } = styles;

const Todo: React.FC<TodoProps> = ({
    buttonText = 'Add',
    fullWidth = false,
    label,
    onChange,
    pattern,
    todos = [],
}) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [lists, setLists] = useState<string[]>(todos);

    useEffect(() => setLists(todos), [todos]);

    const removeTodo = (id: number) => {
        const updatedList = lists.filter((item) => item !== lists[id]);
        setLists([...updatedList]);
    };

    const addTodo = () => {
        setLists((prevTodo) => [...prevTodo, inputValue]);
        if (onChange) onChange(lists);
        setInputValue('');
        const input: HTMLInputElement | null = document.querySelector(
            '[data-testid="test-input"]',
        );
        input?.focus();
    };

    return (
        <SectionStyled data-testid="test-todo">
            <DivStyled>
                <Input
                    label={label}
                    onChange={(e) => setInputValue(e.target.value)}
                    size="large"
                    validation={{
                        regExp: pattern,
                    }}
                    value={inputValue}
                />
                <Button
                    disabled={!inputValue}
                    icon="plus"
                    onClick={addTodo}
                    size="large"
                    text={buttonText}
                    theme="primary"
                />
            </DivStyled>

            <DivStyledContent
                data-testid="test-todo_content"
                fullWidth={fullWidth}
            >
                {lists.map((todo, i) => (
                    <Tag
                        color="blueLight"
                        hasCancel
                        key={i}
                        onCancelClick={() => removeTodo(i)}
                        text={todo}
                    />
                ))}
            </DivStyledContent>
        </SectionStyled>
    );
};

export default Todo;

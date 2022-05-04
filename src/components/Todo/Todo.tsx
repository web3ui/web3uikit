import React, { useEffect, useMemo, useState, useRef } from 'react';
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
    const inputRef = useRef<HTMLInputElement | null>(null);
    const key = useMemo(() => Math.random(), []);
    const [inputValue, setInputValue] = useState<string>('');
    const [lists, setLists] = useState<string[]>(todos);

    useEffect(() => onChange && onChange(lists), [lists]);
    useEffect(() => setLists(todos), [todos]);

    const removeTodo = (id: number) => {
        const updatedList = lists.filter((item) => item !== lists[id]);
        setLists([...updatedList]);
    };

    const addTodo = (e: any) => {
        e.preventDefault();
        setLists((prevTodo) => [...prevTodo, inputValue]);
        setInputValue('');
        const input: HTMLInputElement | null = document.querySelector(
            `input[key="${key}"]`,
        );

        input?.focus();
    };

    return (
        <SectionStyled data-testid="test-todo">
            <form onSubmit={addTodo}>
                <DivStyled>
                    <Input
                        id="todo-input"
                        label={label}
                        onChange={(e) => setInputValue(e.target.value)}
                        size="large"
                        validation={{
                            regExp: pattern,
                            required: true,
                        }}
                        key={key}
                        value={inputValue}
                    />
                    <Button
                        type="submit"
                        disabled={!inputValue}
                        icon="plus"
                        size="large"
                        text={buttonText}
                        theme="primary"
                    />
                </DivStyled>
            </form>

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

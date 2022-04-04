import React, { useEffect, useState } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import { Tag } from '../Tag';
import { DivStyled, DivStyledContent, SectionStyled } from './Todo.styles';
import { TodoProps, TodoState } from './types';

const Todo: React.FC<TodoProps> = ({
    buttonText = 'Add',
    fullWidth = false,
    label,
    onAdd,
    pattern,
    todos = [],
}) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [lists, setLists] = useState<TodoState[]>([]);

    useEffect(() => {
        if (Array.isArray(todos) && todos?.length > 0) {
            setLists([...todos]);
        }
    }, [todos]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const onCancelClick = (id: number) => {
        setLists(lists.filter((todo: TodoState) => todo.id !== id));
    };

    const addTodo = () => {
        const check = onAdd?.() || true;
        if (check) {
            const todo = {
                id: Date.now(),
                text: inputValue,
            };
            setLists((prevTodo) => [...prevTodo, todo]);
            setInputValue('');
        }
    };

    return (
        <SectionStyled data-testid="test-todo">
            <DivStyled>
                <Input
                    label={label}
                    onChange={handleInputChange}
                    size="large"
                    validation={{
                        regExp: pattern,
                    }}
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

            <DivStyledContent fullWidth={fullWidth} data-testid="test-todo_content">
                {lists.map(({ id, text }) => (
                    <Tag
                        color="blueLight"
                        hasCancel
                        key={id}
                        onCancelClick={() => onCancelClick(id)}
                        text={text}
                    />
                ))}
            </DivStyledContent>
        </SectionStyled>
    );
};

export default Todo;

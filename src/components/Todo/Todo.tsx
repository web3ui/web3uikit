import React, { useState, useEffect } from 'react';

import { Button } from '../Button';
import { Input } from '../Input';
import { Tag } from '../Tag';

import {
    DivStyled,
    DivStyledContent,
    SectionStyled,
} from './Todo.styles';

import { TodoProps, TodoState } from './types';

const Todo: React.FC<TodoProps> = ({ todos = [], pattern, fullWidth = false }) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [lists, setLists] = useState<TodoState[]>([]);

    useEffect(() => {
        console.log('todos', todos);
        // if (Array.isArray(todos) && todos?.length > 0) {
        //     console.log('ghe> okay');
        //     setLists([...todos]);
        // }
    }, [todos]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const onCancelClick = (id: number) => {
        setLists(lists.filter((todo: TodoState) => todo.id !== id));
    };

    const addTodo = () => {
        let check = true;
        if (pattern) {
            check = new RegExp(pattern).test(inputValue);
        }
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
        <SectionStyled data-testid="todo-comp">
            <DivStyled>
                <Input
                    label="Enter IP"
                    size="large"
                    // value={inputValue}
                    onChange={handleInputChange}
                />
                <Button
                    theme="primary"
                    size="large"
                    text="Add"
                    icon="plus"
                    disabled={!inputValue}
                    onClick={addTodo}
                />
            </DivStyled>

            <DivStyledContent fullWidth={fullWidth}>
                {lists.map(({id, text}) => (
                    <Tag
                        key={id}
                        color="blueLight"
                        text={text}
                        onCancelClick={()=>onCancelClick(id)}
                        hasCancel
                    />
                ))}
            </DivStyledContent>
        </SectionStyled>
    );
};

export default Todo;

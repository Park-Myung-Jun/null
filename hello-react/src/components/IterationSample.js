import React, { useState } from 'react';

const IteratorSample = () => {
    const [names, setNames] = useState([
        {id:1, text: 'snowman'},
        {id:2, text: 'ice'},
        {id:3, text: 'snow'},
        {id:4, text: 'wind'},
    ]);
    const [inpuText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const onChange = e => setInputText(e.target.value);
    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,
            text: inpuText,
        });
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
    }

    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    }

    const onKeyPress = e => {
        if(e.key === 'Enter') {
            onClick();
        }
    }

    const nameList = names.map(name => (
        <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
            {name.text}
        </li>
    ));
    return (
        <>
            <input value={inpuText} onChange={onChange} onKeyPress={onKeyPress}/>
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>
        </>
    )
}

export default IteratorSample;
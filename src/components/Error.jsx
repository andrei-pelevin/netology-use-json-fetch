import React from 'react';
import useJsonFetch from "../hooks/useHooks";

const Error = () => {
    const [{ data, isLoading, hasError }] = useJsonFetch('http://localhost:7070/error', 5 * 1000, []);
    return (
        <div className='bg-danger m-5 col-3'>
            <p>Статус: {data.status}</p>
            <p>Наличие ошибок: {hasError ? ' Да' : 'Нет' }</p>
            <p>Идет запрос: {isLoading ? 'Да' : 'Нет'}</p>
        </div>
        );
}

export default Error;
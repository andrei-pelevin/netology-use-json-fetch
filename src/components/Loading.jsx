import React from 'react';
import useJsonFetch from "../hooks/useHooks";

const Loading = () => {
    const [{ data, isLoading, hasError }] = useJsonFetch('http://localhost:7070/loading', []);
    return (
        <div className='bg-warning m-5 col-3'>
            <p>Статус: {data.status}</p>
            <p>Наличие ошибок: {hasError ? ' Да' : 'Нет' }</p>
            <p>Идет запрос: {isLoading ? 'Да' : 'Нет'}</p>
        </div>
        );
}
export default Loading;
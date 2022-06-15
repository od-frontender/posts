import React from 'react';
import Input from '../input/Input';
import Select from '../select/Select';
import s from './PostFilter.module.css';

export default function PostFilter({ filter, setFilter }) {
  return (
    <div className={s.filter}>
      <Input
        className={s.searchArea}
        placeholder="Поиск"
        value={filter.query}
        onChange={e => setFilter({ ...filter, query: e.target.value })}
      />
      <Select
        value={filter.sort}
        onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
        defaultValue="Сортировка по"
        options={[
          {
            value: 'title',
            name: 'По названию',
          },
          {
            value: 'body',
            name: 'По описанию',
          },
        ]}
      />
    </div>
  );
}

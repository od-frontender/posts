import React from 'react';
import s from './Button.module.css';

export default function Button({ children, ...props }) {
  return (
    <button {...props} className={s.myBtn}>
      {children}
    </button>
  );
}

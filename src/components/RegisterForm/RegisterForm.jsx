import React from 'react';

const RegisterForm = ({styles}) => {
    return (
        <form className={styles.form}>
                    <h2 className={styles.title}>Register</h2>
                    <div className={styles.control}>
                        <label htmlFor="email" className={styles.label}>Email address</label>
                        <input type="email" placeholder='email' name="email" className={styles.input}/>
                    </div>
                    <div className={styles.control}>
                        <label htmlFor="password"  className={styles.label}>Password</label>
                        <input type="passworld" placeholder='pass' name="password" className={styles.input} />
                    </div>
                    <input type="submit" value="Register" className={styles.submit} />
        </form>
    );
};

export default RegisterForm;

/*
    Задача. Сделать процедуру регистрация
    1. Запросы отправляем на /api/register
    2. Нужно отправлять объект, который состоит из email and password
    3. В ответ на запрос будет приходить данные о зарегистрированном пользователе и зашифрованный пароль
 */
import React from 'react';

const LoginForm = ({styles}) => {
    return (
        <form className={styles.form}>
                    <h2 className={styles.title}>Login</h2>
                    <div className={styles.control}>
                        <label htmlFor="email" className={styles.label}>Email address</label>
                        <input type="email" placeholder='email' name="email" className={styles.input}/>
                    </div>
                    <div className={styles.control}>
                        <label htmlFor="password" className={styles.label}>Password</label>
                        <input type="passworld" placeholder='pass' name="password" className={styles.input} />
                    </div>
                    <div className={styles.controlCheckbox}>
                        <input type="checkbox" name="checkbox" className={styles.checkbox} />
                        <label htmlFor="checkbox" className={styles.labelCheckbox}>Remember me</label>
                    </div>
                    <input type="submit" value="Log In" className={styles.submit} />
        </form>
    );
};

export default LoginForm;

/*
    1. Создать redux store для хранения User в папке redux.
    2. Создать экшны LoginSuccess и Logout
    3. Отправлять запрос с введеным логином и паролем на /api/login 
    4. В ответ на запрос будут приходит данные о пользователе, которые нужно сохранять в store
*/
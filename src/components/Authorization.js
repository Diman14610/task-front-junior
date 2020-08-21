import React, { useState } from 'react'

const Authorization = ({ upUrl = f => f }) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const Auto = () => {
        if (login && login !== ' ') {
            if (password.length >= 8 && password.includes(password[0].toUpperCase()) && password.replace(/\D/g, '').length > 0) {
                fetch(`https://avatars.githubusercontent.com/${login}`)
                    .then((e) =>
                        e.blob().then(e2 => {
                            if (e2.size !== 5065) {
                                upUrl(e.url)
                            }
                            else
                                alert('Пользователь не найден')
                        })
                    )
                    .catch(() => console.log('error'))
            }
            else {
                alert('Пароль должен быть с заглавной буквы, иметь длину не менее 8 символов, и содержать хотя бы 1 цифру')
            }
        }
    }
    return (
        <div>
            <input placeholder='name' type='text' onChange={e => setLogin(e.target.value)} />

            <input placeholder='password' type='text' onChange={e => setPassword(e.target.value)} />

            <button onClick={() => Auto()}>Войти</button>

        </div>


    )
}

export default Authorization

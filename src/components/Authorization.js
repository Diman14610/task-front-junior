import React, { useState } from 'react'

const Authorization = ({ upUrl = f => f }) => {
    const [login, setLogin] = useState('diman14610')
    const [password, setPassword] = useState('Saffghjhgfds231ewq')

    const Auto = () => {
        if (login && login !== ' ') {
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

        if (password.length >= 8 && password.includes(password[0].toUpperCase()) && password.replace(/\D/g, '').length > 0) {
            // continue
        }
        else {
            alert('Пароль должен быть с заглавной буквы и иметь хотя бы 1 цифру')
        }
    }
    return (
        <div>
            <input placeholder='name' type='text' defaultValue={login} onChange={e => setLogin(e.target.value)} />

            <input placeholder='password' type='text' defaultValue={password} onChange={e => setPassword(e.target.value)} />

            <button onClick={() => Auto()}>Sign in</button>

        </div>


    )
}

export default Authorization

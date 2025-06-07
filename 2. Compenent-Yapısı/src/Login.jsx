import React from 'react'

export const users = [
    {
        username: "elif",
        password: "12345"
    },
    {
        username: "ahmet",
        password: "54321"
    }

]
function Login() {
    //Fragment kullanımı, birden fazla öğeyi tek bir üst öğe olmadan gruplamak için kullanılır.
    return (

        <div>
            <div>
                <p>Kullanıcı Adınız</p>
                <input type="text" />
            </div>

            <div>
                <p>Şifreniz</p>
                <input type="text" />
            </div>

            <div>
                <p>Giriş Yap</p>
                <input type="text" />
            </div>

        </div>

    )
}

export default Login

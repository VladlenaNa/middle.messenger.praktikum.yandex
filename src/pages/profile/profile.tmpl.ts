export const tmpl:string = `
    <div class="profile-page">
        <div class="card">
            {{{profileHeader}}}
        
            <div class="profile__inputs-wrapper">
                {{{profileForm}}}
            </div>

            <div class="profile__footer">
                <ul>
                    <li class="link">
                        <img src="/image/backButton.svg" alt="back">
                    </li>
                    <li class="link">
                        <a href="">Изменить данные</a>
                    </li>
                    <li class="link">
                        <a href="">Изменить пароль</a>
                    </li>
                    <li class="logout-link">
                        <a href="/src/pages/login/login.html">Выйти</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
`
